import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';



@NgModule({
  declarations: [
    ReservationListComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReservationModule { }
