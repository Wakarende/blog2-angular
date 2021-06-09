import { ModuleWithProviders } from '@angular/core';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './shared/layout/header.component';
import { FooterComponent } from './shared/layout/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const rootRouting: ModuleWithProviders<any> = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
