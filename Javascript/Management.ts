export interface Management<Type>{
    datas:Type[]
   add(data:Type):void;
   deleteById(id:number):void;
   findById(id:number):void;
   UpdateById(id:number,data:Type):void;
}