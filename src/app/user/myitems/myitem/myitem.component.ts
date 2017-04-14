import { Component, OnInit,Input } from '@angular/core';
import { Order } from "../../../models";
import { Router} from '@angular/router'

@Component({
  selector: 'app-myitem',
  templateUrl: './myitem.component.html',
  styleUrls: ['./myitem.component.css']
})
export class MyitemComponent implements OnInit {

 @Input() order:Order;

  constructor(private router:Router){}
  
  onSelect() {
    this.router.navigate(['/user/myitems/', this.order.id])
  }

  ngOnInit() {
  }

}
