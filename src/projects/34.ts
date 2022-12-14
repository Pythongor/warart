import { GraphicArtProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: GraphicArtProjectType = {
    category: `visual`,
    id: 34,
    name: `Чорний квадрат війни`,
    author: `Ярослав Коваль`,
    image: `${mediaEndPoint}/media/34/Tank_Yaroslav_Koval.jpg`,
    subcategory: `graphicArt`,
    tags: [],
    description: `Ярослав Коваль, дизайнер пресс-служби "Нафтогазу".
Робота "Чорний квадрат війни" - створювалася у рамках 
другого конкурсу на марки від Укрпошти.
Іллюстрація передає втаємничений та хитрий козацький дух,
що завжди був не піхотно-гарматно-м'ясним, а спецназівським,
кмітливими діями уночі і древні козаки, і нинішні воїни України -
наносили зненацька ніщивні удари по ворогу. Біда російської імперії
тепер, на відміну від воєн останніх віків - це відсутність
такого українскього спецназу на їх боці.`,
}

export default Project;