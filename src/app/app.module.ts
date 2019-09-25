import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppsettingComponent } from './appsetting/appsetting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormCreateComponent } from './pages/form-create/form-create.component';
import { DndModule } from 'ngx-drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CegTexteditorComponent } from './pages/form-create/ceg-texteditor/ceg-texteditor.component';
import { NgSelect2Module } from 'ng-select2';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingComponent,
    DashboardComponent,
    FormCreateComponent,
    CegTexteditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    DndModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelect2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
