import { GraphicArtProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: GraphicArtProjectType = {
    category: `visual`,
    id: 10,
    name: "",
    author: `marginai`,
    image: `${mediaEndPoint}/media/10/IMG_7080.PNG`,
    subcategory: `graphicArt`,
    tags: [],
    description:     "Гарькавець Ірина\nmarginai\nІлюстратор та аніматор з Харкова. " +
    "Наразі проживаю у Вінниці. Дослідниця нового мистецтва: штучний " +
    "інтелект, нейронні мережі. Автор короткометражних анімаційних фільмів " +
    "«Promise», «Від недавно до давно», «Війна, яка завжди поруч» та ін., що " +
    "здобули лаурелі у більш ніж 15 країнах світу.",
}

export default Project;