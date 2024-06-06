const BASE_URL = "https://api.allorigins.win/get?url=";

const fetchFromAllOrigins = async (url: string) => {
  try {
    const response = await fetch(`${BASE_URL}${encodeURIComponent(url)}`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return JSON.parse(data.contents);
  } catch (error) {
    console.error("Failed to fetch data from AllOrigins:", error);
    throw error;
  }
};

const getCachedData = (key: string) => {
  const cached = localStorage.getItem(key);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
      return data;
    }
  }
  return null;
};

const setCachedData = (key: string, data: Podcast[] | Episode[]) => {
  localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
};

export const getPodcasts = async (): Promise<Podcast[]> => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const cached = getCachedData("podcasts");
  if (cached) {
    return cached;
  }
  
  try {
    const data: ApiPodcast.Api = await fetchFromAllOrigins(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );

    const podcasts = data.feed.entry.map((entry) => ({
      id: entry.id.attributes["im:id"],
      title: entry["im:name"].label,
      artist: entry["im:artist"].label,
      summary: entry.summary.label,
      image: entry["im:image"][2].label,
    }));
    setCachedData("podcasts", podcasts);
    return podcasts;
  } catch (error) {
    console.error("Failed to get podcasts:", error);
    throw error;
  }
};

export const getEpisodes = async (podcastId: string): Promise<Episode[]> => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const cached = getCachedData(`podcast-${podcastId}`);
  if (cached) {
    return cached;
  }
  
  try {
    const data = await fetchFromAllOrigins(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    );

    const podcasts: ApiEpisode.Episode[] = data.results.slice(1);

    const episodes: Episode[] = podcasts.map((entry) => ({
      trackId: entry.trackId,
      trackName: entry.trackName,
      description: entry.description,
      releaseDate: entry.releaseDate,
      duration: entry.trackTimeMillis,
      episodeUrl: entry.episodeUrl,
    }));
    setCachedData(`podcast-${podcastId}`, episodes);
    return episodes;
  } catch (error) {
    console.error("Failed to get episodes:", error);
    throw error;
  }
};