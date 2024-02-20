import { Item } from "./Item";

export class List{

  constructor( listID: number , listName: string, listStatus: boolean, listItems : Item[]){
    this.listID = listID;
    this.listName = listName;
    this.listStatus = listStatus;
    this.items = listItems;
  }

  listID: number;
  listName:string;
  listStatus: boolean = false; //true = all items checked
  items: Item[] = [];
  isEditing: boolean = false;
}
