import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from './page-banner.component';
import { TwButtonModule } from 'ng-tw';

@NgModule({
    declarations: [PageBannerComponent],
    imports: [CommonModule, TwButtonModule],
    exports: [PageBannerComponent],
})
export class PageBannerModule {}
