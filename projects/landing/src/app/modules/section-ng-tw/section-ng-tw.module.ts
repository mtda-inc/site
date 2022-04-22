import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionNgTwComponent } from './section-ng-tw.component';
import { TwButtonModule } from 'ng-tw';

@NgModule({
    declarations: [SectionNgTwComponent],
    imports: [CommonModule, TwButtonModule],
    exports: [SectionNgTwComponent],
})
export class SectionNgTwModule {}
