import type { Artifact } from '../types';

interface ArtifactDetailProps {
  artifact: Artifact;
  onBack: () => void;
}

export const ArtifactDetail: React.FC<ArtifactDetailProps> = ({ artifact, onBack }) => {
  return (
    <div className="artifact-detail">
      <button 
        onClick={onBack} 
        className="back-button"
        aria-label="Go back to search"
      >
        ← Back
      </button>
      
      <article className="artifact-content">
        <header>
          <h1 className="artifact-title">{artifact.title}</h1>
          <p className="artifact-date">{artifact.date}</p>
        </header>

        <img 
          src={artifact.image} 
          alt={artifact.title}
          className="artifact-image"
          loading="lazy"
        />

        <div className="artifact-description">
          <p className="short-description">{artifact.shortDescription}</p>
          <p className="long-description">{artifact.longDescription}</p>
        </div>

        <div className="artifact-tags">
          {artifact.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {artifact.audioUrl && (
          <div className="artifact-audio">
            <h2 className="audio-title">Audio Guide</h2>
            <audio 
              controls 
              className="audio-player"
              aria-label="Artifact audio guide"
            >
              <source src={artifact.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </article>
    </div>
  );
};
