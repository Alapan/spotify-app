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
