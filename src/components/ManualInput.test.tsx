import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { ManualInput } from './ManualInput';

describe('ManualInput', () => {
  it('renders input field and submit button', () => {
    const mockOnSubmit = vi.fn();
    render(<ManualInput onSubmit={mockOnSubmit} />);
    
    expect(screen.getByLabelText(/Enter Artifact ID/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Submit artifact ID/i)).toBeInTheDocument();
  });

  it('calls onSubmit with input value when form is submitted', async () => {
    const user = userEvent.setup();
    const mockOnSubmit = vi.fn();
    render(<ManualInput onSubmit={mockOnSubmit} />);
    
    const input = screen.getByLabelText(/Enter Artifact ID/i);
    const submitButton = screen.getByLabelText(/Submit artifact ID/i);
    
    await user.type(input, 'ART001');
    await user.click(submitButton);
    
    expect(mockOnSubmit).toHaveBeenCalledWith('ART001');
  });

  it('clears input after submission', async () => {
    const user = userEvent.setup();
    const mockOnSubmit = vi.fn();
    render(<ManualInput onSubmit={mockOnSubmit} />);
    
    const input = screen.getByLabelText(/Enter Artifact ID/i) as HTMLInputElement;
    const submitButton = screen.getByLabelText(/Submit artifact ID/i);
    
    await user.type(input, 'ART001');
    await user.click(submitButton);
    
    expect(input.value).toBe('');
  });

  it('disables submit button when input is empty', () => {
    const mockOnSubmit = vi.fn();
    render(<ManualInput onSubmit={mockOnSubmit} />);
    
    const submitButton = screen.getByLabelText(/Submit artifact ID/i);
    expect(submitButton).toBeDisabled();
  });

  it('does not submit when input is only whitespace', async () => {
    const user = userEvent.setup();
    const mockOnSubmit = vi.fn();
    render(<ManualInput onSubmit={mockOnSubmit} />);
    
    const input = screen.getByLabelText(/Enter Artifact ID/i);
    const submitButton = screen.getByLabelText(/Submit artifact ID/i);
    
    await user.type(input, '   ');
    await user.click(submitButton);
    
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
