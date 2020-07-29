import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { barComponent } from './components/bar.component';
import { ChartsModule } from 'ng2-charts';
import { SubModuleComponent } from './components/sub-module/sub-module.component';
import { ModuleWiseComponent } from './components/module-wise/module-wise.component';
import { ApplicationWiseComponent } from './components/application-wise/application-wise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicTableComponent,
    barComponent,
    SubModuleComponent,
    ModuleWiseComponent,
    ApplicationWiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
