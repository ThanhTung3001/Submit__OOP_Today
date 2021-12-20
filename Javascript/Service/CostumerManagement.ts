import { Costumer } from "../Costumer";
import { Management } from "../Management";

export class CostumerManagement implements Management<Costumer>{
    datas: Costumer[];
    add(data: Costumer): void {
       this.datas.push(data)
    }
    deleteById(id: number): void {
       this.datas= this.datas.filter(data=>data.id!=id);
    }
    findById(id: number): void {
       var costumer = this.datas.filter(data=>data.id==id)[0];
      console.log(costumer)
    }
    UpdateById(id: number, data: Costumer): void {
         this.datas.forEach(e=>{
             e=e.id==id?data:e;
         });
    }
    
}