import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { HttpClientModule} from "@angular/common/http";
import { UserService } from './service/user.service';
import { BodyComponent } from './components/body/body.component';
import { ImgIntComponent } from './components/image_int/img_int.component';

@NgModule({
  declarations: [
    BodyComponent,
    ImgIntComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [
    UserService,
    DatePipe
  ],
  exports: [
    BodyComponent
  ]
})
export class CoreModule {

}
