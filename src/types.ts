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
