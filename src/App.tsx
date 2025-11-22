import { useState, useEffect } from 'react'
import './App.css'
import { QRScanner } from './components/QRScanner'
import { ManualInput } from './components/ManualInput'
import { ArtifactDetail } from './components/ArtifactDetail'
import type { Artifact, ArtifactsData } from './types'

function App() {
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [currentArtifact, setCurrentArtifact] = useState<Artifact | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArtifacts();
  }, []);

  const loadArtifacts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/artifacts.json');
      if (!response.ok) {
        throw new Error('Failed to load artifacts');
      }
      const data: ArtifactsData = await response.json();
      setArtifacts(data.artifacts);
      setError('');
    } catch (err) {
      setError('Failed to load artifact data. Please try again later.');
      console.error('Error loading artifacts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleArtifactIdReceived = (artifactId: string) => {
    const artifact = artifacts.find(a => a.id.toLowerCase() === artifactId.toLowerCase());
    if (artifact) {
      setCurrentArtifact(artifact);
      setError('');
    } else {
      setError(`Artifact with ID "${artifactId}" not found.`);
      setCurrentArtifact(null);
    }
  };

  const handleBack = () => {
    setCurrentArtifact(null);
    setError('');
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Loading artifacts...</div>
      </div>
    );
  }

  if (currentArtifact) {
    return (
      <div className="app">
        <ArtifactDetail artifact={currentArtifact} onBack={handleBack} />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Museum Artifact Explorer</h1>
        <p className="subtitle">Scan a QR code or enter an artifact ID to begin</p>
      </header>

      <main className="app-main">
        <QRScanner 
          onScan={handleArtifactIdReceived}
          onError={(err) => setError(err.message)}
        />
        
        <div className="divider">
          <span>OR</span>
        </div>

        <ManualInput onSubmit={handleArtifactIdReceived} />

        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}
      </main>
    </div>
  )
}

export default App

