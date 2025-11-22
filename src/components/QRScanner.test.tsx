import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { QRScanner } from './QRScanner';

// Mock the BrowserMultiFormatReader
vi.mock('@zxing/library', () => ({
  BrowserMultiFormatReader: vi.fn().mockReturnValue({
    listVideoInputDevices: vi.fn().mockResolvedValue([]),
    decodeFromVideoDevice: vi.fn(),
    reset: vi.fn(),
  }),
  NotFoundException: class NotFoundException extends Error {},
}));

describe('QRScanner', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders scan button initially', () => {
    const mockOnScan = vi.fn();
    render(<QRScanner onScan={mockOnScan} />);
    
    expect(screen.getByLabelText(/Scan QR code/i)).toBeInTheDocument();
  });

  it('button is clickable and interactive', async () => {
    const mockOnScan = vi.fn();
    
    render(<QRScanner onScan={mockOnScan} />);
    
    const scanButton = screen.getByLabelText(/Scan QR code/i);
    expect(scanButton).not.toBeDisabled();
  });
});
