export class Shirt {
  id: string;
  name:string;
  color:string;
  texture:string;
  style:string;
  collar:string;
  sleeve:string;
  imageURL:string;
}
export class User {
  email:string;
  name:string;
  surname:string;
  password:string;
  neck:number;
  chest:number;
  thigh:number;
  biceps:number;
  wrist:number;
  cart:Order[];
  items:Order[];
}
export class Order {
  id:number;
  date:Date;
  neck:number;
  chest:number;
  thigh:number;
  biceps:number;
  wrist:number;
  shirt:Shirt;
}


