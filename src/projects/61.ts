import { VideoArtProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: VideoArtProjectType = {
    category: `visual`,
    id: 61,
    name: "",
    author: `Vitaliia`,
    subcategory: `videoArt`,
    video: `${mediaEndPoint}/media/61/Vitaliia.mp4`,
    tags: [],
    description: `Творче ім’я: Vitaliia. Я музикантка, поетка, організаторка поетичних конкурсів, засновниця поетичного видавництва Poetry Project, авторка рубрики #співочі_новини. Війна зробила так, що усі мої вірші, пісні – тепер повні нею. Тому що твори пишуться зазвичай від дуже сильних емоцій: і від радості, і від злості. А війна – це якраз те сильне почуття. Зараз я вже майже не пам’ятаю, як я написала свою пісню «Чом тобі, вороже, не спиться», яка набрала у різних соцмережах близько 5 млн переглядів. Я написала її ніби «в тумані». Але те, як вона вплинула тоді на людей, не описати словами: я читала подяки за піднесення духу від людей у бомбосховищах, в окупації, еміграції, від військових. Саме якраз усе те, що відбувається зараз, не описати словами, а от музикою можна.`,
}

export default Project;