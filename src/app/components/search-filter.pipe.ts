import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any ,args: string): any {

if(!value)return null;
 if(!args) return value


 const resultEmpleado =[];

 if(args.length < 3) return value;


  for(const empleados of value){

  if(empleados.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1 ){

  resultEmpleado.push(empleados);

  }
  }

  return resultEmpleado;
  }







}
