import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparkAnalysisComponent } from './projects/spark-analysis/spark-analysis.component';
import { StocksAnalysisComponent } from './projects/stocks-analysis/stocks-analysis.component';
import { AboutMeComponent } from './homepage/about-me/about-me.component';

const routes: Routes = [
  {path: "", component: AboutMeComponent},
  {path: "sparkAnalysis", component: SparkAnalysisComponent},
  {path: "stockAnalysis", component: StocksAnalysisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
