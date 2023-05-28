export interface ArtistImage {
  url: string;
  height: number;
  width: number;
}

export interface Followers {
  total: number;
  href: string;
}

export interface Artist {
  name: string;
  id: string;
  genres: string[];
  href: string;
  images: ArtistImage[];
  external_urls?: {
    spotify: string
  };
  uri?: string;
  type?: string;
}

export interface AccessTokenState {
  access_token: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyArtist {
  external_urls: {
    spotify: string
  };
  followers: {
    href: string,
    total: number
  };
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface SpotifyArtistsResponse {
  href: string;
  items: SpotifyArtist[];
  limit: number;
  next: string;
  offset: number;
  total: number;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  external_urls: {
    spotify: string;
  }
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number
  type: string;
  uri: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  }
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
}
