# Search Feature Documentation

## Overview
This document describes the search functionality implemented in the portfolio application.

## Components

### SearchBar.jsx
The main search component that provides:
- Real-time search input
- Search suggestions
- Search history
- Responsive design

### SearchContext.jsx
Context provider for search state management:
- Search query state
- Search results
- Search history
- Search filters

## Features

### Search Functionality
- **Real-time search**: Results update as you type
- **Global search**: Searches across all content types
- **Search history**: Remembers recent searches
- **Search suggestions**: Provides relevant suggestions

### Search Categories
- Projects
- Experiences
- Skills
- Technologies

## Usage

```jsx
import { useSearch } from '../context/SearchContext';

const { searchQuery, setSearchQuery, searchResults } = useSearch();
```

## Styling
Uses Tailwind CSS classes for responsive design and dark mode support.

## Dependencies
- React Context API
- Lucide React icons
- Tailwind CSS
