
export interface MediaPreviewItem {
    type: 'image'; // Can be extended for video, etc.
    src: string;
    alt: string;
    hint: string;
}

export const mediaPreviewItemsData: MediaPreviewItem[] = [
  { type: 'image', src: 'https://placehold.co/100x100.png', alt: 'Media preview 1', hint: 'nature tent' },
  { type: 'image', src: 'https://placehold.co/100x100.png', alt: 'Media preview 2', hint: 'dj music' },
  { type: 'image', src: 'https://placehold.co/100x100.png', alt: 'Media preview 3', hint: 'abstract art' },
  { type: 'image', src: 'https://placehold.co/100x100.png', alt: 'Media preview 4', hint: 'modern interior' },
];

export const userComposeAvatar = {
    src: "https://placehold.co/48x48.png?text=U",
    alt: "User Avatar",
    hint: "profile avatar"
};
