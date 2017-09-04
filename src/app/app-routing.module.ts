import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoverComponent } from './cover/cover.component';
const appRoutes = [
    // { path: 'cover', component: CoverComponent },
    // { path: '', redirectTo: 'cover', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
