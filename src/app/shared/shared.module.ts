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
import { InterceptinputComponent } from '../topics/interceptinput/interceptinput.component';
import { CurryingComponent } from '../topics/currying/currying.component';
import { ClosuresComponent } from '../topics/closures/closures.component';
import { DynamicformvalidationsComponent } from '../topics/dynamicformvalidations/dynamicformvalidations.component';
import { SubjectsComponent } from '../topics/subjects/subjects.component';
import { EmittersComponent } from '../topics/emitters/emitters.component';
import { InjectorsComponent } from '../topics/injectors/injectors.component';
import { DifferentproblemsComponent } from '../topics/differentproblems/differentproblems.component';
import { GenericstypescriptComponent } from '../topics/genericstypescript/genericstypescript.component';
import { DecoratorsComponent } from '../topics/decorators/decorators.component';
import { MapreducefilterfindComponent } from '../topics/mapreducefilterfind/mapreducefilterfind.component';
import { SomeinangularComponent } from '../topics/someinangular/someinangular.component';
import { AngularpipesComponent } from '../topics/angularpipes/angularpipes.component';
import { NgrxstoreComponent } from '../topics/ngrxstore/ngrxstore.component';
import { DeepcloneComponent } from '../topics/deepclone/deepclone.component';
import { LifecyclehooksangularComponent } from '../topics/lifecyclehooksangular/lifecyclehooksangular.component';
import { DifferentwaystopassinputComponent } from '../topics/differentwaystopassinput/differentwaystopassinput.component';
import { SingletonpatternComponent } from '../topics/singletonpattern/singletonpattern.component';
import { RxjsthorrtlejoinComponent } from '../topics/rxjsthorrtlejoin/rxjsthorrtlejoin.component';
import { WebsocketsComponent } from '../topics/websockets/websockets.component';
import { RepeatrxjsComponent } from '../topics/repeatrxjs/repeatrxjs.component';
import { Eventcoalescingangular9Component } from '../topics/eventcoalescingangular9/eventcoalescingangular9.component';
import { DependecncyinjectionComponent } from '../topics/dependecncyinjection/dependecncyinjection.component';
import { AsyncawaitComponent } from '../topics/asyncawait/asyncawait.component';
import { FormarrayangularComponent } from '../topics/formarrayangular/formarrayangular.component';
import { ObserverpatternComponent } from '../topics/observerpattern/observerpattern.component';
import { FacadepatternComponent } from '../topics/facadepattern/facadepattern.component';

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
  {path: 'asyncpipe', component: AsyncpipeCombinelatestComponent},
  {path: 'interceptinput', component: InterceptinputComponent},
  {path: 'shadowdom', component: ShadowdomComponent},
  {path: 'angularpipes', component: AngularpipesComponent},
  {path: 'asyncawait', component: AsyncawaitComponent},
  {path: 'closure', component: ClosuresComponent},
  {path: 'currying', component: CurryingComponent},
  {path: 'decorators', component: DecoratorsComponent},
  {path: 'deepclone', component: DeepcloneComponent},
  {path: 'dependecyinjection', component: DependecncyinjectionComponent},
  {path: 'problems', component: DifferentproblemsComponent},
  {path: 'differentwaystopassinput', component: DifferentwaystopassinputComponent},
  {path: 'dynamicformvalidation', component: DynamicformvalidationsComponent},
  {path: 'emitters', component: EmittersComponent},
  {path: 'eventcoalesing', component: Eventcoalescingangular9Component},
  {path: 'formarray', component: FormarrayangularComponent},
  {path: 'generics', component: GenericstypescriptComponent},
  {path: 'injectors', component: InjectorsComponent},
  {path: 'lifecyclehooks', component: LifecyclehooksangularComponent},
  {path: 'mapreducefiler', component: MapreducefilterfindComponent},
  {path: 'ngrxstore', component: NgrxstoreComponent},
  {path: 'repeat', component: RepeatrxjsComponent},
  {path: 'thrrotlejoin', component: RxjsthorrtlejoinComponent},
  {path: 'singletonpattern', component: SingletonpatternComponent},
  {path: 'some', component: SomeinangularComponent},
  {path: 'subjects', component: SubjectsComponent},
  {path: 'websockets', component: WebsocketsComponent},
  {path: 'observerpattern', component: ObserverpatternComponent},
  {path: 'facadepattern', component: FacadepatternComponent}
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
    AsyncpipeCombinelatestComponent,
    InterceptinputComponent,
    CurryingComponent,
    ClosuresComponent,
    DynamicformvalidationsComponent,
    SubjectsComponent,
    EmittersComponent,
    InjectorsComponent,
    DifferentproblemsComponent,
    GenericstypescriptComponent,
    DecoratorsComponent,
    MapreducefilterfindComponent,
    SomeinangularComponent,
    AngularpipesComponent,
    NgrxstoreComponent,
    DeepcloneComponent,
    LifecyclehooksangularComponent,
    DifferentwaystopassinputComponent,
    SingletonpatternComponent,
    RxjsthorrtlejoinComponent,
    WebsocketsComponent,
    RepeatrxjsComponent,
    Eventcoalescingangular9Component,
    DependecncyinjectionComponent,
    AsyncawaitComponent,
    FormarrayangularComponent,
    ObserverpatternComponent,
    FacadepatternComponent
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
