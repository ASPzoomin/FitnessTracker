import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timervalue: any;
  constructor() { }

  ngOnInit() {
    this.timervalue = setInterval(() =>{
      this.progress = this.progress+15;
      if(this.progress>=100) {
        clearInterval(this.timervalue);
      }
    },1000)
  }

  onStop() {
    clearInterval(this.timervalue);
  }

}
