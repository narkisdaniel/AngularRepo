import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rgb } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly initColor: number = 255;
  private red$ = new BehaviorSubject(this.initColor);
  private green$ = new BehaviorSubject(this.initColor);
  private blue$ = new BehaviorSubject(this.initColor);
  private curColor$ = new BehaviorSubject<Rgb>([this.initColor, this.initColor, this.initColor]);
  constructor() { }

  getRed(): Observable<number> {
    return this.red$.asObservable();
  }

  getGreen(): Observable<number> {
    return this.green$.asObservable();
  }
  getBlue(): Observable<number> {
    return this.blue$.asObservable();
  }

  getComputerColor(): Observable<Rgb> {
    return this.curColor$.asObservable();
  }

  setRed(value: number) {
    this.red$.next(value);
  }

  setGreen(value: number) {
    this.green$.next(value);
  }

  setBlue(value: number) {
    this.blue$.next(value);
  }

  private rndByte(): number {
    return Math.floor(Math.random() * 256);
  }

  randomizeColor() {
    let rndColor: Rgb = [this.rndByte(), this.rndByte(), this.rndByte()];
    this.curColor$.next(rndColor);
  }

}