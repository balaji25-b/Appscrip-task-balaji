# Appscrip Product Listing Page (PLP) Assignment

## Objective
Create a fully functional **Product Listing Page (PLP)** that matches the Figma design, demonstrating front-end development skills including React.js implementation, responsive design, SEO optimization, mock API integration, and deployment to Netlify with GitHub version control.

## Tech Stack
- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: React.js (Create React App)
- **Tools**: VS Code, Git, GitHub, Netlify
- **API**: Fake Store API (`https://fakestoreapi.com/`)
- **Styling**: Pure CSS (No frameworks like Bootstrap)

## Completion Instructions

### Functionality
#### Must Have
- Header with logo, navigation, and search functionality
- Sidebar filters (categories from API)
- Product grid displaying cards with images, titles, prices, categories
- Sorting options (price low-high, high-low, name A-Z)
- Pagination (9 products per page)
- Responsive design (desktop, tablet, mobile)
- Mock API integration using Fake Store API
- SEO optimization (meta tags, semantic HTML)

#### Nice to Have
- Price range slider filter
- Rating display on product cards
- Add to cart functionality (local state)
- Loading states and error handling
- Hover animations and smooth transitions

### Guidelines to develop a project
#### Must Have
- Use semantic HTML tags (`header`, `main`, `footer`, `article`)
- Pure CSS (no Bootstrap/Tailwind)
- Mobile-first responsive design with CSS Grid/Flexbox
- Minimal dependencies (React + react-scripts only)
- Clean component architecture
- ESLint clean code (0 warnings)
- Optimized images with `loading="lazy"` and proper `alt` text

#### Nice to Have
- CSS custom properties (variables)
- Smooth scroll behavior
- Keyboard navigation support
- ARIA labels for accessibility
- Performance optimization (code splitting)


## Resources
### APIs
```
Fake Store API (No auth required)
├── GET https://fakestoreapi.com/products          # All products (20 items)
├── GET https://fakestoreapi.com/products?limit=5  # Limited products
├── GET https://fakestoreapi.com/products/category/electronics  # Category filter
└── Response format:
    {
      "id": 1,
      "title": "Product title",
      "price": 109.95,
      "description": "...",
      "category": "electronics",
      "image": "https://...",
      "rating": { "rate": 4.5, "count": 120 }
    }
```

### Third-party packages
```
Core Dependencies (package.json):
├── react@^18.2.0
├── react-dom@^18.2.0
└── react-scripts@5.0.1

NO additional packages required!
```


## **Demo**
- **GitHub**: https://github.com/balaji25-b/Appscrip-task-balaji.git
- **Netlify**: https://benevolent-parfait-7488e5.netlify.app/
