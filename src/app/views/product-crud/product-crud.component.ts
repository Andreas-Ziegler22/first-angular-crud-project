import { HeaderService } from "./../../components/template/header/header.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent {
  constructor(private router: Router, headerService: HeaderService) {
    headerService.headerData = {
      title: "product registration",
      icon: "storefront",
      routeUrl: "/product",
    };
  }
  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
