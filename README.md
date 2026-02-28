
# Wamly Storefront

## Prerequisites

* **Node.js:** v20.20.0
* **npm:** v10.8.2
* **React:** v18.2.0

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

## Run

Start the development server:

```bash
npm run dev
```

The app will be available at provided link in bash example `http://localhost:3000`.

## Features

* React Query for efficient data fetching
* Context API for global cart management
* Quantity management for products
* Lazy-loaded routes for improved performance
* Memoized components to optimize re-renders
* Responsive grid layout for different screen sizes
* jest testing 4 testcases added

## Testing

We use **Jest** for unit testing and **React Testing Library** for component testing.

1. Run tests:

   ```bash
   npm run test
   ```
2. Run tests in watch mode (recommended during development):

   ```bash
   npm run test:watch
   ```

## Notes

* Ensure you are using the recommended Node.js and npm versions to avoid dependency issues.
* Memoized components and lazy routes improve perf
