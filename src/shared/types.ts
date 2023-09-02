export enum SelectedPage {
    Home = "home",
    NewArrivals = "newarrivals",
    Favorite = "favorite",
    Contact = "contact",
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