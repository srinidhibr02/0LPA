import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { AboutComponent } from './page/about/about.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { SharedComponents } from './component/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
