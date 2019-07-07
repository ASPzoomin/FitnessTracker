import { NgModule } from '@angular/core';
import { MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
     MatDatepickerModule, 
     MatNativeDateModule,
     MatCheckbox,
     MatCheckboxModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule],
    exports: [MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule]
})
export class MaterialModule {}
