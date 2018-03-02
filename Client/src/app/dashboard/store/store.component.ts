import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  tableData: any[];

  constructor(private storeservice: StoreService) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(): void {
    var self = this;
    this.storeservice.getProducts()
    .subscribe(function(prods) {
      self.tableData = prods.data;
      self.tableData = self.tableData.filter(function(element, index, array){
        return element.SellerName  === 'esraa';
      });
    });
  }//end getProuducts

}

