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
     MatListModule,
     MatTabsModule} from '@angular/material';

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
                MatTabsModule,
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
               MatTabsModule,
               MatListModule]
})
export class MaterialModule {}
