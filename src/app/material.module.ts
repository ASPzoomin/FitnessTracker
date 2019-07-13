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
     MatTabsModule,
     MatCardModule,
     MatSelectModule,
     MatProgressSpinnerModule} from '@angular/material';

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
                MatCardModule,
                MatSelectModule,
                MatProgressSpinnerModule,
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
               MatCardModule,
               MatSelectModule,
               MatProgressSpinnerModule,
               MatListModule]
})
export class MaterialModule {}
