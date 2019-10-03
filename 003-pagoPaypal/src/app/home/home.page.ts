import { Component } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage
{
  paypal: any;

  constructor(paypal: PayPal)
  {

    this.paypal = paypal;

    this.pagar();

  }


  pagar()
  {
    this.paypal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'ARMeTA1mG2osqidoYlvoklSEOreoWPq6eivaDILc7B_fc3IVLkvxmUPQptVJWWbx2F3MJePqZ669Y2Gh'
    }).then(() =>
    {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.paypal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() =>
      {
        let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
        this.paypal.renderSinglePaymentUI(payment).then(() =>
        {
          // Successfully paid

          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
            }, () =>
          {
            alert("Se ha prodocido un error, No se ha realizado ningun cambio");
        });
      }, () =>
      {
          alert("Se ha producido un error configurando Paypal");
      });
    }, () =>
      {
        alert("Se ha producido un error inizializando Paypal");
    });
  }
}