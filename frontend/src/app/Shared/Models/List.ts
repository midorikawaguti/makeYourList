import { Item } from "./Item";

export class List{

  constructor( listID: number , listName: string, listItems : Item[]){
    this.ListID = listID;
    this.ListName = listName;
    this.Items = listItems;
  }

  ListID: number;
  ListName:string;
  ListStatus: boolean = false; //true = all items checked
  Items: Item[] = [];
  IsEditing: boolean = false;
}
