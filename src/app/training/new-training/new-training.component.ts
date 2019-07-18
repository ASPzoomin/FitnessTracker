import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
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

  onGoingTraining(form:NgForm) {
    this.training.startExercise(form.value.exercise);
  }
}
