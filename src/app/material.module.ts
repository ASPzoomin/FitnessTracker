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
     MatIconModule,
     MatListModule} from '@angular/material';

@NgModule({
    imports: [  MatButtonModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatCheckboxModule,
                MatSidenavModule,
                MatToolbarModule,
                MatListModule],
    exports: [ MatButtonModule,
               MatFormFieldModule,
               MatInputModule,
               MatIconModule,
               MatDatepickerModule,
               MatNativeDateModule,
               MatCheckboxModule,
               MatSidenavModule,
               MatToolbarModule,
               MatListModule]
})
export class MaterialModule {}
