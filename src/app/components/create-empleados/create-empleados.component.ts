import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../service/empleado.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2'
import { CountriesService } from '../service/countries.service';

@Component({
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})
export class CreateEmpleadosComponent implements OnInit {



    userName = '';
    userName1 = '';
    userName2 = '';
    userName3 = '';
    userName4 = '';
    userName5 = '';
    userName6 = '';
    userName7 = '';
    userName8 = '';


  paises:any;

  ngOnInit(): void {

    this.cargarDatos();
    this.ageCalculator()
    this.esEditar();
  }


select1:boolean=true;
select2:boolean;
mostrarInput:boolean;
maxDate: Date;

valor:0
createEmpleado: FormGroup;
submitted = false;
id: string | null;
titulo='Nuevo empleado';


constructor(private fb:FormBuilder, private _empleadoService:EmpleadoService ,
    private router:Router,
    private aroute:ActivatedRoute,
    private _countries: CountriesService ) {

      const currentYear = new Date().getFullYear();
      this.maxDate = new Date(currentYear + -17, -11, 0);


    this.createEmpleado = this.fb.group({

      nombre: ['',Validators.required],
      fechaNacimiento: ['',Validators.required],
      selectPais:['',Validators.required],
      porcentC: ['', Validators.required],
      nombreUser: ['' ,Validators.required],
      fechaContratacion: ['' ,Validators.required],
      active: [''],
      Administrativa: [''],
      Tecnologia: [''],

    })
 this.id= this.aroute.snapshot.paramMap.get('id');

   }
   showAge:number;
   age;

   ageCalculator(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
    console.log(this.showAge)
  }

   cargarDatos(){

   this._countries.getPaises('https://restcountries.eu/rest/v2/all').subscribe(resp =>{

    this.paises = resp;

  })
}

agregarEditarEmpleado(){

  this.submitted=true

  if(this.id === null){


    this.agregarEmpleado();

   } else{

   this.editarEmpleado(this.id);

   }
    }

agregarEmpleado(){

   this.titulo='Crear empleado'

   const empleado:any= {

   nombre: this.createEmpleado.value.nombre,
   fechaNacimiento: this.createEmpleado.value.fechaNacimiento,
   selectPais: this.createEmpleado.value.selectPais,
   porcentC: this.createEmpleado.value.porcentC,
   nombreUser: this.createEmpleado.value.nombreUser,
   fechaContratacion: this.createEmpleado.value.fechaContratacion,
   active: this.createEmpleado.value.active,
   Administrativa: this.createEmpleado.value.Administrativa,
   Tecnologia: this.createEmpleado.value.Tecnologia,
   showAge: this.showAge
  }

this._empleadoService.agregarEmpleado(empleado).then(()=>{
 Swal.fire(
  'Bien hecho!',
  'El empleado se ha creado correctamente!',
   'success'
 )

 this.router.navigate(['/lista-empleados'])
 }
)}

editarEmpleado(id:string){

 this.titulo='Editar empleado'
      const empleado: any= {

        nombre: this.createEmpleado.value.nombre,
       fechaNacimiento: this.createEmpleado.value.fechaNacimiento,
        selectPais: this.createEmpleado.value.selectPais,
        porcentC: this.createEmpleado.value.porcentC,
        nombreUser: this.createEmpleado.value.nombreUser,
        fechaContratacion: this.createEmpleado.value.fechaContratacion,
        active: this.createEmpleado.value.active,
        Administrativa: this.createEmpleado.value.Administrativa,
        Tecnologia: this.createEmpleado.value.Tecnologia
       }

this._empleadoService.actualizarEmpleado(id,empleado).then(()=> {

  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )

  this.router.navigate(['/lista-empleados'])

})
    }

esEditar(){


  if(this.id !== null){

  this._empleadoService.getEmpleado(this.id).subscribe(data=>{


  this.titulo='Editar empleado'
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
