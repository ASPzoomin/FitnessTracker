import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() TrainingStarted = new EventEmitter();
  exercises:Exercise[] = [];

  constructor(private training: TrainingService) { }

  ngOnInit() {
    this.exercises = this.training.getAvailableExercises();
    console.log(this.exercises);
  }

  onGoingTraining() {
    this.TrainingStarted.emit(true);
  }
  

}
