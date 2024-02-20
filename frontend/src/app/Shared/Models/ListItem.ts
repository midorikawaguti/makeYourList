export class ListItem{
  constructor( dateCreated: Date, itemStatus: string ){
    this.dateCreated = dateCreated;
    this.itemStatus = itemStatus;
  }

  dateCreated: Date;
  itemStatus: string;

}
