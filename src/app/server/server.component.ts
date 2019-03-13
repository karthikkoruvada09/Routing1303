import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  servers=[{id:110,name:"kota",location:"mumbai"},{id:111,name:"jkota",location:"ahmedabad"},{id:112,name:"skota",location:"gujrat"}]



  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=>{
      console.log(params.get('name'));
    });

    this.route.fragment.subscribe(params=>{
      console.log(params);
    });


    this.route.queryParams.subscribe(params=>{
      console.log(params);
    });
  }


  test(server){
this.router.navigate(['/server',server.name ,{location : server.location}],{queryParams:{location :server.location,name: server.name === "kota" ? "nani" :"chinni"},fragment :"onsesrverchildpage"})
  }

}
