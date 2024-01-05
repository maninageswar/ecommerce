import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  CartProducts:any=[]
  CartCount:any=0
  constructor(private htttp:HttpClient) { }

  getProducts(){
    return this.htttp.get("https://fakestoreapi.com/products/")
  }

  getProductById(id:any){
    return this.htttp.get(`https://fakestoreapi.com/products/${id}`)
  }

}
