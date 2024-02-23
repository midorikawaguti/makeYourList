export class Item{
  constructor( itemID:number, itemName: string, dateCreated: Date ){
    this.ItemID = itemID;
    this.ItemName = itemName;
    this.DateCreated = dateCreated;

  }

  ItemID: number;
  ItemName: string;
  DateCreated: Date;
  ItemStatus: boolean = false;
  IsEditing: boolean = false;

}
