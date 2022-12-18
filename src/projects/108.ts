import { GraphicArtProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: GraphicArtProjectType = {    category: `visual`,
    id: 108,
    name: `Вільна`,
    author: `Ксенія Степась`,
    subcategory: `graphicArt`,
    tags: [],
    image: `${mediaEndPoint}/media/108/Вільна.jpg`,
    description: `«Вільна» В цій роботі використала реальне фото мого
зруйнованого будинку. Основною ідеєю є те, що можливо
росія і може руйнувати наші будинки, але ніколи не зруйнує
нашу любов до свободи.

Насправді дуже складно було прийти до тями та продовжити
займатися творчістю після того, як в тебе перед вікнами їздили
та стріляли танки, а потім взагалі знищили моє місто та мій
будинок авіаударами.`,
}
export default Project;