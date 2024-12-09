import { Injectable } from '@angular/core';
import { Reservation } from '../../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];
  constructor() { }

  getAllResevations(): Reservation[] {
    return this.reservations;
  }

  getReservationById(id: number): Reservation | undefined{
    return this.reservations.find(res => res.id === id);
  }

  deleteResrvation(id: number): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  updateReservaton(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
  }
}
