import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndiaComponent } from "./india/india.component";
import { StatecodeComponent } from "./statecode/statecode.component";

const routes: Routes = [
  { path: "india", component: IndiaComponent },
  { path: "state/:id", component: StatecodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
