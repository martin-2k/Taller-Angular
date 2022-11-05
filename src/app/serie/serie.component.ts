import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie>=[];
  average:number=0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.setAverage(series);
    });
  }

  ngOnInit() {
    this.getSeries();
  }

  setAverage(series: Serie[] = this.series) {
    this.average = series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length;
 }

}
