import { MusicProjectType } from "projects/types";

export const Project: MusicProjectType = {
  category: "sound",
  id: 18,
  name: "Укриття",
  author: "TANKATAKA",
  image: `${process.env.PUBLIC_URL}/media/18/220403_УКРИТТЯ_ARTWORK_01_01.jpg`,
  audio: `${process.env.PUBLIC_URL}/media/18/Укриття.mp3`,
  subcategory: "music",
  tags: [],
  description: `Мене звати Таня, я співачка, авторка, та продюсерка у незалежному музичному проєкті TANKATAKA. Я родом з Миколаєва, але останні роки проживаю у Німеччині.

В пісні «Укриття» я спробувала пережити біль матері, яка колише дитину в бомбосховищі і мовчки ковтає сльози, щоб не розбудити її. Це біль мільйонів українських сімей, які змушені ховатися у підвалах та метро, рятуючи життя від обстрілів.

Обкладинка: Альбіна Колесніченко (Instagram: @albina.kolesnichenko)`,
};

export default Project;
