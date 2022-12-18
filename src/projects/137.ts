import { VideoArtProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: VideoArtProjectType = {    category: `visual`,
    id: 137,
    name: `Україна (cover)`,
    author: `Денис Зарубайко`,
    subcategory: `videoArt`,
    tags: [],
    video: `${mediaEndPoint}/media/137/Тарас Петриненко - Україна (cover).mp4`,
    description: `Молодий піаніст Денис Зарубайко, студент третього курсу фортепіанного відділу Національної музичної академії України, імпровізує в стилі джаз та записує кавери на знакові українські пісні, в тому числі створив джазову обробку Гімну України. Його стиль створює світле почуття піднесення та віри у Перемогу.`,
}
export default Project;