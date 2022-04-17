import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            // scrollOffset: [0, 84],
            scrollOffset: [0, 0],
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
