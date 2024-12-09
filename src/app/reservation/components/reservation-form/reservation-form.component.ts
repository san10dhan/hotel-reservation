import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../../models/reservation';
import { ReservationService } from '../../../shared/services/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      let reservation = this.reservationService.getReservationById(parseInt(id));
      if(reservation) {
        this.reservationForm.patchValue(reservation);
      }
      
    }
  }
  onSubmit(): void {
    let reservation: Reservation = this.reservationForm.value;
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.reservationService.updateReservation(parseInt(id), reservation);
    }
    else {
      this.reservationService.addReservation(reservation);
    }
    
    this.router.navigate(['/list']);
  }
}
