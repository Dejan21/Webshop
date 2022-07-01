import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public productList: any; // store all the product here in this property
  public filterCategory:any;


  constructor(private api:ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){ // vo api-to kategoriite se woman and man fashion jas gi stavam vo edna kategorija 
          a.category ="fashion"                                                                            
        }
        Object.assign(a,{quantity:1,total:a.price}); //so forEeach gi listiame site elementi od nizata kaj mene A e naznaceno kako element a dodeluvam object za da mozam da vratam description, price ect..
      })
     }
  )
}

  
  
  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }

  // ovaa funckija e za da mi gi isfiltrira categorite pri prebaruvanje na produktite
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any) => {
      if(a.category == category || category==''){
        return a;
      }
     
    })
  }
}
