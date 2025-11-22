export interface Artifact {
  id: string;
  title: string;
  image: string;
  date: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  audioUrl: string;
}

export interface ArtifactsData {
  artifacts: Artifact[];
}
