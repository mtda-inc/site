import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./routes/home-route/home-route.module').then((m) => m.HomeRouteModule),
    },
];

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
