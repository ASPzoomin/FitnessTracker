import { NgModule } from '@angular/core';
import { MatButtonModule, 
     MatFormFieldModule, 
     MatInputModule,
     MatDatepickerModule, 
     MatNativeDateModule,
     MatCheckbox,   
     MatCheckboxModule,
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule} from '@angular/material';

@NgModule({
    imports: [  MatButtonModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatCheckboxModule,
                MatSidenavModule,
                MatToolbarModule],
    exports: [ MatButtonModule,
               MatFormFieldModule,
               MatInputModule,
               MatIconModule,
               MatDatepickerModule,
               MatNativeDateModule,
               MatCheckboxModule,
               MatSidenavModule,
               MatToolbarModule]
})
export class MaterialModule {}
