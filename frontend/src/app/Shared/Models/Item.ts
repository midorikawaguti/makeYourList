export class Item{
  constructor( itemName: string, dateCreated: Date ){
    this.ItemName = itemName;
    this.DateCreated = dateCreated;

  }

  ItemName: string;
  DateCreated: Date;
  ItemStatus: boolean = false;

}
