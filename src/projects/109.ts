import { GraphicArtProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: GraphicArtProjectType = {    category: `visual`,
    id: 109,
    name: `Квітуча`,
    author: `Ксенія Степась`,
    subcategory: `graphicArt`,
    tags: [],
    image: `${mediaEndPoint}/media/109/Квітуча.jpg`,
    description: `«Квітуча» Цією роботою хотілося показати всю красу України, тому я
поєднала головний символ - квітучий герб з фото, яке зробила на заході
України.

Насправді дуже складно було прийти до тями та продовжити
займатися творчістю після того, як в тебе перед вікнами їздили
та стріляли танки, а потім взагалі знищили моє місто та мій
будинок авіаударами.`,
}
export default Project;