import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-color-editor',
  templateUrl: './color-editor.component.html',
  styleUrls: ['./color-editor.component.css']
})
export class ColorEditorComponent implements OnInit {

  constructor(private gameServis: GameService) { }

  ngOnInit(): void {
  }

  private normlize(num: string): number {
    let val = Math.round(Number(num));
    return Math.min(Math.max(0, val), 255);
}

  setRed(value: string){
    this.gameServis.setRed(this.normlize(value));
  }

  setGreen(value: string){
    this.gameServis.setGreen(this.normlize(value));
  }

  setBlue(value: string){
    this.gameServis.setBlue(this.normlize(value));
  }
}
