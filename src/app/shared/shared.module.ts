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
import { RoutereventsComponent } from '../topics/routerevents/routerevents.component';
import { ArraymanipulationsComponent } from '../topics/arraymanipulations/arraymanipulations.component';
import { GoodpracticesComponent } from '../topics/goodpractices/goodpractices.component';
import { DifferentbindingexpressionComponent } from '../topics/differentbindingexpression/differentbindingexpression.component';
import { LodashComponent } from '../topics/lodash/lodash.component';
import { DiffranceconstructorvsfactoryComponent } from '../topics/diffranceconstructorvsfactory/diffranceconstructorvsfactory.component';
import { NgxLoggerComponent } from '../topics/ngx-logger/ngx-logger.component';
import { ServiceworkerComponent } from '../topics/serviceworker/serviceworker.component';
import { AngulardigestcycleComponent } from '../topics/angulardigestcycle/angulardigestcycle.component';
import { DecoratorvsannotationsComponent } from '../topics/decoratorvsannotations/decoratorvsannotations.component';
import { ScopehierarchyComponent } from '../topics/scopehierarchy/scopehierarchy.component';
import { DifferencevarLetConstComponent } from '../topics/differencevar-let-const/differencevar-let-const.component';
import { HoistingComponent } from '../topics/hoisting/hoisting.component';
import { ClassicalvsproptypalComponent } from '../topics/classicalvsproptypal/classicalvsproptypal.component';
import { FunctionalbindingComponent } from '../topics/functionalbinding/functionalbinding.component';
import { DifferancebetweenprogramminglangComponent } from '../topics/differancebetweenprogramminglang/differancebetweenprogramminglang.component';
import { QuestionsComponent } from '../topics/questions/questions.component';
import { EventbubllingcapturingComponent } from '../topics/eventbubllingcapturing/eventbubllingcapturing.component';
import { EventmethodsComponent } from '../topics/eventmethods/eventmethods.component';
import { PromiseallComponent } from '../topics/promiseall/promiseall.component';
import { TypecoerictionComponent } from '../topics/typecoeriction/typecoeriction.component';
import { ValuetypereferancetypeComponent } from '../topics/valuetypereferancetype/valuetypereferancetype.component';
import { PrimitvedatatypeComponent } from '../topics/primitvedatatype/primitvedatatype.component';
import { DomComponent } from '../topics/dom/dom.component';
import { DifferentmethodsComponent } from '../topics/differentmethods/differentmethods.component';
import { HigherorderfunctionsComponent } from '../topics/higherorderfunctions/higherorderfunctions.component';
import { CaccherhttpComponent } from '../topics/caccherhttp/caccherhttp.component';
import { DatastructuresComponent } from '../topics/datastructures/datastructures.component';
import { CollectionsgeneratirsComponent } from '../topics/collectionsgeneratirs/collectionsgeneratirs.component';
import { PureimpurepipeComponent } from '../topics/pureimpurepipe/pureimpurepipe.component';
import { PureimpurefunctionsComponent } from '../topics/pureimpurefunctions/pureimpurefunctions.component';
import { PassbyvaluevspassbyrefComponent } from '../topics/passbyvaluevspassbyref/passbyvaluevspassbyref.component';
import { CallbackComponent } from '../topics/callback/callback.component';
import { ScssComponent } from '../topics/scss/scss.component';
import { ThiskeywordComponent } from '../topics/thiskeyword/thiskeyword.component';

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
  {path: 'facadepattern', component: FacadepatternComponent},
  {path: 'routerevents', component: RoutereventsComponent},
  {path: 'arraymanipulation', component: ArraymanipulationsComponent},
  {path: 'goodpractices', component: GoodpracticesComponent},
  {path: 'angulardigestcycle', component: AngulardigestcycleComponent},
  {path: 'classvsproto', component: ClassicalvsproptypalComponent},
  {path: 'dcovsanotation', component: DecoratorvsannotationsComponent},
  {path: 'diffprog', component: DifferancebetweenprogramminglangComponent},
  {path: 'diffbinding', component: DifferentbindingexpressionComponent},
  {path: 'diffconstvsfactory', component: DiffranceconstructorvsfactoryComponent},
  {path: 'functionalbinding', component: FunctionalbindingComponent},
  {path: 'hoisting', component: HoistingComponent},
  {path: 'loadash', component: LodashComponent},
  {path: 'ngx-logger', component: NgxLoggerComponent},
  {path: 'scope', component: ScopehierarchyComponent},
  {path: 'serviceworker', component: ServiceworkerComponent},
  {path: 'cachehttp', component: CaccherhttpComponent},
  {path: 'collectiongenerators',component: CollectionsgeneratirsComponent},
  {path: 'datastructures',component: DatastructuresComponent},
  {path: 'differentmethods',component: DifferentmethodsComponent},
  {path: 'dom',component: DomComponent},
  {path: 'eventbubbling',component: EventbubllingcapturingComponent},
  {path: 'eventmethods',component: EventmethodsComponent},
  {path: 'higherorderfunctions',component: HigherorderfunctionsComponent},
  {path: 'primitvedatatype',component: PrimitvedatatypeComponent},
  {path: 'promiseall',component: PromiseallComponent},
  {path: 'questions',component: QuestionsComponent},
  {path: 'typecoeriction',component: TypecoerictionComponent},
  {path: 'valuetypereftype',component: ValuetypereferancetypeComponent},
  {path: 'pureimpurepipe',component: PureimpurepipeComponent},
  {path: 'pureimpurefunctions',component: PureimpurefunctionsComponent},
  {path: 'passbyvalvsref',component: PassbyvaluevspassbyrefComponent},
  {path: 'callback',component: CallbackComponent},
  {path: 'scss',component: ScssComponent},
  {path: 'thiskeyword',component: ThiskeywordComponent},
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
    FacadepatternComponent,
    RoutereventsComponent,
    ArraymanipulationsComponent,
    GoodpracticesComponent,
    DifferentbindingexpressionComponent,
    LodashComponent,
    DiffranceconstructorvsfactoryComponent,
    NgxLoggerComponent,
    ServiceworkerComponent,
    AngulardigestcycleComponent,
    DecoratorvsannotationsComponent,
    ScopehierarchyComponent,
    DifferencevarLetConstComponent,
    HoistingComponent,
    ClassicalvsproptypalComponent,
    FunctionalbindingComponent,
    DifferancebetweenprogramminglangComponent,
    QuestionsComponent,
    EventbubllingcapturingComponent,
    EventmethodsComponent,
    PromiseallComponent,
    TypecoerictionComponent,
    ValuetypereferancetypeComponent,
    PrimitvedatatypeComponent,
    DomComponent,
    DifferentmethodsComponent,
    HigherorderfunctionsComponent,
    CaccherhttpComponent,
    DatastructuresComponent,
    CollectionsgeneratirsComponent,
    PureimpurepipeComponent,
    PureimpurefunctionsComponent,
    PassbyvaluevspassbyrefComponent,
    CallbackComponent,
    ScssComponent,
    ThiskeywordComponent
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
