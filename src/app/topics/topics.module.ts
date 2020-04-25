import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PluckComponent } from './pluck/pluck.component';
import { Routes } from '@angular/router';
// import { ObservableVsPromiseComponent } from './observable-vs-promise/observable-vs-promise.component';
// import { SubscribeComponent } from './subscribe/subscribe.component';
// import { ObservableComponent } from './observable/observable.component';

const routes: Routes=[
  // {path: 'pluck', component: PluckComponent}
]

@NgModule({
  declarations: [
    // PluckComponent
    // ObservableComponent
    // SubscribeComponent
    // ObservableVsPromiseComponent
],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
  ]
})
export class TopicsModule { }
