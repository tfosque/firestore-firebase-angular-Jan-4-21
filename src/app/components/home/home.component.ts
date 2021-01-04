import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  members = new BehaviorSubject<any>([])

  constructor(
    private readonly itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(res => {
      this.members.next(res)
      // console.log({ res })
    })
  }

}
