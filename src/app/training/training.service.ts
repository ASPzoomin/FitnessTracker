import { Exercise } from './exercise.model';

export class TrainingService {
    private availableExercises: Exercise[]=[
        {id:'crunches',name:'Crunches',duration:30,calories:8},
        {id:'pushups',name:'Pushups',duration:20,calories:28},
        {id:'touchtoes',name:'Touchtoes',duration:25,calories:18},
    ];

    getAvailableExercises() {
        return this.availableExercises;
    }
}