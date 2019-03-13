import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouteRoutingModule } from './route-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ServerComponent } from './server/server.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { UserchildComponent } from './userchild/userchild.component';
import { ServeChildrComponent } from './serve-childr/serve-childr.component';
import { ServeChildr2Component } from './serve-childr2/serve-childr2.component';
import { AuthServiceGuard } from './authCan.service.ts';
import { AuthService } from './authhelp_service';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ServerComponent,
    HomeChildComponent,
    UserchildComponent,
    ServeChildrComponent,
    ServeChildr2Component,
    PagenotFoundComponent,
   
  ],
  imports: [
    BrowserModule,RouteRoutingModule

    
  ],
  providers: [AuthServiceGuard,AuthService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
