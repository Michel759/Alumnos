import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { Alumnos } from '../mock-alumno';
@Component({
selector: 'app-alumno',
templateUrl: './alumno.component.html',
styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
alumno = Alumnos;
selectedalumno: Alumno;
constructor() { }
ngOnInit() {
}
onSelect(alumno: Alumno): void {
this.selectedalumno = alumno;
}
}
