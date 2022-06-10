import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddresFormComponent } from './addres-form/addres-form.component';
import { CounterComponent } from './counter/counter.component';
import { FlexAndGridComponent } from './flex-and-grid/flex-and-grid.component';
import { MoreCssCoolStuffComponent } from './more-css-cool-stuff/more-css-cool-stuff.component';
import { YnetComponent } from './ynet/ynet.component';

const routes: Routes = [

  {path:'form',component:AddresFormComponent},
  {path:'flexandgrid',component:FlexAndGridComponent},
  {path:'morecsscoolstuff',component:MoreCssCoolStuffComponent},
  { path: 'counterchange', component: CounterComponent },
  { path: 'ynet', component: YnetComponent },
  { path: '', redirectTo: 'dasboard',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
