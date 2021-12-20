import { Category } from "../Category";
import { COLOR } from "../color";
import { Costumer } from "../Costumer";
import { Product } from "../product";
import { ROLE } from "../ROLE";
import { CategoryManagement } from "../Service/CategoryManagement";
import { CostumerManagement } from "../Service/CostumerManagement";
import { ProductManagement } from "../Service/ProductManagement";

class Test{
    categoryRp :CategoryManagement 
    productRp:ProductManagement
    costumerRp:CostumerManagement 
    constructor(){
        this.categoryRp =new CategoryManagement();
        this.productRp =new ProductManagement();
        this.costumerRp = new CostumerManagement();
    }

    add():void{
        var category = new Category("Clother",1);
        this.categoryRp.add(category);// add category to list categorys 
        var product = new  Product(1,"Tee",199,10,10,COLOR.RED,category) //new object product 
        this.productRp.add(product)//add product to list
         var roles :ROLE[];
         roles.push(ROLE.ROLE_ADMIN)
        var costumer = new Costumer(1,"Dat",19,"VietNam","101928822",roles)
        this.costumerRp.add(costumer);

    }
}