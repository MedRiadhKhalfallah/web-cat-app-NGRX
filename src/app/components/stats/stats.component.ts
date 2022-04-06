import {Component, OnInit} from '@angular/core';
import {EventDriverService} from "../../services/event.driver.service";
import {ActionEvent} from "../../state/states";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  counter: number = 0;

  constructor(private eventDriverService: EventDriverService) {
  }

  ngOnInit(): void {
    this.eventDriverService.sourceEventSubjectObservable.subscribe((actionEvent: ActionEvent) => {
      ++this.counter;
    });

  }

}
