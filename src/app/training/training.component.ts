import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  CurrentTraining = false;
  constructor() { }

  ngOnInit() {
  }
  currentTraining(value) {
    this.CurrentTraining = value;
  }
}
