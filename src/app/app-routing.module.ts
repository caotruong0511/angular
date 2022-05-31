import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponentComponent } from './layouts/admin-component/admin-component.component';
import { HomeComponentComponent } from './layouts/home-component/home-component.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductManageComponent } from './pages/product-manage/product-manage.component';
import { ProductComponent } from './pages/product/product.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent,children :[
    { path: 'product', component: ProductComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    {path:'signup', component:SignupComponent}
    

  ] },
  { path: 'admin', component: AdminComponentComponent,children:[
    {path:'',component: ProductManageComponent},
    {path:'product',component: ProductManageComponent},
    {path:'product/add',component: ProductAddComponent},
    {path:'product/update/:id',component: ProductEditComponent},
  ] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
