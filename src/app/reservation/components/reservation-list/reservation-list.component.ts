import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../models/reservation';
import { ReservationService } from '../../../shared/services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getAllResevations();
  }

  deleteReservation(id: number): void {
    this.reservationService.deleteResrvation(id);
  }
}
