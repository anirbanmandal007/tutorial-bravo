import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { PluckComponent } from '../topics/pluck/pluck.component';
import { ObservableComponent } from '../topics/observable/observable.component';
import { SubscribeComponent } from '../topics/subscribe/subscribe.component';
import { ObservableVsPromiseComponent } from '../topics/observable-vs-promise/observable-vs-promise.component';
import { ObjectmanipulationComponent } from '../topics/objectmanipulation/objectmanipulation.component';

const routes: Routes=[
  {path: 'pluck', component: PluckComponent},
  {path: 'observable', component: ObservableComponent},
  {path: 'subscribe', component: SubscribeComponent},
  {path: 'ovservable-vs-promise', component: ObservableVsPromiseComponent},
  {path: 'objectmanipulation', component: ObjectmanipulationComponent},
  
]

@NgModule({
  declarations: [
    SidebarComponent,
    PluckComponent,
    ObservableComponent,
    SubscribeComponent,
    ObservableVsPromiseComponent,
    ObjectmanipulationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
