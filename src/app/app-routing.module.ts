import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddresFormComponent } from './addres-form/addres-form.component';
import { CounterComponent } from './counter/counter.component';
import { FlexAndGridComponent } from './flex-and-grid/flex-and-grid.component';
import { IframeDemoComponent } from './iframe-demo/iframe-demo.component';
import { MoreCssCoolStuffComponent } from './more-css-cool-stuff/more-css-cool-stuff.component';

const routes: Routes = [

  {path:'form',component:AddresFormComponent},
  {path:'flexandgrid',component:FlexAndGridComponent},
  {path:'morecsscoolstuff',component:MoreCssCoolStuffComponent},
  { path: 'counterchange', component: CounterComponent },
  { path: 'iframeDemo', component: IframeDemoComponent },
  { path: '', redirectTo: 'dasboard',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
