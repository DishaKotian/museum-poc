import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the museum app header after loading', async () => {
    render(<App />);
    expect(await screen.findByText(/Museum Artifact Explorer/i)).toBeInTheDocument();
  });

  it('shows loading state initially', () => {
    render(<App />);
    expect(screen.getByText(/Loading artifacts.../i)).toBeInTheDocument();
  });

  it('renders scan QR code button', async () => {
    render(<App />);
    const scanButton = await screen.findByLabelText(/Scan QR code/i);
    expect(scanButton).toBeInTheDocument();
  });

  it('renders manual input field', async () => {
    render(<App />);
    const input = await screen.findByLabelText(/Enter Artifact ID/i);
    expect(input).toBeInTheDocument();
  });
});
