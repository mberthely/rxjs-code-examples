import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './operators/transformation/map/map.component';
import { ForkJoinComponent } from './operators/cobination/fork-join/fork-join.component';
import { TakeComponent } from './operators/filtering/take/take.component';
import { CatchComponent } from './operators/error-handling/catch/catch.component';
import { FilterComponent } from './operators/filtering/filter/filter.component';

const routes: Routes = [
  // Operators Transformation 
  { path: 'map', component: MapComponent },

  // Operators Combination 
  { path: 'forkJoin', component: ForkJoinComponent },

  // Operators Filtering
  { path: 'take', component: TakeComponent },
  { path: 'filter', component: FilterComponent },

  // Error handling
  { path: 'catch', component: CatchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
