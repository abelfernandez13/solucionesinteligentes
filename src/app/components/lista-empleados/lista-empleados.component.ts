import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { EmpleadoService } from '../service/empleado.service';


@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  filterEmpleados:'';
  empleados:any[];


  constructor(private _empleadoService:EmpleadoService) {

   }

  ngOnInit(): void {
    this.getEmpleados();
  }


getEmpleados(){

this._empleadoService.getEmpleados().subscribe((data)=>{
this.empleados=[];

data.forEach(element=> {

this.empleados.push({

 id:element.payload.doc.id,
 ...element.payload.doc.data()
})


console.log(this.empleados)
});

 })

}


eliminarEmpleado(id:string){

this._empleadoService.eliminarEmpleado(id).then(() =>{


console.log('empleado eliminado')

}


).catch(error =>{

console.log(error)

})

}
 }




