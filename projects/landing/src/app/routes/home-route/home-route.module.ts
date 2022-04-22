import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouteComponent } from './home-route.component';
import { Routes, RouterModule } from '@angular/router';
import { PageBannerModule } from '../../modules/page-banner/page-banner.module';
import { PageToolbarModule } from '../../modules/page-toolbar/page-toolbar.module';
import { SectionAboutModule } from '../../modules/section-about/section-about.module';
import { SectionWhatIDoModule } from '../../modules/section-what-i-do/section-what-i-do.module';
import { SectionStackModule } from '../../modules/section-stack/section-stack.module';
import { SectionArticleModule } from '../../modules/section-article/section-article.module';
import { SectionNgTwModule } from '../../modules/section-ng-tw/section-ng-tw.module';

const routes: Routes = [
    {
        path: '',
        component: HomeRouteComponent,
    },
];

@NgModule({
    declarations: [HomeRouteComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PageBannerModule,
        PageToolbarModule,
        SectionAboutModule,
        SectionWhatIDoModule,
        SectionStackModule,
        SectionArticleModule,
        SectionNgTwModule,
    ],
    exports: [HomeRouteComponent],
})
export class HomeRouteModule {}
