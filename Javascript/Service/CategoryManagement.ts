import { Category } from "../Category";
import { Management } from "../Management";

export class CategoryManagement implements Management<Category>{
    datas: Category[];
    add(data: Category): void {
      this.datas.push(data)
    }
    deleteById(id: number): void {
       this.datas = this.datas.filter(data=>data.id!=id)
    }
    findById(id: number): void {
        var category = this.datas.filter(data=>data.id==id)[0];
        console.log(category)
    }
    UpdateById(id: number, data: Category): void {
        this.datas.forEach(e=>{
          e = e.id==id?data:e;
        });
    }
 
}