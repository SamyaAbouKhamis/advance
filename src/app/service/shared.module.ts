import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';



const modules = [
  CommonModule,
  TranslateModule,
  FormsModule,
];
@NgModule({
 
  imports: modules,
  exports:[modules]

})
export class SharedModule {}
