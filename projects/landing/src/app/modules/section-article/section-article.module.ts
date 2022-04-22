import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionArticleComponent } from './section-article.component';
import { SafeHtmlModule } from '../../pipes/safe-html/safe-html.module';

@NgModule({
    declarations: [SectionArticleComponent],
    imports: [CommonModule, SafeHtmlModule],
    exports: [SectionArticleComponent],
})
export class SectionArticleModule {}
