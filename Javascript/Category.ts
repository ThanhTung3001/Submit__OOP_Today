import { Base } from "./Base";
import { Management } from "./Management";
import { Product } from "./product";

export class Category extends Base {
    products:Product[];
    constructor(_name:string,_id:number){
        super(_id,_name)
    }
 

}