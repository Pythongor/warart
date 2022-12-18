import { PhotographyProjectType } from "projects/types";
import { mediaEndPoint } from "../config"

export const Project: PhotographyProjectType = {    category: `visual`,
    id: 136,
    name: "",
    author: `AJ Stetson`,
    subcategory: `photography`,
    tags: [],
    image: [{name: "", src: `${mediaEndPoint}/media/136/NY 1.jpg`}, {name: "", src: `${mediaEndPoint}/media/136/NY 2.jpg`},
              {name: "", src: `${mediaEndPoint}/media/136/NY 3.jpg`}, {name: "", src: `${mediaEndPoint}/media/136/NY 4.jpg`},
              {name: "", src: `${mediaEndPoint}/media/136/NY 5.jpg`}, {name: "", src: `${mediaEndPoint}/media/136/NY 6.jpg`},
              {name: "", src: `${mediaEndPoint}/media/136/NY 7.jpg`}, {name: "", src: `${mediaEndPoint}/media/136/NY 8.jpg`},
              {name: "", src: `${mediaEndPoint}/media/136/NY 9.jpg`}, {name: "", src: `${mediaEndPoint}/media/136/NY 10.jpg`},
              {name: "", src: `${mediaEndPoint}/media/136/NY 11.jpg`}, {name: "", src: `${mediaEndPoint}/media/136/NY 12.jpg`}, ],
    description: `I am a New York City-based portrait photographer, and have been attending and photographing rallies for Ukraine since March 1 earlier this year, and sharing these images with Ukrainians, Ukrainian Americans, and any organizations that might find such images useful in continuing to gather and strengthen support for the efforts to aid Ukraine and stop Russian aggression, including and most especially Razom for Ukraine.
It has been heartbreaking to witness the chain of destruction and casualties caused by Russia's actions, yet inspiring to see the resilience and stamina of Ukrainians in the face of these horrifying events. I hope that my images might afford some small gestures to promote empathy, to witness that radiance and resilience, and to bolster support for Ukraine.

Here are some images of most of the Ukrainian rallies I photographed in New York City, Paris, and Berlin, over the past six months.`,
}
export default Project;