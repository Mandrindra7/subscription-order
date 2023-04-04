import { Component } from '@angular/core';
import {
  Validators,
  FormBuilder,
} from '@angular/forms';

interface subscriptionPlan {
  durationMonths: number;
  priceUsdperGb: number;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  subscriptionPlans: subscriptionPlan[] = [
    {
      durationMonths: 3,
      priceUsdperGb: 3,
    },
    {
      durationMonths: 6,
      priceUsdperGb: 2.5,
    },
    {
      durationMonths: 12,
      priceUsdperGb: 2,
    },
  ];

  params = this._formBuilder.group({
    price: [2, Validators.required],
    amountGb: [5, Validators.required],
    upFront: [false, Validators.required]
  });
  payment = this._formBuilder.group({
    cardNumber: ['', Validators.required],
    expirationDate: ['', Validators.required],
    cardCode:['', Validators.required]
  });
  confirmation = this._formBuilder.group({
    email: ['', Validators.required],
    check: [false, Validators.required],

  });
  isLinear = false;
  totalPrice : number | null = null;
  priceperGb: string = '';

  constructor(private _formBuilder: FormBuilder) {
  }


  public validSubscription () {
    const { price , amountGb, upFront } = this.params.value
    if(price && amountGb){
      this.totalPrice = price * amountGb
      this.priceperGb = `${price}/GB`
       console.log(upFront)
      if(upFront)
        this.totalPrice = this.totalPrice / 10 ;
    }
   
    
  }
}
