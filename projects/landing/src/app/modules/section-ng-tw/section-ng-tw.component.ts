import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'section-ng-tw',
    templateUrl: './section-ng-tw.component.html',
    styleUrls: ['./section-ng-tw.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionNgTwComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
