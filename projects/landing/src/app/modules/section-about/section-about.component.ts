import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IconService } from '../../services/icon.service';

@Component({
    selector: 'section-about',
    templateUrl: './section-about.component.html',
    styleUrls: ['./section-about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionAboutComponent implements OnInit {
    constructor(public icons: IconService) {}

    ngOnInit(): void {}
}
