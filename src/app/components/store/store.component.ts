import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public productList: any; // store all the product here in this property

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
     }
  )}
  
  addtoCart(item:any){

  }
}
