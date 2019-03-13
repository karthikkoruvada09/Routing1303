import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ServerComponent } from './server/server.component';
import { ServeChildrComponent } from './serve-childr/serve-childr.component';
import { ServeChildr2Component } from './serve-childr2/serve-childr2.component';
import { AuthServiceGuard } from './authCan.service.ts';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'user',component:UserComponent},
{path:'server',component:ServerComponent,canActivateChild:[AuthServiceGuard], children:[{path:':id',component:ServeChildrComponent},{path:':id/name',component:ServeChildr2Component}]},
{path:"**",component:PagenotFoundComponent,data:{message:"hahha ehy are you opening me"}}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
