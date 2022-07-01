import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class CartService {
  
    
    public cartItemList : any = []

    public productList = new BehaviorSubject<any>([]);
    getTotalPrice: any;
  
    

    constructor() { }
    getProducts(){
        return this.productList.asObservable();
     }

    setProduct(product: any) {
        this.cartItemList.push(...product);
        this.productList.next(product);
    }
       addtoCart(product:any){
        this.cartItemList.push(product); //koga ke klikneme addtocart product ni se dodava
        this.productList.next(this.cartItemList);
        this.getTotalPrice();
        console.log(this.cartItemList);
      }
 
      // so ovoj metod mozeme da izbrsam eden item od cart
      removeCartItem(product:any){  //dodeluvam index kako parametar za da znaeme koj product da se izbrisa
        this.cartItemList.map((a:any, index:any) => {
          if(product.id === a.id){
            this.cartItemList.splice(index,1)
          }
        })
      }
   
  }



   