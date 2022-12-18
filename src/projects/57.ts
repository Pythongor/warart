import { PoetryProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: PoetryProjectType = {
    category: `textual`,
    id: 57,
    name: `Сльозу...`,
    author: `Маґне Калінсен`,
    subcategory: `poetry`,
    tags: [],
    image: `${mediaEndPoint}/media/57/Сльозу.svg`,
    description: `Максим Калініченко (Маґне Калінсен)
музикант, поет, перекладач
Зазвичай пишу неофолк і у віршах теж використовую багато народного, мітолоґічного з різних традицій, але переважно зі скандинавської.`,
    text: `Сльозу, що вичавив з ока, 
поклав на лезо ножа, 
як слово на музику
ворожа кров
вирветься з тіла
з тією піснею.`,
}

export default Project;