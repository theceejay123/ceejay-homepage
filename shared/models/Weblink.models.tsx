interface IWeblink {
  title?: string;
  link?: string;
}

export class Weblink implements IWeblink {
  title?: string;
  link?: string;

  constructor(options: IWeblink = {}) {
    this.link = options.link || "";
    this.title = options.title || "";
  }
}
