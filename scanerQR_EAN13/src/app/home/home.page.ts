import { Component } from '@angular/core';
import { BarcodeScannerOptions,BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})

export class HomePage {

  IDPRODUCTO: string;
  IDPRODUCTO2: number;
  IDPRODUCTO3: string;
  unidades: any;
  encodeData: any;
  scannedData: {};
  boolMuestraQR = false;
  boolMuestraBarCode = false;


  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner)
              {
              this.encodeData = "";
              }

  eventoQR(){

    this.barcodeScannerOptions = {
      formats : "QR_CODE",//EAN13
      showTorchButton: true,
      showFlipCameraButton: true
    };

      this.barcodeScanner.scan(this.barcodeScannerOptions).then(barcodeData => {

        this.scannedData = barcodeData;
        this.IDPRODUCTO = this.scannedData["text"];
        this.IDPRODUCTO2 = this.IDPRODUCTO.lastIndexOf("=");//
        this.IDPRODUCTO3 = this.IDPRODUCTO.substring(this.IDPRODUCTO2+1);
        alert(this.IDPRODUCTO);
        this.unidades = "5";

       }).catch(err => {
         alert(err);
       });

  }

  eventoBarras()
  {

    this.barcodeScannerOptions = {
      formats : "EAN_13",
      showTorchButton: true,
      showFlipCameraButton: true
    };
    this.barcodeScanner.scan(this.barcodeScannerOptions).then(barcodeData => {

      this.scannedData = barcodeData;
      this.IDPRODUCTO = this.scannedData["text"];
      this.IDPRODUCTO2 = this.IDPRODUCTO.lastIndexOf("=");//
      this.IDPRODUCTO3 = this.IDPRODUCTO.substring(this.IDPRODUCTO2+1);
      alert(this.IDPRODUCTO);
      this.unidades = "5";

     }).catch(err => {
       alert(err);
     });
  }
}
