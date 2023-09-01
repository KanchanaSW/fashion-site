export enum SelectedPage {
    Catalogue = "catalogue",
    Fashion = "fashion",
    Favorite = "favorite",
    Lifestyle = "lifestyle",
  }

  export interface BenefitType {
    icon:JSX.Element;
    title:string;
    description:string;
  }

  export interface ClassType{
    name:string;
    description:string;
    image:string;
  }