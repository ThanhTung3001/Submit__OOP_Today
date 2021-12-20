import { Base } from "./Base";
import { Category } from "./Category";
import { COLOR } from "./color";

export class Product extends Base{
    price:number;
    numberOf:number;
    size:number;
    color:COLOR;
    category:Category
    constructor(_id:number,_name:string,_price:number,_numberOf:number,_size:number,_color:COLOR,_category:Category){
        super(_id,_name);
        this.numberOf=_numberOf;
        this.price=_price;
        this.size=_size;
        this.color=_color;
        this.category=_category;
    }   

}