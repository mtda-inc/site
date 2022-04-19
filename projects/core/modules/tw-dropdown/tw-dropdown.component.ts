import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';

const displayHostAnimation = trigger('displayHost', [
    state('true', style({ visibility: 'visible' })),
    transition('* => true', animate('0ms')),
    state('false', style({ visibility: 'hidden' })),
    transition('* => false', animate('0ms 200ms')),
]);
const backdropAnimation = trigger('backdrop', [
    state('true', style({ opacity: 1 })),
    transition('* => true', animate('300ms ease-out')),
    state('false', style({ opacity: 0 })),
    transition('* => false', animate('200ms ease-in')),
]);
const popoverAnimation = trigger('popover', [
    state('true', style({ opacity: 1, transform: 'scale(1)' })),
    transition('* => true', animate('300ms ease-out')),
    state('false', style({ opacity: 0, transform: 'scale(0.95)' })),
    transition('* => false', animate('200ms ease-in')),
]);

@Component({
    selector: 'tw-dropdown',
    templateUrl: './tw-dropdown.component.html',
    styleUrls: ['./tw-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [displayHostAnimation, backdropAnimation, popoverAnimation],
})
export class TwDropdownComponent {
    isOpen = false;
    position: Partial<{ top: any; bottom: any; left: any; right: any }> = {
        top: '0px',
        left: '0px',
    };

    @ViewChild('popover', { read: ElementRef, static: true })
    popover!: ElementRef<HTMLDivElement>;

    @HostBinding('@displayHost')
    get hostDisplayAnimation(): boolean {
        return this.isOpen;
    }

    @HostBinding('class')
    classes = 'fixed z-10 inset-0 overflow-y-auto';

    @HostBinding('style')
    style = { visibility: 'hidden' };

    id!: string;

    constructor(private cdr: ChangeDetectorRef) {}

    open(event: MouseEvent): void {
        this.position = { left: '0px', top: '0px' };
        this.cdr.detectChanges();

        if (window.innerWidth > this.popover.nativeElement.clientWidth + event.x) {
            this.position = { left: `${event.x}px` };
        } else {
            this.position = {
                left: `${event.x - this.popover.nativeElement.clientWidth}px`,
            };
        }
        if (window.innerHeight > this.popover.nativeElement.clientHeight + event.y) {
            this.position.top = `${event.y}px`;
        } else {
            this.position.top = `${event.y - this.popover.nativeElement.clientHeight}px`;
        }
        this.isOpen = true;
        this.cdr.detectChanges();
    }

    close(): void {
        this.isOpen = false;
        this.cdr.detectChanges();
    }
}
