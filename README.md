# Aspire Card Management App

A web application for managing debit cards, inspired by the real Aspire application. Built with React, TypeScript, and styled-components.

## Features

- View and manage debit cards
- Add new cards with randomly generated card numbers
- Freeze/unfreeze cards
- Set spending limits
- Beautiful and responsive UI matching the design
- Card carousel with swipe functionality
- Local storage persistence

## Technologies Used

- React 19
- TypeScript
- styled-components
- Material-UI
- react-swipeable-views

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ritugarg99/aspire-fe-challenge
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at http://localhost:3000

## Project Structure

```
src/
  ├── assets/         # SVG icons and images
  ├── components/     # React components
  ├── context/        # React context for state management
  ├── types/          # TypeScript interfaces
  ├── App.tsx         # Main application component
  └── index.tsx       # Application entry point
```

## Features Implementation

### Card Management
- Cards are stored in local storage
- Each card has a unique ID, cardholder name, card number, expiry date, and CVV
- Card numbers and other details are randomly generated
- Cards can be frozen/unfrozen
- Spending limits can be set for each card

### UI/UX
- Responsive design
- Card carousel with touch/swipe support
- Smooth animations and transitions
- Form validation for adding new cards
- Loading states and error handling

## Development Decisions

1. **State Management**: Used React Context for global state management as it's sufficient for this scale and keeps the implementation simple.

2. **Styling**: Chose styled-components for component-level styling to maintain a clean and modular codebase.

3. **TypeScript**: Implemented strict typing for better code quality and developer experience.

4. **Local Storage**: Used for data persistence to simulate a backend without requiring server implementation.