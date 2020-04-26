import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { PluckComponent } from '../topics/pluck/pluck.component';
import { ObservableComponent } from '../topics/observable/observable.component';
import { SubscribeComponent } from '../topics/subscribe/subscribe.component';
import { ObservableVsPromiseComponent } from '../topics/observable-vs-promise/observable-vs-promise.component';
import { ObjectmanipulationComponent } from '../topics/objectmanipulation/objectmanipulation.component';

import { fromEvent } from 'rxjs';
import { DeferComponent } from '../topics/defer/defer.component';
import { ExhaustmapComponent } from '../topics/exhaustmap/exhaustmap.component';
import { ObserveonComponent } from '../topics/observeon/observeon.component';
import { ConstructorvsngoninitComponent } from '../topics/constructorvsngoninit/constructorvsngoninit.component';
import { DifferenceElementreftemplaterefcontainerrefComponent } from '../topics/difference-elementreftemplaterefcontainerref/difference-elementreftemplaterefcontainerref.component';
import { ParamsmapSwitchmapQuerymapComponent } from '../topics/paramsmap-switchmap-querymap/paramsmap-switchmap-querymap.component';
import { DirectivesComponent } from '../topics/directives/directives.component';
import { ChangedetectionstrategyComponent } from '../topics/changedetectionstrategy/changedetectionstrategy.component';
import { EncapsulationComponent } from '../topics/encapsulation/encapsulation.component';
import { ResolverComponent } from '../topics/resolver/resolver.component';
import { ComponentfactoryComponent } from '../topics/componentfactory/componentfactory.component';
import { DynamiccomponentComponent } from '../topics/dynamiccomponent/dynamiccomponent.component';
import { ParentChildCommunicationComponent } from '../topics/parent-child-communication/parent-child-communication.component';
import { ChildParentCommunicationComponent } from '../topics/child-parent-communication/child-parent-communication.component';
import { SubjectinhttpserviceComponent } from '../topics/subjectinhttpservice/subjectinhttpservice.component';
import { FromeventComponent } from '../topics/fromevent/fromevent.component';
import { ShareComponent } from '../topics/share/share.component';
import { ShadowdomComponent } from '../topics/shadowdom/shadowdom.component';
import { AsyncpipeCombinelatestComponent } from '../topics/asyncpipe-combinelatest/asyncpipe-combinelatest.component';

const routes: Routes=[
  {path: 'pluck', component: PluckComponent},
  {path: 'observable', component: ObservableComponent},
  {path: 'subscribe', component: SubscribeComponent},
  {path: 'ovservable-vs-promise', component: ObservableVsPromiseComponent},
  {path: 'objectmanipulation', component: ObjectmanipulationComponent},
  {path: 'defer', component: DeferComponent},
  {path: 'fromevent', component: FromeventComponent},
  {path: 'exhaustmap', component: ExhaustmapComponent},
  {path: 'observeon', component: ObserveonComponent},
  {path: 'constuctorvsngonit', component: ConstructorvsngoninitComponent},
  {path: 'differentref', component: DifferenceElementreftemplaterefcontainerrefComponent},
  {path: 'paramsswitchmap', component: ParamsmapSwitchmapQuerymapComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'changedetection', component: ChangedetectionstrategyComponent},
  {path: 'encapsulation', component: EncapsulationComponent},
  {path: 'resolver', component: ResolverComponent},
  {path: 'componentfactory', component: ComponentfactoryComponent},
  {path: 'dynamic', component: DynamiccomponentComponent},
  {path: 'parentchild', component: ParentChildCommunicationComponent},
  {path: 'childparent', component: ChildParentCommunicationComponent},
  {path: 'subjecthttp', component: SubjectinhttpserviceComponent},
  {path: 'asyncpipe', component: AsyncpipeCombinelatestComponent}
]

@NgModule({
  declarations: [
    SidebarComponent,
    PluckComponent,
    ObservableComponent,
    SubscribeComponent,
    ObservableVsPromiseComponent,
    ObjectmanipulationComponent,
    DeferComponent,
    FromeventComponent,
    ExhaustmapComponent,
    ObserveonComponent,
    ShareComponent,
    ConstructorvsngoninitComponent,
    DifferenceElementreftemplaterefcontainerrefComponent,
    ParamsmapSwitchmapQuerymapComponent,
    DirectivesComponent,
    ShadowdomComponent,
    ChangedetectionstrategyComponent,
    EncapsulationComponent,
    DynamiccomponentComponent,
    ResolverComponent,
    ComponentfactoryComponent,
    ParentChildCommunicationComponent,
    ChildParentCommunicationComponent,
    SubjectinhttpserviceComponent,
    AsyncpipeCombinelatestComponent
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
