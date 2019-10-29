import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tool} from '../models/tool';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  private url = `http://localhost:3000/tools`;

  constructor(private http: HttpClient) {}

  find(params?: any ): Observable<Array<Tool>> {
    if (params) {
      return this.http.get(`${this.url}`, {params})
        .pipe(map(response => response as Array<Tool>));
    }
    return this.http.get(`${this.url}`)
      .pipe(map(response => response as Array<Tool>));
  }

  save(tool: Tool) {
    return this.http.post<Tool>(`${this.url}`, tool);
  }

  delete(id: number) {
    return this.http.delete<number>(`${this.url}/${id}`);
  }

}
