import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

product :any
  constructor(private Ps:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.product={
      name:"",
      price:0,
      image:"",
      desc:""
    }
  }
  onsubmit(){
    this.Ps.addproduct(this.product).subscribe(res=>{
      this.router.navigate(["/admin"])
    })
    
  }

}
