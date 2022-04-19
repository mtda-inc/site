import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'page-toolbar',
    templateUrl: './page-toolbar.component.html',
    styleUrls: ['./page-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageToolbarComponent implements OnInit {
    @Input() public theme: 'dark' | 'light' = 'dark';
    @Input() public navigation: any[] = [
        {
            label: 'What I Do',
            alt: '',
            fragment: 'what-i-do',
            link: '/',
        },
        {
            label: 'Stack',
            alt: '',
            fragment: 'stack',
            link: '/',
        },
        {
            label: 'Articles',
            alt: '',
            fragment: 'articles',
            link: '/',
        },
        {
            label: 'Contact',
            alt: '',
            fragment: 'contact',
            link: '/',
        },
    ];

    constructor() {}

    ngOnInit(): void {}

    trackByFn(index: any, item: any) {
        return item.label;
    }
}
