import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var L : any;

@Component(
    {
        selector    : 'here-map',
        templateUrl : './here-map.component.html'
    })


//Comunicacion PADRE HIJO --> Declaramos Input e el hijo
// y desde el padre (html) usaremos esos inputs como propiedades en
//la etiqueta : 
//ejemplo ( <here-map appId="g4fkdIt0kputwbX2jR5n"
//           appCode="lBPlcbN7j9EBl5jYceV4NA"
//            lat="37.7397"
//            lng="-121.4252"></here-map>)

export class HereMapComponent implements OnInit
{
    @ViewChild("map")
    public mapElement : ElementRef;

    @Input()
    public appId      : any;

    @Input()
    public appCode    : any;

    @Input()
    public lat        : any;
    
    @Input()
    public lng        : any;


    public constructor(
       ) {


       }


    public ngOnInit() { }


    public ngAfterViewInit()
    {
        const map = L.map(this.mapElement.nativeElement,
        {
            center      : [this.lat, this.lng],
            zoom        : 10,
            layers      : [L.tileLayer("https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/512/png8?app_id=" + this.appId + "&app_code=" + this.appCode + "&ppi=320")],
            zoomControl : true
        });

        setTimeout(() =>
        {
            map.invalidateSize();
        }, 1000);
    }

}