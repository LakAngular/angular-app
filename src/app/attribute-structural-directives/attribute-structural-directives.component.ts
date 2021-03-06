// list the mobile prod and (+) increase the qty and if qty >5 change the bg color using [ngStyle]
// decrease the qty (-) and delete the particular record if qty<=1 using splice method
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-structural-directives',
  templateUrl: './attribute-structural-directives.component.html',
  styleUrls: ['./attribute-structural-directives.component.css']
})
export class AttributeStructuralDirectivesComponent implements OnInit {
mobileProd = [{
  userID: 1,
  mobieName: 'Nokia 350',
  productBrand: 'Nokia',
  releaseDate: 'dec 2009',
  qty: 4,
  price: 4500
},
{
  userID: 2,
  mobieName: 'Samsung galaxy 8',
  productBrand: 'Samsung',
  releaseDate: 'dec 20014',
  qty: 10,
  price: 25000
},
{
  userID: 3,
  mobieName: 'iPhone 8',
  productBrand: 'Apple',
  releaseDate: 'dec 2014',
  qty: 30,
  price: 45000
},
{
  userID: 4,
  mobieName: 'Nokia Lumina',
  productBrand: 'Nokia',
  releaseDate: 'dec 2015',
  qty: 40,
  price: 4500
},
{
  userID: 5,
  mobieName: 'Samsung galaxy 9',
  productBrand: 'Samsung',
  releaseDate: 'dec 2016',
  qty:1,
  price: 50000
},
{
  userID: 6,
  mobieName: 'Samsung Notes',
  productBrand: 'Samsung',
  releaseDate: 'dec 2017',
  qty: 2,
  price: 70000
},
{
  userID: 7,
  mobieName: 'iPhone',
  productBrand: 'Apple',
  releaseDate: 'dec 2018',
  qty: 1,
  price: 85000
},
];

  constructor() { }

  ngOnInit() {
  }

  // Decrease the qty if qty >=1 and delete the record if qty < 1
  deletelist(i) {
    if (this.mobileProd[i].qty >= 1) {
      this.mobileProd[i].qty--;
    }
    if (this.mobileProd[i].qty < 1) {
    this.mobileProd.splice(i, 1);
  }
  }
  // Increase the qty
  increaseQty(i) {
   this.mobileProd[i].qty++;
  }
}
