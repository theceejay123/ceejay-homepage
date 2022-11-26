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
    link: "https://github.com/theceejay123",
    title: "View Source",
  }),
];
