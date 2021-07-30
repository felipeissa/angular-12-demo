import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentParentComponent } from './content/content-parent/content-parent.component';
import { DataBindingComponent } from './data-binding/data-binding/data-binding.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { TemplateComponent } from './forms/template/template.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { RxjsComponent } from './rxjs/rxjs/rxjs.component';
import { ServicesContainerComponent } from './services/services-container/services-container.component';
import { StructuralComponent } from './structural/structural.component';


const routes: Routes = [
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'structural', component: StructuralComponent },
  { path: 'content', component: ContentParentComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'service', component: ServicesContainerComponent },
  { path: 'rxjs', component: RxjsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
