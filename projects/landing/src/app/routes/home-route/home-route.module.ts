import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouteComponent } from './home-route.component';
import { Routes, RouterModule } from '@angular/router';
import { PageBannerModule } from '../../modules/page-banner/page-banner.module';

const routes: Routes = [
    {
        path: '',
        component: HomeRouteComponent,
    },
];

@NgModule({
    declarations: [HomeRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes), PageBannerModule],
    exports: [HomeRouteComponent],
})
export class HomeRouteModule {}