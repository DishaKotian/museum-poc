import { useState, type FormEvent } from 'react';

interface ManualInputProps {
  onSubmit: (artifactId: string) => void;
}

export const ManualInput: React.FC<ManualInputProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="manual-input">
      <label htmlFor="artifact-id" className="input-label">
        Enter Artifact ID:
      </label>
      <div className="input-group">
        <input
          id="artifact-id"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g., ART001"
          className="input-field"
          aria-label="Artifact ID input"
        />
        <button 
          type="submit" 
          className="submit-button"
          disabled={!inputValue.trim()}
          aria-label="Submit artifact ID"
        >
          Go
        </button>
      </div>
    </form>
  );
};
