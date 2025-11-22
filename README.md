# Museum POC - Vite + React + TypeScript

A proof-of-concept museum artifact explorer application built with Vite, React, and TypeScript. This app allows users to scan QR codes or manually enter artifact IDs to view detailed information about museum artifacts.

## Features

✅ **QR Code Scanning** - Camera activation only on user action for scanning QR codes  
✅ **Manual Input Fallback** - Enter artifact IDs directly if QR scanning is unavailable  
✅ **Rich Artifact Display** - Shows title, image, date, descriptions, tags, and audio guide  
✅ **White-Label Theming** - Easy customization via CSS variables  
✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices  
✅ **Accessibility** - WCAG compliant with proper ARIA labels and semantic HTML  
✅ **Comprehensive Testing** - Jest + React Testing Library tests included  

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Run linter
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── QRScanner.tsx          # QR code scanning component
│   ├── ManualInput.tsx         # Manual artifact ID input
│   ├── ArtifactDetail.tsx      # Artifact detail view
│   └── *.test.tsx              # Component tests
├── App.tsx                      # Main application component
├── types.ts                     # TypeScript type definitions
└── test/
    └── setup.ts                 # Test configuration

public/
└── artifacts.json               # Artifact data file
```

## Customizing Themes

The app uses CSS variables for easy white-labeling. Customize the theme by modifying the variables in `src/index.css`:

```css
:root {
  --primary-color: #3b82f6;       /* Main brand color */
  --primary-hover: #2563eb;       /* Hover state */
  --background-color: #ffffff;    /* Background */
  --text-primary: #0f172a;        /* Primary text */
  --text-secondary: #475569;      /* Secondary text */
  /* ... more variables */
}
```

## Adding Artifacts

Edit `public/artifacts.json` to add or modify artifacts:

```json
{
  "artifacts": [
    {
      "id": "ART001",
      "title": "Artifact Name",
      "image": "https://example.com/image.jpg",
      "date": "2000 BCE",
      "shortDescription": "Brief description",
      "longDescription": "Detailed description...",
      "tags": ["Tag1", "Tag2"],
      "audioUrl": "https://example.com/audio.mp3"
    }
  ]
}
```

## Technology Stack

- **Vite** - Fast build tool and dev server
- **React 19** - UI library
- **TypeScript** - Type safety
- **@zxing/library** - QR code scanning
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing utilities

## Browser Support

- Modern browsers with ES2020+ support
- Camera access required for QR scanning feature
- Falls back to manual input if camera is unavailable

## License

MIT License - See LICENSE file for details
