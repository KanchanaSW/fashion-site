export enum SelectedPage {
    Home = "home",
    NewArrivals = "newarrivals",
    Favorite = "favorite",
    Contact = "Contact",
  }

  export interface NewArrivalType {
    icon:string;
    title:string;
    description:string;
  }

  export interface ClassType{
    name:string;
    description:string;
    image:string;
  }