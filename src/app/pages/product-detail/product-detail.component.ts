import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product:any
id:any
  constructor(private Ps:ProductService,private activerouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.product={
      name:"",
      price:0,
      image:"",
      desc:""
    }
    this.id=this.activerouter.snapshot.params["id"]
    if(this.id){
      this.Ps.getoneproduct(this.id).subscribe((res)=>{
        this.product=res
      })
    }
     
    }
  

}
