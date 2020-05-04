import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';


const routes: Routes = [
  {path:"users/dashboard",component:AppointmentComponent},
  // {path:"users/dashboard/viewappointment",component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents=[AppointmentComponent];
