import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'section-what-i-do',
    templateUrl: './section-what-i-do.component.html',
    styleUrls: ['./section-what-i-do.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionWhatIDoComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
