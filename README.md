# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



# Error Need to find Error core

uild at: 2023-01-26T11:46:24.426Z - Hash: ff028a5b40946e63 - Time: 8288ms

Warning: src/app/components/product/product-read2/product-read2.component.html:27:27 - warning NG8107: The left side of this optional chain operation does not include 'null' or 'undefined' in its type, therefore the '?.' operator can be replaced with the '.' operator.

27     [length]="dataSource?.data?.length"
                             ~~~~

  src/app/components/product/product-read2/product-read2.component.ts:10:16
    10   templateUrl: "./product-read2.component.html",
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component ProductRead2Component.




Error: src/app/components/product/product-create/product-create.component.ts:14:5 - error TS2322: Type 'null' is not assignable to type 'number'.

14     price: null,
       ~~~~~

  src/app/components/product/product.model.ts:4:3
    4   price: number;
        ~~~~~
    The expected type comes from property 'price' which is declared here on type 'Product'


Error: src/app/components/product/product-read2/product-read2-datasource.ts:105:27 - error TS18048: 'a.id' is possibly 'undefined'.

105           return compare(+a.id, +b.id, isAsc);
                              ~~~~


Error: src/app/components/product/product-read2/product-read2-datasource.ts:105:34 - error TS18048: 'b.id' is possibly 'undefined'.

105           return compare(+a.id, +b.id, isAsc);
                                     ~~~~




** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


✖ Failed to compile.
