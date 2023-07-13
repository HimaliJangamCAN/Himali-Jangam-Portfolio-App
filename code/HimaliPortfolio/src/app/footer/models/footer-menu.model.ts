import { MenuSubLinkModel } from "./menu-sublink.model";

export interface FooterMenuModel {
  menuLabel: string;
  menuURL: string;
  menuSubLinks: MenuSubLinkModel[];
}
