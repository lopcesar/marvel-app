import { environment } from '@/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Md5 } from 'ts-md5';
import { handleError } from '@/app/core/tools/handle-error.tools';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  //? URL api de marvel
  private marvelUrl = environment.apiUrl;

  private readonly http = inject(HttpClient);

  getCharacters() {
    const timeStamp = new Date().getTime();
    const hash = Md5.hashStr(`${timeStamp}${environment.privateKey}${environment.publicKey}`);

    return this.http.get(`${this.marvelUrl}/characters`, {
      params: {
        ts: timeStamp,
        apikey: environment.publicKey,
        hash: hash.toString(),
        limit: 20,
      },
    }).pipe(
      catchError((error) => handleError(error)),
      map((response: any) => {
        return response.data.results;
      })
    );
  }
}
