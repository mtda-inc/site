import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from './page-banner.component';
import { TwButtonModule } from 'ng-tw';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PageBannerComponent],
    imports: [CommonModule, TwButtonModule, RouterModule],
    exports: [PageBannerComponent],
})
export class PageBannerModule {}
