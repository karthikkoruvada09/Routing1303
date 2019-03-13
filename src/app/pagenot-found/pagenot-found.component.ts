import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenot-found',
  templateUrl: './pagenot-found.component.html',
  styleUrls: ['./pagenot-found.component.css']
})
export class PagenotFoundComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
data:any;
  ngOnInit() {
this.route.data.subscribe(data =>{
  this.data=data;
})
  }

}
