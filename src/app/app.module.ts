import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { NavBarComponent } from './components/home/nav-bar/nav-bar.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    NavBarComponent,
    ServicesComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'servicios', component: ServicesComponent },
    { path: 'sobre-nosotros', component: AboutComponent },
    { path: 'contactos', component: ContactsComponent }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
