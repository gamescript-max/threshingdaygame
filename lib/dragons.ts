export const dragonColors = [
  { id: 'red', name: 'Red', swatch: '#a44336', tint: '#f2e0d7', caption: 'Brick red scales and warm ember tones.' },
  { id: 'blue', name: 'Blue', swatch: '#365978', tint: '#dce5e9', caption: 'Cobalt scales with cool silver highlights.' },
  { id: 'green', name: 'Green', swatch: '#365847', tint: '#dde5d5', caption: 'Emerald scales in a misty forest palette.' },
  { id: 'brown', name: 'Brown', swatch: '#765340', tint: '#eee1ce', caption: 'Chestnut scales and earthy, sunlit tones.' },
  { id: 'orange', name: 'Orange', swatch: '#a65b2d', tint: '#f5e4cb', caption: 'Burnt orange scales with amber highlights.' },
  { id: 'black', name: 'Black', swatch: '#343837', tint: '#e3e5de', caption: 'Obsidian scales edged with soft gray light.' },
] as const;

export const dragonColorSource = 'https://rebeccayarrosshop.com/pages/dragonkind';

export function dragonArtwork(id: string) {
  return dragonColors.find(color => color.id === id);
}
