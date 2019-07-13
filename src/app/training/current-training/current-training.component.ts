import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';
@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timervalue: any;
  constructor( private dialog: MatDialog) { }

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
    const dialogRef=this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}
