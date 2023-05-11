import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { CreateEmpleadosComponent } from './components/create-empleados/create-empleados.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';

const routes: Routes = [

{ path:'' ,redirectTo:'lista-empleados' , pathMatch:'full'},
{ path:'lista-empleados',component:ListaEmpleadosComponent},
{ path:'create-empleados', component:CreateEmpleadosComponent},
{ path:'edit-empleado/:id', component:CreateEmpleadosComponent},
{ path:'ver-empleados/:id', component:VerEmpleadosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
