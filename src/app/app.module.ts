import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ForkJoinComponent,
    TakeComponent,
    CatchComponent,
    FilterComponent,
    FindComponent,
    SwitchMapComponent,
    SubjectVsObservableComponent,
    CombineAllComponent,
    OfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
