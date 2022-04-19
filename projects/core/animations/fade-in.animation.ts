import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

export function fadeInRouteAnimation(timing: number = 0.7) {
    return trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, { params: { timing: timing } }))]);
}
