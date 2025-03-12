import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export const handleError = (err: any) => {
  if (err instanceof HttpErrorResponse) return throwError(() => err);
  else if (err instanceof Error) return throwError(() => err);
  else return throwError(() => new Error(err));
};