import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  CurrentTraining = false;
  onExit = true;
  constructor() { }

  ngOnInit() {
  }
  currentTraining(value) {
    this.CurrentTraining = value;
  }
  onYes(e) {
    this.onExit=e;
  }
}
