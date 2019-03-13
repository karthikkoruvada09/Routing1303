import { resolve, reject } from 'q';

export class AuthService{
    loggedIn=false;


    isAuthenticated(){
        const promise =new Promise((resolve,reject)=>{
            setTimeout(()=>{
        resolve( this.loggedIn); 
            },1500)
        })
        return promise;
    }
    isLoggedIn(){
        this.loggedIn=true;
    }

    isLogOut(){
        this.loggedIn=false;
    }

}
