import { NgModule } from '@angular/core';
import { MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
     MatDatepickerModule, 
     MatNativeDateModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule],
    exports: [MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule]
})
export class MaterialModule {}
