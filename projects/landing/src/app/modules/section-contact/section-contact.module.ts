import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContactComponent } from './section-contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [SectionContactComponent],
    imports: [CommonModule, RouterModule],
    exports: [SectionContactComponent],
})
export class SectionContactModule {}
