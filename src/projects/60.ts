import { HandcraftProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: HandcraftProjectType = {
    category: `visual`,
    id: 60,
    name: `Календар`,
    author: `Балашова Катерина`,
    subcategory: `handcraft`,
    image: [
    {
    name: `Понеділок`,
    src: `${mediaEndPoint}/media/60/Понеділок.jpg`,
    },
    {
    name: `Вівторок`,
    src: `${mediaEndPoint}/media/60/Вівторок.jpg`,
    },
    {
    name: `Середа`,
    src: `${mediaEndPoint}/media/60/Середа.jpg`,
    },
    {
    name: `Четвер`,
    src: `${mediaEndPoint}/media/60/Четвер.jpg`,
    },
    {
    name: `П'ятниця`,
    src: `${mediaEndPoint}/media/60/П'ятниця.jpg`,
    },
    {
    name: `Субота`,
    src: `${mediaEndPoint}/media/60/Субота.jpg`,
    },
  ],
    tags: [],
    description: `Балашова Катерина
Поетка, лавреатка III премії Смолоскипу, співзасновниця Поетичного простору o.poetry в Києво-Могилянській академії.

Я родом з Луганська й зазнала впливу війни ще у 2014 році, коли моя сім’я була змушена вперше в житті залишити рідне місто й почати жити в невідомому для нас Львові. З тих пір я регулярно рефлексувала свій досвід переселенки у своїх текстах, малюнках, колажах, досліджуючи його вплив  на своє дорослішання й формування особистості. Вранці 24 лютого звуки вибухів стали для мене ретравматизацією, що віддзеркалена у невеликому циклі поезій, названих датами днів, коли їх було створено. Комплекс витинанок було створено протягом кінця лютого й усього березня. Кілька тижнів я не могла нічого робити, крім витинання. Розглядаючи їх зараз, я вбачаю в них мистецьку спробу бодай якось відновити внутрішній баланс і пробудити себе до життя. Знову писати тексти я почала після створення більшості з цих витинанок, — своєрідне воскресіння на сьомий день.
`,
}

export default Project;