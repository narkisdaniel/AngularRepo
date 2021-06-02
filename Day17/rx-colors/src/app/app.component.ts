import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Rgb } from './models/types';
import { GameService } from './services/game.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myColor$!: Observable<string>;
  compColor$!: Observable<string>;
  success$!: Observable<boolean>;

  constructor(private gameService: GameService) { }

  private rgbToCss(rgb: Rgb) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
  }

  ngOnInit(): void {
    let r$ = this.gameService.getRed();
    let g$ = this.gameService.getGreen();
    let b$ = this.gameService.getBlue();

    this.myColor$ = combineLatest([r$, g$, b$]).pipe(
      map(tpl => this.rgbToCss(tpl)));

    this.compColor$ = this.gameService.getComputerColor().pipe(
      map(rgb => this.rgbToCss(rgb)));

    this.success$ = combineLatest([this.myColor$, this.compColor$]).pipe(
      map(tpl => tpl[0] === tpl[1])
    );
  }

  randomize() {
    this.gameService.randomizeColor();
  }
}
