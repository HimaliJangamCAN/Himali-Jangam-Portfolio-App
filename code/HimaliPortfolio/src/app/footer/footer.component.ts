import { Component } from '@angular/core';
import { FooterIconModel } from './models/footer-icon.model';
import { FooterMenuModel } from './models/footer-menu.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  footerIconList: FooterIconModel[] = [
    {
      iconLabel: "+1 905 462 8167",
      iconPath: "../../assets/icons/Ycall.png",
      iconURL: "tel:+9054628167"
    },
    {
      iconLabel: "jangam.himali@gmail.com",
      iconPath: "../../assets/icons/Yemail.png",
      iconURL: "mailto:jangam.himali@gmail.com"
    },
    {
      iconLabel: "Toronto ON, CA",
      iconPath: "../../assets/icons/Ylocation.png",
      iconURL: "https://goo.gl/maps/vmzGLspKk7hmHNPb6"
    }
  ];

  footerMenuList: FooterMenuModel[] = [
    {
      menuLabel: "Projects",
      menuURL: "/see-some-briliant-work",
      menuSubLinks: [
        {subMenuLabel: "GroEasy", subMenuURL: "/GroEasy"},
        {subMenuLabel: "AudiblePDFs", subMenuURL: "/AudiblePDFs"},
        {subMenuLabel: "NIFGuide", subMenuURL: "/NIFGuide"},
      ]
    },
    {
      menuLabel: "Experiences",
      menuURL: "/see-some-briliant-exp",
      menuSubLinks: [
        {subMenuLabel: "TD Bank", subMenuURL: "/TD"},
        {subMenuLabel: "Infosys", subMenuURL: "/Infosys"},
        {subMenuLabel: "eClerx", subMenuURL: "/eClerx"},
        {subMenuLabel: "Y&A", subMenuURL: "/YA"},
        {subMenuLabel: "Pretty Geeky", subMenuURL: "/TPG"},
      ]
    },
    {
      menuLabel: "Codeventures",
      menuURL: "/see-some-briliant-blogs",
      menuSubLinks: [
        {subMenuLabel: "Angular", subMenuURL: "/Angular"},
        {subMenuLabel: "React", subMenuURL: "/React"},
        {subMenuLabel: "Node Js", subMenuURL: "/Node"},
        {subMenuLabel: "Springboot", subMenuURL: "/Springboot"},
        {subMenuLabel: "Python", subMenuURL: "/Python"},
      ]
    },
    {
      menuLabel: "Learn",
      menuURL: "/book-some-briliant-classes",
      menuSubLinks: [
        {subMenuLabel: "Angular", subMenuURL: "/book-a-class/Angular"},
        {subMenuLabel: "Python", subMenuURL: "/book-a-class/Python"},
        {subMenuLabel: "HTML/CSS", subMenuURL: "/book-a-class/HTML"},
      ]
    },
    // {
    //   menuLabel: "BLOG",
    //   menuURL: "/see-some-briliant-thoughts"
    // }
  ];

}
