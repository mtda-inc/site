import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageToolbarComponent } from './page-toolbar.component';
import { TwButtonModule } from 'ng-tw';
import { RouterModule } from '@angular/router';
import { TwDropdownModule } from '@core/modules/tw-dropdown';

@NgModule({
    declarations: [PageToolbarComponent],
    imports: [CommonModule, TwButtonModule, RouterModule, TwDropdownModule],
    exports: [PageToolbarComponent],
})
export class PageToolbarModule {}
