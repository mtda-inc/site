import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'section-contact',
    templateUrl: './section-contact.component.html',
    styleUrls: ['./section-contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionContactComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
