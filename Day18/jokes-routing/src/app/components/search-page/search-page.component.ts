import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  jokeType$!: Promise<string[]>;
  selectedType: string = '';
  constructor(private data: DataService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.jokeType$ = this.data.getTypes();
  }

  searchJoke(value: string) {
    this.router.navigate(['jokes', value, 0]);
  }

  searcgJokeByType(value: string, type: string) {
    if (type === '') {
      this.router.navigate(['jokes', value, 0]);
    } else {
      this.router.navigate(['jokes', type, value, 0]);

    }

  }
}
