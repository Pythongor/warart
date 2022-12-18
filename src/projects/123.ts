import { GraphicArtProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: GraphicArtProjectType = {    category: `visual`,
    id: 123,
    name: `Мова`,
    author: `Оля Гайдуш`,
    subcategory: `graphicArt`,
    tags: [],
    image: `${mediaEndPoint}/media/123/Мова.jpg`,
    description: `Гайдуш Ольга
Народилась в м. Червоноград
Художник-ілюстратор, працюю в  Adobe Photoshop, Adobe Illustrator
Навчалась в Львівській академії друкарства. Звісно навчання заклало фундамент, але для того щоб стати хорошим ілюстратором потрібно багато малювати і шукати себе. Я продовжую шукати)
Моє портфоліо: https://www.behance.net/Oli4ka`,
}
export default Project;