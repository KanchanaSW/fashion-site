export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourClasses",
    ContactUs = "contactUs",
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