import { Component, inject, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';


@Component({
  selector: 'app-spinner',
  templateUrl: './sppiner.component.html',
  styleUrls: ['./sppiner.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate(200)]),
    ]),
  ],
  standalone: false,
})
export class SpinnerComponent {

  private readonly spinner = inject(SpinnerService)
  showSpinner = false;
  ngAfterViewInit() {
    /** @description Nos suscribimos para obtener el estado del spinner */
    this.spinner.isLoading.subscribe((isLoading) => {
      this.showSpinner = isLoading;
    })
  }

}
