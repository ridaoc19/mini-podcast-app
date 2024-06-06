interface Episode {
  trackId: number;
  trackName: string;
  description: string;
  releaseDate: string;
  duration: number;
  episodeUrl: string;
}

declare module ApiEpisode {
  interface Episode {
    collectionViewUrl: string;
    trackTimeMillis: number;
    artworkUrl600: string;
    episodeUrl: string;
    shortDescription: string;
    releaseDate: string;
    artworkUrl60: string;
    closedCaptioning: string;
    collectionId: number;
    collectionName: string;
    genres: Array<{
      name: string;
      id: string;
    }>;
    episodeGuid: string;
    trackId: number;
    trackName: string;
    description: string;
    trackViewUrl: string;
    feedUrl: string;
    previewUrl: string;
    country: string;
    artworkUrl160: string;
    episodeFileExtension: string;
    episodeContentType: string;
    artistIds: string[];
    kind: string;
    wrapperType: string;
  }
}
