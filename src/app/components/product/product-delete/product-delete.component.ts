import { Router } from "@angular/router";
import { ProductService } from "./../product.service";
import { Product } from "./../product.model";
import { Component } from "@angular/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent {
  product: Product;

  constructor(private productService: ProductService, private router: Router) {
    const id = "1";
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {}

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
