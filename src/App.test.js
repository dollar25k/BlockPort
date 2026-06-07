// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockPort title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockPort/i);
    expect(titleElement).toBeInTheDocument();
});
