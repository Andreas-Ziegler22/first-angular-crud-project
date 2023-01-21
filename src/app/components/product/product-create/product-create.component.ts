import { Product } from "./../product.model";
import { ProductService } from "./../product.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent {
  product: Product = {
    name: "product-test",
    price: 199.99,
  };

  constructor(private productService: ProductService, private router: Router) {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("success created!!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
