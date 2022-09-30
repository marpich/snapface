import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleSnapFaceComponent } from "./single-snap-face/single-snap-face.component";

const routes: Routes = [
  { path: "facesnaps/:id", component: SingleSnapFaceComponent},
  { path: "facesnaps", component: FaceSnapListComponent },
  { path: "", component: LandingPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
