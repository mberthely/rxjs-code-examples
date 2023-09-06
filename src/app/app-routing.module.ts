import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './operators/transformation/map/map.component';
import { ForkJoinComponent } from './operators/cobination/fork-join/fork-join.component';
import { TakeComponent } from './operators/filtering/take/take.component';
import { CatchComponent } from './operators/error-handling/catch/catch.component';
import { FilterComponent } from './operators/filtering/filter/filter.component';
import { FindComponent } from './operators/filtering/find/find.component';
import { SwitchMapComponent } from './operators/transformation/switch-map/switch-map.component';
import { SubjectVsObservableComponent } from './topic-scenarios/subject-vs-observable/subject-vs-observable.component';
import { CombineAllComponent } from './operators/cobination/combine-all/combine-all.component';
import { OfComponent } from './operators/creation/of/of.component';
import { FromComponent } from './operators/creation/from/from.component';
import { DebounceTimeComponent } from './operators/filtering/debounce-time/debounce-time.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [

  // Home
  { path: '', component: HomeComponent },

  // Topic scanarios
  { path: 'subject-vs-observable', component: SubjectVsObservableComponent },

  // Operators > Transformation
  { path: 'map', component: MapComponent },
  { path: 'switch-map', component: SwitchMapComponent },

  // Operators > Combination
  { path: 'forkJoin', component: ForkJoinComponent },
  { path: 'combine-all', component: CombineAllComponent },

  // Operators > Filtering
  { path: 'take', component: TakeComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'find', component: FindComponent },
  { path: 'debounce-time', component: DebounceTimeComponent },

  // Error handling
  { path: 'catch', component: CatchComponent },

  // Creation
  { path: 'of', component: OfComponent },
  { path: 'from', component: FromComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
