import { GraphicArtProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: GraphicArtProjectType = {    category: `visual`,
    id: 130,
    name: `Ukraine`,
    author: `Daniela Herodesová`,
    subcategory: `graphicArt`,
    tags: [],
    image: `${mediaEndPoint}/media/130/Ukraine.jpg`,
    description: `My name is Daniela Herodesová. I am an illustrator of weird grumpy characters, born
and based in Prague, Czech Republic. In my work, I mainly focus on people and their
expressions, which I draw digitally.
As I was deeply affected by the Russian invasion of Ukraine, the picture I drew on the
day the war started expresses my personal feelings at the moment. Ukraine is very close
to me, as my mother is from Ukraine, a large part of my family lives there and I myself
spent every summer there during my childhood. That's why I had to react somehow
through art.`,
}
export default Project;