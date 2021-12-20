import { Base } from "./Base";
import { Management } from "./Management";
import { ROLE } from "./ROLE";

export class Costumer extends Base {
    address:string;
    age:number;
    phoneNumber:string;
    roles:ROLE[];
    constructor(_id:number,_name:string,_age:number,_address:string,_phoneNumber:string,_roles:ROLE[]){
        super(_id,_name);
        this.age = _age;
        this.address=_address;
        this.phoneNumber=_phoneNumber;
        this.roles=_roles;
    }
  


}