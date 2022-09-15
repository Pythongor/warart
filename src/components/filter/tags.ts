export const getKeys = Object.keys as <T extends object>(
  obj: T
) => Array<keyof T>;

// export const getConstKeys = Object.keys as <T extends object>(
//   obj: T
// ) => Array<keyof T>;

export const generalTags = [
  "children's art",
  "violent content",
  "adult content",
] as const;

export const handCraftTags = [
  "glass",
  "monochrome",
  "paper",
  "plasticine",
  "minimalistic",
  "clay",
  "embroidery",
  "fabric",
] as const;

export const videoArtTags = [
  "modern",
  "typography",
  "monochrome",
  "collage",
  "minimalistic",
  "pics",
  "visualization",
  "painting",
] as const;

export const photographyTags = [
  "portrait",
  "reportage",
  "monochrome",
  "film",
  "collage",
  "documentary",
  "minimalistic",
  "city",
  "stories",
  "ruins",
  "people",
] as const;

export const graphicArtTags = [
  "modern",
  "typography",
  "monochrome",
  "collage",
  "minimalistic",
  "pics",
  "visualization",
  "painting",
] as const;

export const tattooTags = [
  "modern",
  "typography",
  "monochrome",
  "collage",
  "minimalistic",
  "pics",
  "visualization",
  "painting",
] as const;

export const musicTags = [
  "indie",
  "classical",
  "ambient",
  "piano",
  "techno",
  "rock",
  "religious",
  "electronic",
  "folk",
  "trap",
  "rap",
] as const;

export const audioBookTags = [
  "noice",
  "classical",
  "missile",
  "voice",
  "techno",
  "siren",
  "air-defence",
  "explosile",
  "echo",
  "installation",
  "scrape",
  "sweep",
] as const;

export const podcastTags = [
  "news",
  "documentary",
  "story",
  "talks",
  "interview",
  "people",
  "city",
] as const;

export const poetryTags = [
  "news",
  "novel",
  "short story",
  "story",
  "talks",
  "interview",
  "heroic",
  "city",
  "fictional",
] as const;

export const proseTags = [
  "news",
  "novel",
  "short story",
  "story",
  "talks",
  "interview",
  "heroic",
  "city",
  "fictional",
] as const;

export const publicisticTags = [
  "news",
  "documentary",
  "story",
  "talks",
  "interview",
  "people",
  "city",
] as const;

export const dramaTags = [
  "news",
  "documentary",
  "story",
  "talks",
  "interview",
  "people",
  "city",
] as const;

export const visualTags = {
  handcraft: handCraftTags,
  videoArt: videoArtTags,
  photography: photographyTags,
  graphicArt: graphicArtTags,
  tattoo: tattooTags,
} as const;

export const soundTags = {
  music: musicTags,
  audioBook: audioBookTags,
  podcast: podcastTags,
} as const;

export const textualTags = {
  poetry: poetryTags,
  prose: proseTags,
  publicistic: publicisticTags,
  drama: dramaTags,
} as const;

export const tags = {
  visual: visualTags,
  sound: soundTags,
  textual: textualTags,
} as const;

export type CategoryType = keyof typeof tags;

export const categories: { [key: string]: string[] } = {
  ...Object.fromEntries(
    getKeys(tags).map((category) => [category, getKeys(tags[category])])
  ),
};

export const allCategories: string[] = getKeys(tags)
  .map((key) => getKeys(tags[key]))
  .flat();

const flattenTags: { [key: string]: string[] } = Object.values(tags).reduce(
  (prev, current) => Object.assign(prev, current),
  {}
);

export const allTags = [
  ...new Set(Object.values(flattenTags).flat()),
  ...generalTags,
];

export const tagsByCategory = Object.fromEntries(
  Object.entries(flattenTags).map(([key, value]) => [
    key,
    [...value, ...generalTags],
  ])
);
