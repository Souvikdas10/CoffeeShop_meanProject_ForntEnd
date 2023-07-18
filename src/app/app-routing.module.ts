import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { RegistationComponent } from './Components/registation/registation.component';
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Components/menu/menu.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  {path:"menu",component:MenuComponent},
  {path:"services",component:ServicesComponent},
  {path:"register",component:RegistationComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
