import { Component } from '@angular/core';
import {HeaderIconModel} from './models/header-icon.model';
import {HeaderMenuModel} from './models/header-menu.model';
import { ModalCreationService } from '../shared/services/modal-creation.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( public modalCreationService: ModalCreationService) {

  }

  headerIconList: HeaderIconModel[] = [
    {
      iconLabel: "call Himali",
      iconPath: "../../assets/icons/Ycall.png",
      iconURL: "tel:+9054628167"
    },
    {
      iconLabel: "email Himali",
      iconPath: "../../assets/icons/Yemail.png",
      iconURL: "mailto:jangam.himali@gmail.com"
    },
    {
      iconLabel: "Himali\'s current city",
      iconPath: "../../assets/icons/Ylocation.png",
      iconURL: "https://goo.gl/maps/vmzGLspKk7hmHNPb6"
    }
  ];

  headerMenuList: HeaderMenuModel[] = [
    {
      menuLabel: "WORK",
      menuURL: "/see-some-briliant-work"
    }
    // {
    //   menuLabel: "BLOG",
    //   menuURL: "/see-some-briliant-thoughts"
    // }
  ];
}
