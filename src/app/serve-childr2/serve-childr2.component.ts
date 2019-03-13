import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-serve-childr2',
  templateUrl: './serve-childr2.component.html',
  styleUrls: ['./serve-childr2.component.css']
})
export class ServeChildr2Component implements OnInit {



  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      
      console.log(params.get('id'))

     
    });

    this.route.fragment.subscribe(params=>{
      console.log(params)
    });


    this.route.queryParams.subscribe((params : Params )=>{

   
    console.log(params)

    });
  }
  }


