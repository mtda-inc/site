import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionAboutComponent } from './section-about.component';
import { SafeHtmlModule } from '../../pipes/safe-html/safe-html.module';

@NgModule({
    declarations: [SectionAboutComponent],
    imports: [CommonModule, SafeHtmlModule],
    exports: [SectionAboutComponent],
})
export class SectionAboutModule {}
