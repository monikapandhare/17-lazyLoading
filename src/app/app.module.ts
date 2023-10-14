import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PhonesComponent } from './shared/components/products/phones/phones.component';
import { TabsComponent } from './shared/components/products/tabs/tabs.component';
import { LaptopsComponent } from './shared/components/products/laptops/laptops.component';
import { ActivatedComponent } from './shared/components/users/activated/activated.component';
import { InactivatedComponent } from './shared/components/users/inactivated/inactivated.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    UsersComponent,
    NavbarComponent,
    PhonesComponent,
    TabsComponent,
    LaptopsComponent,
    ActivatedComponent,
    InactivatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
