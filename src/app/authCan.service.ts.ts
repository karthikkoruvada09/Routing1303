import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './authhelp_service';
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';
import{Router} from '@angular/router'


@Injectable()
 export class AuthServiceGuard implements CanActivate,CanActivateChild{
     constructor(private  as : AuthService ,private router:Router){}
     canActivate( route : ActivatedRouteSnapshot,state :RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
  return this.as.isAuthenticated()
            .then((authenticated)=>{
                if(authenticated){
                    return true;
                }else{
                    this.router.navigate(['/'])
                }
            })
     }

     canActivateChild( route : ActivatedRouteSnapshot,state :RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route,state)
           }
      

 } 