import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../../api-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{

  item:any
  constructor(private apiService: ApiServiceService,
              private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    let productId=this.activatedRoute.snapshot.paramMap.get('id')
    console.log(productId)
    this.apiService.getProductById(productId).subscribe((product)=>{
      this.item=product
    })
    console.log(this.item)

  }

  addToCart(item:any){
    this.apiService.CartProducts.push(item)
    console.log(this.apiService.CartProducts)
    this.apiService.CartCount=this.apiService.CartCount+1
  }

}
