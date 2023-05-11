import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../components/service/empleado.service';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css']
})
export class VerEmpleadosComponent implements OnInit {

  select1:boolean=true;
  select2:boolean;
  mostrarInput:boolean;
  maxDate: Date;

  valor:0
  createEmpleado: FormGroup;
  submitted = false;
  id: string | null;
  titulo = 'Ver empleado'

  constructor(private fb:FormBuilder, private _empleadoService:EmpleadoService ,
    private router:Router,
    private aroute:ActivatedRoute) {
    const currentYear = new Date().getFullYear();

    this.maxDate = new Date(currentYear + -17, 0, 0);


  this.createEmpleado = this.fb.group({

    nombre: ['',Validators.required],
    fechaNacimiento:['',Validators.required],
    selectPais:['',Validators.required],
    porcentC: ['', Validators.required],
    nombreUser: ['' ,Validators.required],
    fechaContratacion: ['' ,Validators.required],
    active: [''],
    Administrativa: [''],
    Tecnologia: [''],

  })
this.id= this.aroute.snapshot.paramMap.get('id');
console.log(this.id)
 }

 ngOnInit(): void {

  this.verEmpleados();
}
  verEmpleados(){

  this.titulo = 'Ver empleado'

 if(this.id !== null){

  this._empleadoService.getEmpleado(this.id).subscribe(data=>{

console.log(data.payload.data()['selectPais'])

  this.createEmpleado.setValue({

    nombre: data.payload.data()['nombre'],
    fechaNacimiento: data.payload.data()['fechaNacimiento'],
    selectPais: data.payload.data()['selectPais'],
    porcentC: data.payload.data()['porcentC'],
    nombreUser: data.payload.data()['nombreUser'],
    fechaContratacion: data.payload.data()['fechaContratacion'],
    active: data.payload.data()['active'],
    Administrativa: data.payload.data()['Administrativa'],
    Tecnologia: data.payload.data()['Tecnologia'],
  })

  })
    }

   }

  mostrarDatos():void {

    if( this.select1=true){

    this.select2=false

     }
       }

    mostrarDatos1():void {

    if( this.select2=true){

    this.select1=false
    this.mostrarInput=false

     }
       }

    mostrarInput1():void{

          if(this.mostrarInput=true){
         }
       }

       ocultarInput(): void{

        if(this.mostrarInput=true){
          this.mostrarInput=false
        }

       }



   }



