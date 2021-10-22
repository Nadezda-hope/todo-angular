import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { AddFormComponent } from './add-form/add-form.component';
import { FooterComponent } from './footer/footer.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    AddFormComponent,
    FooterComponent,
    TasksListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
