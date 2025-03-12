import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  //* Creamos el behavior para cambiar los estados, crear el observable
  private readonly loading = new BehaviorSubject<boolean>(false);
  //* Observable para suscribirse y obtener el estado del spinner
  isLoading = this.loading.asObservable();
  /** @description Modifica el estado del spinner */
  toggleLoading(status: boolean) {
    this.loading.next(status);
  }
}