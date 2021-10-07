import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-int',
  templateUrl: './img_int.component.html',
  styleUrls: ['./img_int.component.scss']
})
export class ImgIntComponent implements OnInit {

  @Input() srcImage: string = '';

  constructor() { }

  ngOnInit(): void {


  }

}
