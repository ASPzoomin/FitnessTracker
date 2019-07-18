import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';

export class TrainingService {
    exerciseChanged = new Subject<Exercise>();
    private availableExercises: Exercise[]=[
        {id:'crunches',name:'Crunches',duration:30,calories:8},
        {id:'pushups',name:'Pushups',duration:20,calories:28},
        {id:'touchtoes',name:'Touchtoes',duration:25,calories:18},
    ];
    private runningExercise:Exercise;

    getAvailableExercises() {
        return this.availableExercises;
    }

    startExercise(selectedExercise: string) {
        this.runningExercise = this.availableExercises.find(ex =>ex.id === selectedExercise);
        this.exerciseChanged.next({...this.runningExercise});
    }
}