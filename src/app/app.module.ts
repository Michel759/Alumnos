import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--NgModel lives here
import { AppComponent } from './app.component';
import { AlumnoComponent } from'./alumno/alumno.component';
@NgModule({
declarations: [
AppComponent,
AlumnoComponent
],
imports: [
BrowserModule,
FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }