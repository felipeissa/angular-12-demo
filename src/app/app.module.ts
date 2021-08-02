import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { StructuralComponent } from './structural/structural.component';
import { ContentModule } from './content/content.module';
import { FormsModule } from './forms/forms.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ServicesModule } from './services/services.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { UtilComponent } from './util/util.component';
import { GetterSetterComponent } from './getter-setter/getter-setter.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    StructuralComponent,
    UtilComponent,
    GetterSetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataBindingModule,
    ContentModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    ServicesModule,
    RxjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
