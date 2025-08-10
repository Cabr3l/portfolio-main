"""
Data Cleaning Pipeline for Hi!Paris Data Bootcamp
Author: Cabrel
Date: 2024
Description: Scripts de nettoyage et préparation des données pour le bootcamp Hi!Paris
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
import warnings
warnings.filterwarnings('ignore')

class DataCleaner:
    """
    Classe pour le nettoyage et la préparation des données
    """
    
    def __init__(self):
        self.cleaning_report = {}
        self.original_shape = None
        self.final_shape = None
        
    def load_data(self, file_path):
        """
        Charge les données depuis un fichier
        
        Args:
            file_path (str): Chemin vers le fichier de données
            
        Returns:
            pd.DataFrame: Données chargées
        """
        try:
            if file_path.endswith('.csv'):
                df = pd.read_csv(file_path)
            elif file_path.endswith('.xlsx'):
                df = pd.read_excel(file_path)
            elif file_path.endswith('.json'):
                df = pd.read_json(file_path)
            else:
                raise ValueError("Format de fichier non supporté")
                
            self.original_shape = df.shape
            print(f"✅ Données chargées: {df.shape[0]} lignes, {df.shape[1]} colonnes")
            return df
            
        except Exception as e:
            print(f"❌ Erreur lors du chargement: {e}")
            return None
    
    def analyze_data_quality(self, df):
        """
        Analyse la qualité des données
        
        Args:
            df (pd.DataFrame): DataFrame à analyser
            
        Returns:
            dict: Rapport de qualité des données
        """
        quality_report = {
            'shape': df.shape,
            'missing_values': df.isnull().sum().to_dict(),
            'missing_percentage': (df.isnull().sum() / len(df) * 100).to_dict(),
            'duplicates': df.duplicated().sum(),
            'duplicates_percentage': (df.duplicated().sum() / len(df)) * 100,
            'data_types': df.dtypes.to_dict(),
            'unique_values': {col: df[col].nunique() for col in df.columns},
            'memory_usage': df.memory_usage(deep=True).sum() / 1024**2  # MB
        }
        
        self.cleaning_report['quality_analysis'] = quality_report
        return quality_report
    
    def display_quality_summary(self, quality_report):
        """
        Affiche un résumé de la qualité des données
        
        Args:
            quality_report (dict): Rapport de qualité
        """
        print("\n📊 ANALYSE DE LA QUALITÉ DES DONNÉES")
        print("=" * 50)
        
        print(f"📏 Dimensions: {quality_report['shape'][0]} lignes × {quality_report['shape'][1]} colonnes")
        print(f"💾 Utilisation mémoire: {quality_report['memory_usage']:.2f} MB")
        print(f"🔄 Doublons: {quality_report['duplicates']} ({quality_report['duplicates_percentage']:.2f}%)")
        
        print(f"\n🔍 Valeurs manquantes:")
        for col, missing in quality_report['missing_values'].items():
            if missing > 0:
                percentage = quality_report['missing_percentage'][col]
                print(f"  {col}: {missing} ({percentage:.1f}%)")
        
        print(f"\n🏷️ Types de données:")
        for col, dtype in quality_report['data_types'].items():
            unique_count = quality_report['unique_values'][col]
            print(f"  {col}: {dtype} ({unique_count} valeurs uniques)")
    
    def handle_missing_values(self, df, strategy='auto'):
        """
        Gère les valeurs manquantes selon la stratégie choisie
        
        Args:
            df (pd.DataFrame): DataFrame avec valeurs manquantes
            strategy (str): Stratégie de traitement ('auto', 'drop', 'fill')
            
        Returns:
            pd.DataFrame: DataFrame avec valeurs manquantes traitées
        """
        df_clean = df.copy()
        missing_before = df_clean.isnull().sum().sum()
        
        if strategy == 'auto':
            # Stratégie automatique basée sur le type de données
            for col in df_clean.columns:
                if df_clean[col].dtype in ['int64', 'float64']:
                    # Variables numériques: remplacer par la médiane
                    df_clean[col].fillna(df_clean[col].median(), inplace=True)
                elif df_clean[col].dtype == 'object':
                    # Variables catégorielles: remplacer par le mode
                    mode_value = df_clean[col].mode()[0] if not df_clean[col].mode().empty else 'Unknown'
                    df_clean[col].fillna(mode_value, inplace=True)
                elif df_clean[col].dtype == 'datetime64[ns]':
                    # Variables temporelles: remplacer par la médiane
                    df_clean[col].fillna(df_clean[col].median(), inplace=True)
                    
        elif strategy == 'drop':
            # Supprimer toutes les lignes avec valeurs manquantes
            df_clean.dropna(inplace=True)
            
        elif strategy == 'fill':
            # Remplir avec des valeurs spécifiques
            for col in df_clean.columns:
                if df_clean[col].dtype in ['int64', 'float64']:
                    df_clean[col].fillna(0, inplace=True)
                else:
                    df_clean[col].fillna('Unknown', inplace=True)
        
        missing_after = df_clean.isnull().sum().sum()
        print(f"🔧 Valeurs manquantes traitées: {missing_before} → {missing_after}")
        
        self.cleaning_report['missing_values_handled'] = {
            'before': missing_before,
            'after': missing_after,
            'strategy': strategy
        }
        
        return df_clean
    
    def remove_duplicates(self, df, subset=None, keep='first'):
        """
        Supprime les doublons
        
        Args:
            df (pd.DataFrame): DataFrame avec doublons potentiels
            subset (list): Colonnes à considérer pour la détection des doublons
            keep (str): Stratégie de conservation ('first', 'last', False)
            
        Returns:
            pd.DataFrame: DataFrame sans doublons
        """
        df_clean = df.copy()
        duplicates_before = df_clean.duplicated(subset=subset).sum()
        
        df_clean.drop_duplicates(subset=subset, keep=keep, inplace=True)
        
        duplicates_after = df_clean.duplicated(subset=subset).sum()
        print(f"🔄 Doublons supprimés: {duplicates_before} → {duplicates_after}")
        
        self.cleaning_report['duplicates_removed'] = {
            'before': duplicates_before,
            'after': duplicates_after,
            'subset': subset,
            'keep': keep
        }
        
        return df_clean
    
    def handle_outliers(self, df, method='iqr', threshold=1.5):
        """
        Gère les outliers selon la méthode choisie
        
        Args:
            df (pd.DataFrame): DataFrame avec outliers potentiels
            method (str): Méthode de détection ('iqr', 'zscore', 'isolation')
            threshold (float): Seuil pour la détection
            
        Returns:
            pd.DataFrame: DataFrame avec outliers traités
        """
        df_clean = df.copy()
        numeric_columns = df_clean.select_dtypes(include=[np.number]).columns
        
        outliers_report = {}
        
        for col in numeric_columns:
            outliers_before = 0
            
            if method == 'iqr':
                Q1 = df_clean[col].quantile(0.25)
                Q3 = df_clean[col].quantile(0.75)
                IQR = Q3 - Q1
                lower_bound = Q1 - threshold * IQR
                upper_bound = Q3 + threshold * IQR
                
                outliers_mask = (df_clean[col] < lower_bound) | (df_clean[col] > upper_bound)
                outliers_before = outliers_mask.sum()
                
                # Remplacer les outliers par les bornes
                df_clean.loc[df_clean[col] < lower_bound, col] = lower_bound
                df_clean.loc[df_clean[col] > upper_bound, col] = upper_bound
                
            elif method == 'zscore':
                z_scores = np.abs(stats.zscore(df_clean[col].dropna()))
                outliers_mask = z_scores > threshold
                outliers_before = outliers_mask.sum()
                
                # Remplacer les outliers par la moyenne
                mean_value = df_clean[col].mean()
                df_clean.loc[outliers_mask, col] = mean_value
            
            outliers_report[col] = outliers_before
        
        total_outliers = sum(outliers_report.values())
        print(f"🔍 Outliers traités: {total_outliers} valeurs modifiées")
        
        self.cleaning_report['outliers_handled'] = {
            'method': method,
            'threshold': threshold,
            'outliers_per_column': outliers_report,
            'total_outliers': total_outliers
        }
        
        return df_clean
    
    def standardize_columns(self, df):
        """
        Standardise les noms des colonnes
        
        Args:
            df (pd.DataFrame): DataFrame avec colonnes à standardiser
            
        Returns:
            pd.DataFrame: DataFrame avec colonnes standardisées
        """
        df_clean = df.copy()
        
        # Standardisation des noms de colonnes
        df_clean.columns = df_clean.columns.str.lower().str.replace(' ', '_').str.replace('-', '_')
        
        # Suppression des caractères spéciaux
        df_clean.columns = df_clean.columns.str.replace('[^a-zA-Z0-9_]', '', regex=True)
        
        print(f"🏷️ Colonnes standardisées: {len(df_clean.columns)} colonnes")
        
        self.cleaning_report['columns_standardized'] = {
            'original_columns': list(df.columns),
            'new_columns': list(df_clean.columns)
        }
        
        return df_clean
    
    def validate_data_types(self, df):
        """
        Valide et corrige les types de données
        
        Args:
            df (pd.DataFrame): DataFrame avec types à valider
            
        Returns:
            pd.DataFrame: DataFrame avec types corrigés
        """
        df_clean = df.copy()
        type_changes = {}
        
        for col in df_clean.columns:
            original_type = str(df_clean[col].dtype)
            
            # Tentative de conversion des types
            try:
                # Conversion des dates
                if df_clean[col].dtype == 'object':
                    # Essayer de convertir en datetime
                    pd.to_datetime(df_clean[col], errors='coerce')
                    if not df_clean[col].isna().all():
                        df_clean[col] = pd.to_datetime(df_clean[col], errors='coerce')
                        type_changes[col] = f"{original_type} → datetime64[ns]"
                
                # Conversion des nombres
                elif df_clean[col].dtype == 'object':
                    # Essayer de convertir en numérique
                    numeric_series = pd.to_numeric(df_clean[col], errors='coerce')
                    if not numeric_series.isna().all():
                        df_clean[col] = numeric_series
                        type_changes[col] = f"{original_type} → {numeric_series.dtype}"
                        
            except Exception:
                pass
        
        if type_changes:
            print(f"🔄 Types de données modifiés:")
            for col, change in type_changes.items():
                print(f"  {col}: {change}")
        
        self.cleaning_report['data_types_validated'] = type_changes
        
        return df_clean
    
    def generate_cleaning_report(self):
        """
        Génère un rapport complet de nettoyage
        
        Returns:
            dict: Rapport complet de nettoyage
        """
        if not self.cleaning_report:
            return "Aucun rapport disponible"
        
        print("\n📋 RAPPORT COMPLET DE NETTOYAGE")
        print("=" * 50)
        
        # Résumé des opérations
        if 'quality_analysis' in self.cleaning_report:
            original = self.cleaning_report['quality_analysis']['shape']
            print(f"📏 Dimensions originales: {original[0]} × {original[1]}")
        
        # Valeurs manquantes
        if 'missing_values_handled' in self.cleaning_report:
            missing = self.cleaning_report['missing_values_handled']
            print(f"🔧 Valeurs manquantes: {missing['before']} → {missing['after']}")
        
        # Doublons
        if 'duplicates_removed' in self.cleaning_report:
            duplicates = self.cleaning_report['duplicates_removed']
            print(f"🔄 Doublons: {duplicates['before']} → {duplicates['after']}")
        
        # Outliers
        if 'outliers_handled' in self.cleaning_report:
            outliers = self.cleaning_report['outliers_handled']
            print(f"🔍 Outliers traités: {outliers['total_outliers']}")
        
        # Types de données
        if 'data_types_validated' in self.cleaning_report:
            type_changes = self.cleaning_report['data_types_validated']
            if type_changes:
                print(f"🏷️ Types modifiés: {len(type_changes)} colonnes")
        
        return self.cleaning_report
    
    def clean_pipeline(self, file_path, missing_strategy='auto', outlier_method='iqr'):
        """
        Pipeline complet de nettoyage des données
        
        Args:
            file_path (str): Chemin vers le fichier de données
            missing_strategy (str): Stratégie pour les valeurs manquantes
            outlier_method (str): Méthode pour la détection des outliers
            
        Returns:
            pd.DataFrame: DataFrame nettoyé
        """
        print("🚀 DÉBUT DU PIPELINE DE NETTOYAGE")
        print("=" * 40)
        
        # 1. Chargement des données
        df = self.load_data(file_path)
        if df is None:
            return None
        
        # 2. Analyse de la qualité
        quality_report = self.analyze_data_quality(df)
        self.display_quality_summary(quality_report)
        
        # 3. Gestion des valeurs manquantes
        print(f"\n🔧 Traitement des valeurs manquantes...")
        df = self.handle_missing_values(df, strategy=missing_strategy)
        
        # 4. Suppression des doublons
        print(f"\n🔄 Suppression des doublons...")
        df = self.remove_duplicates(df)
        
        # 5. Gestion des outliers
        print(f"\n🔍 Traitement des outliers...")
        df = self.handle_outliers(df, method=outlier_method)
        
        # 6. Standardisation des colonnes
        print(f"\n🏷️ Standardisation des colonnes...")
        df = self.standardize_columns(df)
        
        # 7. Validation des types de données
        print(f"\n✅ Validation des types de données...")
        df = self.validate_data_types(df)
        
        # 8. Rapport final
        self.final_shape = df.shape
        print(f"\n✅ Pipeline terminé!")
        print(f"📊 Données finales: {df.shape[0]} lignes × {df.shape[1]} colonnes")
        
        self.generate_cleaning_report()
        
        return df

def main():
    """
    Fonction principale pour tester le pipeline de nettoyage
    """
    print("🧹 Test du Pipeline de Nettoyage des Données")
    print("=" * 50)
    
    # Création d'un dataset d'exemple avec des problèmes
    np.random.seed(42)
    n_samples = 1000
    
    # Création de données avec des problèmes
    df_example = pd.DataFrame({
        'ID': range(1, n_samples + 1),
        'Nom': [f'Utilisateur_{i}' for i in range(n_samples)],
        'Age': np.random.normal(35, 10, n_samples),
        'Salaire': np.random.exponential(50000, n_samples),
        'Date_inscription': pd.date_range('2020-01-01', periods=n_samples, freq='D'),
        'Ville': np.random.choice(['Paris', 'Lyon', 'Marseille', 'Toulouse', None], n_samples, p=[0.4, 0.2, 0.2, 0.15, 0.05]),
        'Actif': np.random.choice([True, False, None], n_samples, p=[0.7, 0.25, 0.05])
    })
    
    # Ajout de problèmes
    df_example.loc[np.random.choice(n_samples, 50, replace=False), 'Age'] = np.nan
    df_example.loc[np.random.choice(n_samples, 30, replace=False), 'Salaire'] = np.nan
    df_example.loc[np.random.choice(n_samples, 20, replace=False), 'Ville'] = np.nan
    
    # Ajout d'outliers
    df_example.loc[np.random.choice(n_samples, 10, replace=False), 'Age'] = np.random.uniform(120, 150, 10)
    df_example.loc[np.random.choice(n_samples, 5, replace=False), 'Salaire'] = np.random.uniform(1000000, 5000000, 5)
    
    # Ajout de doublons
    df_example = pd.concat([df_example, df_example.iloc[:20]], ignore_index=True)
    
    # Sauvegarde du dataset d'exemple
    df_example.to_csv('sample_data_with_issues.csv', index=False)
    print(f"📁 Dataset d'exemple créé: sample_data_with_issues.csv")
    
    # Test du pipeline de nettoyage
    cleaner = DataCleaner()
    
    # Exécution du pipeline
    df_clean = cleaner.clean_pipeline(
        'sample_data_with_issues.csv',
        missing_strategy='auto',
        outlier_method='iqr'
    )
    
    if df_clean is not None:
        # Sauvegarde des données nettoyées
        df_clean.to_csv('cleaned_data.csv', index=False)
        print(f"\n💾 Données nettoyées sauvegardées: cleaned_data.csv")
        
        # Affichage des statistiques finales
        print(f"\n📊 Statistiques finales:")
        print(f"  - Lignes: {df_clean.shape[0]}")
        print(f"  - Colonnes: {df_clean.shape[1]}")
        print(f"  - Valeurs manquantes: {df_clean.isnull().sum().sum()}")
        print(f"  - Doublons: {df_clean.duplicated().sum()}")
    
    return df_clean

if __name__ == "__main__":
    # Exécution du test
    cleaned_data = main()
