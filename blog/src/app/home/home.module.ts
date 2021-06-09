import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'


const homeRouting: ModuleWithProviders<any> = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule
  ],
  exports:[
    // HomeComponent
  ],
  declarations: [
    // HomeComponent
  ],
  providers: []
})

export class HomeModule { }
