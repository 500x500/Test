import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PersonComponent } from './person/person.component';
import { CartComponent } from './cart/cart.component';
import {MatTableModule} from '@angular/material/table';
import {AppRoutingModule} from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {CdkTableModule} from '@angular/cdk/table';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CartService} from './cart.service';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgxMaskModule} from 'ngx-mask';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PersonComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    CdkTableModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(),
    MatOptionModule,
    MatSelectModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
