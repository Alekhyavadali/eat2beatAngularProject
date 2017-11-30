import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { OurvisionComponent } from './ourvision/ourvision.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'mainPage', component: MainpageComponent },
  {path:'menu', component:MenuComponent},
  {path:'ourvision',component:OurvisionComponent},
  {path:'orderonline', component:OrderonlineComponent},
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
 ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    FooterComponent,
    MenuComponent,
    OurvisionComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    OrderonlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
      
    )
  ],
  exports:[RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
