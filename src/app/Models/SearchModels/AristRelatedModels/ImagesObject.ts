export class ImagesObject{
  constructor(
    height : string,
    url : string,
    width : string
  ) {
    this.height = height;
    this.url = url;
    this.width = width;
  }
  height !: string;
  url !: string;
  width !: string;
}
