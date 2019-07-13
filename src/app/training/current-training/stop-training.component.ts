import { Component } from '@angular/core';
@Component({
    selector: "app-stop-training",
    template:  `<h1>Are you sure ?</h1>
                <mat-dialog-actions>
                    <button mat-button [mat-dialog-close]="true">Yes</button>
                    <button mat-button [mat-dialog-close]="true">No</button>
                </mat-dialog-actions>`
})
export class StopTrainingComponent {}