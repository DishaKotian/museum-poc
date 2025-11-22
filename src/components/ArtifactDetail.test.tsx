import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { ArtifactDetail } from './ArtifactDetail';
import type { Artifact } from '../types';

const mockArtifact: Artifact = {
  id: 'ART001',
  title: 'Test Artifact',
  image: 'https://example.com/image.jpg',
  date: '2000 BCE',
  shortDescription: 'A short test description',
  longDescription: 'A longer test description with more details',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  audioUrl: 'https://example.com/audio.mp3',
};

describe('ArtifactDetail', () => {
  it('renders artifact information correctly', () => {
    const mockOnBack = vi.fn();
    render(<ArtifactDetail artifact={mockArtifact} onBack={mockOnBack} />);
    
    expect(screen.getByText('Test Artifact')).toBeInTheDocument();
    expect(screen.getByText('2000 BCE')).toBeInTheDocument();
    expect(screen.getByText('A short test description')).toBeInTheDocument();
    expect(screen.getByText('A longer test description with more details')).toBeInTheDocument();
  });

  it('renders all tags', () => {
    const mockOnBack = vi.fn();
    render(<ArtifactDetail artifact={mockArtifact} onBack={mockOnBack} />);
    
    expect(screen.getByText('Tag1')).toBeInTheDocument();
    expect(screen.getByText('Tag2')).toBeInTheDocument();
    expect(screen.getByText('Tag3')).toBeInTheDocument();
  });

  it('renders image with correct src and alt', () => {
    const mockOnBack = vi.fn();
    render(<ArtifactDetail artifact={mockArtifact} onBack={mockOnBack} />);
    
    const image = screen.getByAltText('Test Artifact') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://example.com/image.jpg');
  });

  it('renders audio player when audioUrl is provided', () => {
    const mockOnBack = vi.fn();
    render(<ArtifactDetail artifact={mockArtifact} onBack={mockOnBack} />);
    
    expect(screen.getByText(/Audio Guide/i)).toBeInTheDocument();
    const audio = screen.getByLabelText(/Artifact audio guide/i) as HTMLAudioElement;
    expect(audio).toBeInTheDocument();
  });

  it('calls onBack when back button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnBack = vi.fn();
    render(<ArtifactDetail artifact={mockArtifact} onBack={mockOnBack} />);
    
    const backButton = screen.getByLabelText(/Go back to search/i);
    await user.click(backButton);
    
    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });
});
