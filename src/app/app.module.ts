import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelect } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MatSelectModule } from '@angular/material/select';
=======
>>>>>>> 5f084f96c1b32222f442e17381f152f772a25158


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
<<<<<<< HEAD
    FormsModule,
    MatSelectModule
=======
    FormsModule
>>>>>>> 5f084f96c1b32222f442e17381f152f772a25158
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
