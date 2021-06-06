import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from 'src/models/joke.model';
import { distinct, filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly baseUrl: string = 'http://localhost:3000';
  jokesType$!: Promise<string[]>;

  constructor(private http: HttpClient) {
    this.jokesType$ = this.getTypes();
  }

  getJoke(keyword: string, index: number): Promise<Joke> {
    const url = `${this.baseUrl}/jokes`;

    let params = (new HttpParams()).set('q', keyword).set('_start', index).set('_limit', 1)

    return this.http
      .get<Joke[]>(url, { params })
      .pipe(
        map(list => list[0])
      ).toPromise();
  }

  getJokesCount(keyword: string): Promise<number> {
    const url = `${this.baseUrl}/jokes`;
    let params = (new HttpParams()).set('q', keyword);

    return this.http
            .get<Joke[]>(url,{params})
            .pipe(map(list=>list.length))
            .toPromise();
  }

  getJokesCountByType(keyword: string, type: string): Promise<number> {
    const url = `${this.baseUrl}/jokes`;

      return this.http
      .get<Joke[]>(url)
      .pipe(
        map(jokes => jokes.filter(joke => joke.type === type)),
        map(jokes => jokes.filter(joke => joke.setup.includes(keyword))),
        map(list => list.length))
        .toPromise();
  }

  getJokeByType(keyword: string, index: number, type: string): Promise<Joke> {
    const url = `${this.baseUrl}/jokes`;
    let params = (new HttpParams()).set('q', keyword).set('_start', index).set('_limit', 1)?.set('type', type);

    return this.http
      .get<Joke[]>(url, { params })
      .pipe(
        map(list => list[0])
      ).toPromise();
  }

  getTypes(): Promise<string[]> {
    const url = `${this.baseUrl}/jokes`;
    return this.http
      .get<Joke[]>(url)
      .pipe(map(joke => [...new Set(joke.map(item => item.type))])
      ).toPromise();
  }
}
