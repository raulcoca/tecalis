import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
}
@Injectable({ providedIn: 'root' })
export class APIService {
  private readonly _http = inject(HttpClient);

  /**
   * Performs a GET request to retrieve multiple resources
   * @param {string} endpoint - The API endpoint
   * @param {HttpParams} [params] - Optional query parameters
   * @returns {Observable<T>} An observable of the requested resources
   */
  public get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this._http
      .get<T>(endpoint, this._createOptions({ params }))
      .pipe(catchError(this._handleError));
  }

  private _createOptions(options?: HttpOptions): HttpOptions {
    return {
      headers: options?.headers,
      params: options?.params,
    };
  }

  private _handleError(error: unknown) {
    return throwError(() => error);
  }
}
