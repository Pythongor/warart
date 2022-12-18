import { AudioBookProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: AudioBookProjectType = {
    category: `sound`,
    id: 77,
    name: `Гривня`,
    author: `Катерина Пилипчук`,
    subcategory: `audioBook`,
    image: `${mediaEndPoint}/media/77/МОТАНКА-3-6.svg`,
    audio: `${mediaEndPoint}/media/77/Гривня_Новела_Катерини_Пилипчук_Аудіокнига_Читає_авторка_128_kbps.mp3`,
    tags: [],
    description: `Мене звати Катерина Пилипчук. Мені 42 роки. Я живу і працюю в Україні, у Києві, і є авторкою новел та поезії про героїв війни, які я публікую у своєму блозі на сторінці в соціальній мережі фейсбук. Писати прозу я почала лише з середини червня 2022 року і це стало моєю справжньою розрадою та, за відчуттями, є моєю сродною працею, яку я так довго намагалась знайти.

До війни я займалась інвестиціями у високотехнологічні проєкти в сфері нерухомості та міжнародною діяльністю із просування українських бізнесів у світі, моє життя було схожим на одну велику навколосвітню подорож, бо свою валізу я, навіть, не встигала розпаковувати. Війна ж змінила все: зупинила будівництво, заморозила інвестиції, і, водночас, відкрила в мені потаємний резервуар творчої енергії, яка тепер знаходить своє матеріальне втілення у письменництві.В мене двоє чудових синів Міка та Петрик, яким 18 та 13 років. Мій чоловік Андрій Пилипчук - моя любов та опора уже 20 років. Батьки - Олександр та Галина Горностай - музиканти, творчі люди, поборники та просвітники української культури у світі, заслужені артисти та діячі мистецтв України.
`,
}

export default Project;