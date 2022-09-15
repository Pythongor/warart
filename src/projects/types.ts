import {
  generalTags,
  handCraftTags,
  videoArtTags,
  photographyTags,
  graphicArtTags,
  tattooTags,
  musicTags,
  audioBookTags,
  podcastTags,
  poetryTags,
  proseTags,
  publicisticTags,
  dramaTags,
  textualTags,
  soundTags,
  visualTags,
  tags,
} from "components/filter/tags";

export type ProjectType = {
  id: number;
  name: string;
  description: string;
  author: string;
  category: keyof typeof tags;
  tags: string[];
  text?: string;
  image?: string | { name: string; src: string }[];
  video?: string;
  audio?: string | { name: string; track: string }[];
  subcategory:
    | keyof typeof textualTags
    | keyof typeof soundTags
    | keyof typeof visualTags;
};

export type TextualProjectType = ProjectType & {
  text: string;
  image?: string;
  category: "textual";
  subcategory: keyof typeof textualTags;
};

export type AudioProjectType = ProjectType & {
  audio: string | { name: string; track: string }[];
  image?: string;
  category: "sound";
  subcategory: keyof typeof soundTags;
};

export type VideoProjectType = ProjectType & {
  video: string;
  category: "visual";
  subcategory: "videoArt";
};

export type ImageProjectType = ProjectType & {
  image: string | { name: string; src: string }[];
  category: "visual";
  subcategory: Exclude<keyof typeof visualTags, "videoArt">;
};

//

export type HandcraftProjectType = ImageProjectType & {
  subcategory: "handcraft";
  tags: (typeof generalTags[number] | typeof handCraftTags[number])[];
};

export type VideoArtProjectType = VideoProjectType & {
  subcategory: "videoArt";
  tags: (typeof generalTags[number] | typeof videoArtTags[number])[];
};

export type PhotographyProjectType = ImageProjectType & {
  subcategory: "photography";
  tags: (typeof generalTags[number] | typeof photographyTags[number])[];
};

export type GraphicArtProjectType = ImageProjectType & {
  subcategory: "graphicArt";
  tags: (typeof generalTags[number] | typeof graphicArtTags[number])[];
};

export type TattooProjectType = ImageProjectType & {
  subcategory: "tattoo";
  tags: (typeof generalTags[number] | typeof tattooTags[number])[];
};

export type MusicProjectType = AudioProjectType & {
  subcategory: "music";
  tags: (typeof generalTags[number] | typeof musicTags[number])[];
};

export type AudioBookProjectType = AudioProjectType & {
  subcategory: "audioBook";
  tags: (typeof generalTags[number] | typeof audioBookTags[number])[];
};

export type PodcastProjectType = AudioProjectType & {
  subcategory: "podcast";
  tags: (typeof generalTags[number] | typeof podcastTags[number])[];
};

export type PoetryProjectType = TextualProjectType & {
  subcategory: "poetry";
  tags: (typeof generalTags[number] | typeof poetryTags[number])[];
};

export type ProseProjectType = TextualProjectType & {
  subcategory: "prose";
  tags: (typeof generalTags[number] | typeof proseTags[number])[];
};

export type PublicisticProjectType = TextualProjectType & {
  subcategory: "publicistic";
  tags: (typeof generalTags[number] | typeof publicisticTags[number])[];
};

export type DramaProjectType = TextualProjectType & {
  subcategory: "drama";
  tags: (typeof generalTags[number] | typeof dramaTags[number])[];
};
