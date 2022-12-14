import { PoetryProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: PoetryProjectType = {
    category: `textual`,
    id: 58,
    name: `втративши світло`,
    author: `Маґне Калінсен`,
    subcategory: `poetry`,
    image: `${mediaEndPoint}/media/58/Втративши світло.svg`,
    tags: [],
    description: `Максим Калініченко (Маґне Калінсен)
музикант, поет, перекладач
Зазвичай пишу неофолк і у віршах теж використовую багато народного, мітолоґічного з різних традицій, але переважно зі скандинавської.`,
    text: `втративши світло
йти навпомацки
чи стане свічки
що крихітно мріє
крапля вогню
в океані мороку

по випаленій землі
ступати босоніж
кров'ю напоєна
чи дасть вона плід
крок за кроком
крихітно мрію`,
}

export default Project;