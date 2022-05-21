import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product:any
  constructor(private Ps:ProductService) { }

  ngOnInit(): void {
    this.getall()
  }
getall(){
  this.Ps.getproduct().subscribe((res)=>{
    this.product=res
  })
}
}
