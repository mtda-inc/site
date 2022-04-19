import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'page-banner',
    templateUrl: './page-banner.component.html',
    styleUrls: ['./page-banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageBannerComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
