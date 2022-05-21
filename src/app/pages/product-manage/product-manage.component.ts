import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css'],
})
export class ProductManageComponent implements OnInit {
  products:any
  constructor(private Ps: ProductService) {}

  ngOnInit(): void {
 this.getall()
  }
  getall(){
    this.Ps.getproduct().subscribe((res) => {
      this.products=res
    })
  }
  ondelete(id:number|string){
   this.Ps.removeproduct(id).subscribe(res=>{
     this.getall()
   })
  }
}
