import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../../api-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sendcatagory:any
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {

  }

  Catogeryclick(catogery:any){
    this.sendcatagory=catogery
  }
}
