# Quantitative Guide - Python script
# This file contains quantitative analysis functions

def calculate_metrics(data):
    """Calculate basic statistical metrics"""
    if not data:
        return None
    
    n = len(data)
    mean = sum(data) / n
    variance = sum((x - mean) ** 2 for x in data) / n
    std_dev = variance ** 0.5
    
    return {
        'count': n,
        'mean': mean,
        'variance': variance,
        'std_dev': std_dev
    }

if __name__ == "__main__":
    # Example usage
    sample_data = [1, 2, 3, 4, 5]
    result = calculate_metrics(sample_data)
    print(f"Metrics: {result}")
