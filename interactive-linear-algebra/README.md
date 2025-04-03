# Interactive Linear Algebra

An interactive web application for learning linear algebra, based on an open-source linear algebra textbook.

## Features

- Interactive exercises with real-time feedback
- Mathematical visualizations of key concepts
- Progress tracking and achievement badges
- Mobile-friendly design
- Comprehensive coverage of linear algebra topics

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone this repository
```bash
git clone https://github.com/yourusername/interactive-linear-algebra.git
cd interactive-linear-algebra
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## PDF Content Parsing

This project includes a utility to extract content from the original linear algebra PDF:

```bash
node scripts/generate-content.js
```

This will parse the PDF and generate structured content files in the `src/data` directory.

## Project Structure

- `src/app/` - Next.js app router pages and layouts
- `src/components/` - Reusable React components
- `src/styles/` - Global CSS styles
- `src/utils/` - Utility functions
- `src/data/` - Content extracted from the PDF
- `public/` - Static assets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on an open-source linear algebra textbook
- Built with Next.js and React
- Math rendering with KaTeX