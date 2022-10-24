import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { MomentService } from 'src/app/services/moment.service';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment?: Moment;

  constructor(private momentService: MomentService, route: ActivatedRoute) { }

  ngOnInit(): void {

    // id que está na url
  }

}
