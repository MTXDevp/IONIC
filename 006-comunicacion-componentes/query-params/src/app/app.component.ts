import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
  /**
   * IMPORTANTE : APP-ROUTING-MODULE MODIFICADO (RELOAD)
   */
export class AppComponent
{
  valueTo2: any;
  valueTo3: any;
  valueTo4: any;
  valueTo5: any;

  paginaDestino: any;

  constructor(
    private platform           : Platform          ,
    private splashScreen       : SplashScreen      ,
    private statusBar          : StatusBar         ,
    private menu               : MenuController    ,
    private route              : Router            )
  {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  /**
   * @param event evento en el cual dependiendo del boton pulado
   * asignaremos una pagina de destino y un valor para pasar
   */
  eventFiltro(event)
  {
    switch (event.target.id)
    {
      case "botonFiltro2":
        this.paginaDestino = "/pagina2";
        this.openTemplateWithParams(this.paginaDestino, this.valueTo2);
        break;

      case "botonFiltro3":
        this.paginaDestino = "/pagina3";
        this.openTemplateWithParams(this.paginaDestino, this.valueTo3);
        break;

      case "botonFiltro4":
          this.paginaDestino = "/pagina4";
          this.openTemplateWithParams(this.paginaDestino, this.valueTo4);
        break;

      default:
          console.log("idk");
          break;
    }
  }

  /**
   *
   * @param pagDestino Pagina a la que navegaremos a traves del router
   * @param body Contenido transferido
   */
  openTemplateWithParams(pagDestino : string, body : string)
  {
    console.log("enviando buble a " + pagDestino);
    let navigationExtras: NavigationExtras = {
      state:
      {
        head: pagDestino,
        body : body
      }
    };
    this.route.navigate([pagDestino], navigationExtras);
  }

   /**
   * Metodo que despliega el menu lateral
   */
  OpenLeftMenu()
  {
    this.menu.enable(true, 'LeftMenu');
    this.menu.open  (      'LeftMenu');
  }

}
