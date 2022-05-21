import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product :any
  id:any
  constructor(private Ps:ProductService,private router:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.product={
      name:"",
      price:0,
      image:"",
      desc:""
    }
    this.id=this.activeroute.snapshot.params["id"]
    if(this.id){
      this.Ps.getoneproduct(this.id).subscribe((res)=>
      this.product=res)
    }

  }
  onsubmit(){
    this.Ps.updateproduct(this.id,this.product).subscribe(res=>{
      this.router.navigate(["/admin"])
    })
    
  }
}
