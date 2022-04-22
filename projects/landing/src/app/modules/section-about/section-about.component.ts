import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IconService } from '../../services/icon.service';

@Component({
    selector: 'section-about',
    templateUrl: './section-about.component.html',
    styleUrls: ['./section-about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionAboutComponent implements OnInit {
    public about: any[] = [
        {
            title: '<b>15+ years</b> experience',
            svg: this.iconPack.icons.heroFire,
        },
        {
            title: '<b>UX/UI</b> Lover',
            svg: this.iconPack.icons.heroColorSwatch,
        },
        {
            title: '<b>Angular</b> since v1/2010',
            svg: this.iconPack.icons.angular,
        },
        {
            title: '<b>Web</b> developer',
            svg: this.iconPack.icons.devices,
        },
        {
            title: '<b>Mobile</b> developer',
            svg: this.iconPack.icons.heroPhone,
        },
        {
            title: '<b>Full stack</b> developer',
            svg: this.iconPack.icons.capacitor,
        },
        {
            title: '<b>Community</b> member',
            svg: this.iconPack.icons.github,
        },
    ];

    constructor(public iconPack: IconService) {}

    ngOnInit(): void {}
}
