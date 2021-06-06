import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { map, switchMap } from 'rxjs/operators';
import { combineLatest, from, Observable } from 'rxjs';
import { Joke } from 'src/models/joke.model';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css']
})
export class JokePageComponent implements OnInit {

  keyword!: string;
  index!: number;
  type!: string
  joke$!: Observable<Joke>;
  index$!: Observable<[index: number, keyword: string, type: string]>
  hasNext$!: Observable<boolean>;
  hasPrev$!: Observable<boolean>;
  totalCount$!: Promise<number>

  constructor(private data: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.keyword = this.route.snapshot.params['keyword'];
    this.index = this.route.snapshot.params['index'];
    this.type = this.route.snapshot.params['type'];

    this.index$ = this.route.params.pipe(
      map(prms => [Number(prms['index']), prms['keyword'], prms['type']])
    );


    if (this.type !== undefined) {
      this.joke$ = this.index$.pipe(
        switchMap(prms => from(this.data.getJokeByType(prms[1], prms[0], prms[2])))
      );
      this.totalCount$ = this.data.getJokesCountByType(this.keyword, this.type);
    } else {
      console.log("bla");
      this.joke$ = this.index$.pipe(
        switchMap(prms => from(this.data.getJoke(prms[1], prms[0])))
      );
      this.totalCount$ = this.data.getJokesCount(this.keyword);
      console.log(this.totalCount$);

    }

    this.hasPrev$ = this.index$.pipe(
      map(prms => prms[0] > 0)
    );


    this.hasNext$ = combineLatest([from(this.totalCount$), this.index$]).pipe(
      map(res => res[1][0] < res[0] - 1)
    );

    console.log(this.hasNext$);

  }


  gotoNext() {
    this.index = Number(this.route.snapshot.params['index']);
    console.log(this.hasNext$);
    if (this.type !== undefined) {
      this.router.navigate(['jokes', this.type, this.keyword, this.index + 1]);
    } else {
      this.router.navigate(['jokes', this.keyword, this.index + 1]);
    }
  }

  gotoPrev() {
    this.index = Number(this.route.snapshot.params['index']);
    if (this.type !== undefined) {
      this.router.navigate(['jokes', this.type, this.keyword, this.index - 1]);
    } else {
      this.router.navigate(['jokes', this.keyword, this.index - 1]);

    }
  }

  gotoSearch() {
    this.router.navigate(['search']);
  }

}