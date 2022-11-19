import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { AboutComponent } from './page/about/about.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { SharedComponents } from './component/shared.module';
import { ProductsComponent } from './page/products/products.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { TypedDirective } from './directives/typeEffect/typed.directive'
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ContactUsComponent,
    ProductsComponent,
    TypedDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponents,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
