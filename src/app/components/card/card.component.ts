import {Component, Input, OnInit} from '@angular/core';
import {ApiServiceService} from "../../api-service.service";

// @ts-ignore
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() item:any={};
  @Input() cart:any=false;

  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {

  }
  addToCart(item:any){
    this.apiService.CartProducts.push(item)
    console.log(this.apiService.CartProducts)
    this.apiService.CartCount=this.apiService.CartCount+1
  }

  removeFromCart(item:any){
    let x=this.apiService.CartProducts.filter((i:any) => i !== item)
    this.apiService.CartProducts=x
    if (this.apiService.CartCount>0){
      this.apiService.CartCount=this.apiService.CartCount-1
    }
    console.log(this.apiService.CartProducts)
  }


}
