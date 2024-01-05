import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {ApiServiceService} from "../../api-service.service";

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit, DoCheck{
  KartProducts: any

  constructor(private cartService: ApiServiceService) {
  }

  ngOnInit() {
    if (this.cartService.CartProducts.length) {
      this.KartProducts = this.cartService.CartProducts
    }
  }

  ngDoCheck() {
    this.KartProducts = this.cartService.CartProducts
  }


}
