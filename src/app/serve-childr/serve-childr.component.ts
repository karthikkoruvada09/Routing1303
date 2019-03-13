import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-serve-childr',
  templateUrl: './serve-childr.component.html',
  styleUrls: ['./serve-childr.component.css']
})
export class ServeChildrComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      
      console.log(params.get('id')),
      console.log(params.get('name')),
      console.log(params.get('location'))
    });

    this.route.fragment.subscribe(params=>{
      console.log(params);
    });


    this.route.queryParams.subscribe(params=>{
      console.log(params);
    });
  }


  loadChild(){
    this.router.navigate(['name'],{relativeTo:this.route,queryParamsHandling:''})
  }

}
