import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionStackComponent } from './section-stack.component';
import { SafeHtmlModule } from '../../pipes/safe-html/safe-html.module';

@NgModule({
    declarations: [SectionStackComponent],
    imports: [CommonModule, SafeHtmlModule],
    exports: [SectionStackComponent],
})
export class SectionStackModule {}
