import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Name, User } from '../../models/user.interface';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  user!: User;
  iconUserFill = false;
  iconMailFill = false;
  iconBirthFill = false;
  iconPinFill = false;
  iconTelFill = false;
  iconKeyFill = false;
  infoActive: string | null = '';
  dinamycTitle = '';
  userPictues = 'http://www.pokemonmillennium.net/wp-content/uploads/2016/04/Prodotti-Pok%C3%A9mon-Center-Sostituto-maxi-peluche.jpg'
  constructor(private userService: UserService, private datepipe: DatePipe) { }

  ngOnInit(): void {

    this.userService.getUsers().pipe(
      tap(users => {
        this.user = users.results[0];
        this.setInfoAndChangIcon('iconUserFill', true);
        this.userPictues = this.user.picture.large;
        console.log('User: ', this.user);
      })
    ).subscribe();
  }

  addFill(obj: any): any {
    console.log('Cosa: ', obj);
  }

  setInfoAndChangIcon(iconId: string, setTrueFalse: boolean): any {
    this.clearAll();
    switch (iconId) {
      case 'iconUserFill':
        this.iconUserFill = setTrueFalse;
        this.dinamycTitle = 'Hi, My name is';
        this.infoActive = this.user.name.first + ' ' + this.user.name.last;
        break;
      case 'iconMailFill':
        this.iconMailFill = setTrueFalse;
        this.dinamycTitle = 'My email address is';
        this.infoActive =  this.user.email;
        break;
      case 'iconBirthFill':
        this.iconBirthFill = setTrueFalse;
        this.dinamycTitle = 'My birthday is';
        this.infoActive = this.datepipe.transform(this.user.dob.date, 'dd/MM/yyyy');
        break;
      case 'iconPinFill':
        this.iconPinFill = setTrueFalse;
        this.dinamycTitle = 'My address is';
        this.infoActive = this.user.location.street.number + ' ' + this.user.location.street.name;
        break;
      case 'iconTelFill':
        this.iconTelFill = setTrueFalse;
        this.dinamycTitle =  'My phone number is';
        this.infoActive = this.user.cell;
        break;
      case 'iconKeyFill':
        this.iconKeyFill = setTrueFalse;
        this.dinamycTitle = 'My password is';
        this.infoActive = this.user.login.password;
        break;

    }
  }

  clearAll(){
    this.iconUserFill = false;
    this.iconMailFill = false;
    this.iconBirthFill = false;
    this.iconPinFill = false;
    this.iconTelFill = false;
    this.iconKeyFill = false;
  }

}
