export class ListItem{
  constructor( itemName: string, dateCreated: Date, itemStatus: string ){
    this.ItemName = itemName;
    this.DateCreated = dateCreated;
    this.ItemStatus = itemStatus;
  }

  ItemName: string;
  DateCreated: Date;
  ItemStatus: string ;

}
