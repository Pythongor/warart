import { VideoArtProjectType } from "projects/types";

export const Project: VideoArtProjectType = {
  category: "visual",
  id: 17,
  name: "",
  author: "marginai",
  video: `${process.env.PUBLIC_URL}/media/17/IMG_9820.MOV`,
  subcategory: "videoArt",
  tags: [],
  description:
    "Гарькавець Ірина\nmarginai\nІлюстратор та аніматор з Харкова. " +
    "Наразі проживаю у Вінниці. Дослідниця нового мистецтва: штучний " +
    "інтелект, нейронні мережі. Автор короткометражних анімаційних фільмів " +
    "«Promise», «Від недавно до давно», «Війна, яка завжди поруч» та ін., що " +
    "здобули лаурелі у більш ніж 15 країнах світу.",
};

export default Project;
