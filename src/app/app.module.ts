import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DeliveryboyModule } from './deliveryboy/deliveryboy.module';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ResourceNotFoundComponent } from './notfound.component';
import { OrderModule } from './order/order.module';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ResourceNotFoundComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  imports: [
    DeliveryboyModule,
    OrderModule,
    RouterModule.forRoot(appRoutes)]
})
export class AppModule { }
