import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input()
  caption: string = 'Pop Quiz App';
  
  @Input()
  color: string = 'yellow';
  
  ngOnInit(): void {
  }

}

