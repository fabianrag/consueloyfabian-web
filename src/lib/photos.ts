import gallery from "../data/gallery.json";

export interface GalleryItem {
  id: string;
  original: string;
  thumbnail: string;
  width: number;
  height: number;
  caption?: string;
  alt?: string;
}

export const photos = gallery as GalleryItem[];

/** Devuelve las fotos pedidas por id, omitiendo las que no existan. */
export function pick(...ids: string[]): GalleryItem[] {
  return ids
    .map((id) => photos.find((p) => p.id === id))
    .filter((p): p is GalleryItem => Boolean(p));
}
