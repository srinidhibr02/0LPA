import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule
    ],
    declarations:[
        HeaderComponent,
        FooterComponent,
        MapComponent
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        MapComponent
    ],
    providers:[]
})
export class SharedComponents {}