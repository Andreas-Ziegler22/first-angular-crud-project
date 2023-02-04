import { HeaderData } from "./header-data.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  HeaderData = new BehaviorSubject<HeaderData>({
    title: "Home",
    icon: "home",
    routeUrl: "",
  });

  constructor() {}
}
