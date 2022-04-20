import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-home-route',
    templateUrl: './home-route.component.html',
    styleUrls: ['./home-route.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeRouteComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
