import {ImagesObject} from './ImagesObject';

export class images{
  constructor(
    items : Array<ImagesObject>
  ) {
    this.items = items;
  }
  items !: Array<ImagesObject>;
}
