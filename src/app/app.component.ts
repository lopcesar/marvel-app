import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from './shared/sppiner/spinner.service';
import { Device } from '@capacitor/device';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  private translate = inject(TranslateService);

  private readonly spinner = inject(SpinnerService);
  showSpinner = false;
  async ngOnInit() {
    await this.setDeviceLanguage();

    /** @description Nos suscribimos a los cambios del spinner para mostrarlo o no */
    this.spinner.isLoading.subscribe((isLoading) => {
      if (!isLoading)
        //* Le ponemos un timeout para que se muestre la animación del leave
        setTimeout(() => {
          this.showSpinner = isLoading;
        }, 200);
      else this.showSpinner = isLoading;
    });
  }

  /**@description obtenemos el idioma del dispositivo */
  async setDeviceLanguage() {
    try {
      const { value } = await Device.getLanguageCode();
      console.log('Idioma del dispositivo:', value);
      /** @description en este caso si el idioma es 'en' o 'es', se setea si no queda por defecto 'es' */
      const lang = value.match(/en|es/) ? value : 'es';
      this.translate.use(lang);
    } catch (error) {
      console.error('Error al obtener el idioma del dispositivo', error);
      /** @description Si no se logra obtener el idioma por defecto queda seteado 'es' */
      this.translate.use('es');
    }
  }
}
