import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './layouts/home-component/home-component.component';
import { AdminComponentComponent } from './layouts/admin-component/admin-component.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductManageComponent } from './pages/product-manage/product-manage.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AdminComponentComponent,
    ProductComponent,
    ProductManageComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
