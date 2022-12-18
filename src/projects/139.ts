import { VideoArtProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: VideoArtProjectType = {    category: `visual`,
    id: 139,
    name: `INSANE IN THE PAIN`,
    author: `Маґ не Кається`,
    subcategory: `videoArt`,
    tags: [],
    video: `${mediaEndPoint}/media/139/Маґ не Кається - INSANE IN THE PAIN.mp4`,
    description: `Пів року повномасштабної війни змінили фокус і ракурс. Без здорового цинізму вічну війну не вивезти. Від пісень-маніфестів втомились навіть їх автори, а осмислень я поки зустрічаю небагато. Цим ми і зайнялись, відновивши орігінальний склад з двох МС та бажання сміятись, щоби ви не плакали.`,
}
export default Project;