import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ApiServiceService} from "../../api-service.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges{

  @Input() Catagory:any
  products: any = [];
  filteredProducts: any = [];
  ShowProducts: any =[]

  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe((res)=>{
      this.products=res;
      this.ShowProducts=res
    })
  }


  ngOnChanges() {
    console.log('this.products',this.products)
    if (this.Catagory==='products'){
      this.ShowProducts=this.products
    }else {
      this.filteredProducts = this.products.filter((item: any) => {
        if (this.Catagory === 'clothing') {
          return item.category.includes('clothing')
        }
        return item.category === this.Catagory
      })
      // this.products=filteredProducts
      if (this.filteredProducts.length) {
        this.ShowProducts = this.filteredProducts
      }
      console.log('filteredproducts', this.products)
      console.log('this.Catagory', this.Catagory)
    }
  }
}

