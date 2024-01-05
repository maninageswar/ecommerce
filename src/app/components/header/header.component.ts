import {Component, DoCheck, OnInit} from '@angular/core';
import {ApiServiceService} from "../../api-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck{
  headerCartCount:any=0
  constructor(private headertService: ApiServiceService) {
  }
  ngOnInit() {

  }
  ngDoCheck() {
    this.headerCartCount=this.headertService.CartCount
  }
}
