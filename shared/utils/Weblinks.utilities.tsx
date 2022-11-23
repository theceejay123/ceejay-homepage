import { Weblink } from "@models";

export const getWeblinks = () => [
  new Weblink({
    link: "about",
    title: "About",
  }),
  new Weblink({
    link: "experience",
    title: "Experience",
  }),
  new Weblink({
    link: "work",
    title: "Work",
  }),
  new Weblink({
    link: "view_source",
    title: "View Source",
  }),
];
