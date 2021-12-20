import { Management } from "../Management";
import { Product } from "../product";

type NewType = Management<Product>;

export class ProductManagement implements NewType{
    datas: Product[];
    add(data: Product): void {
        this.datas.push(data);
    }
    deleteById(id: number): void {
        this.datas=this.datas.filter(data=>data.id!=id);
    }
    findById(id: number): void {
       var product=this.datas.filter(data=>data.id==id)[0];
       console.log(product)
        
    }
    UpdateById(id: number, data: Product): void {
        this.datas.forEach(e=>{
            e = data.id==id?data:e;
        });
    }
}