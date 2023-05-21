import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { ShareService } from "../services/share.service";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Berry } from "../models/berry.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private shareService: ShareService,
    @Inject(MAT_DIALOG_DATA) public data: {name: string}
  ) {
    this.name = data.name;
  }

  berry: Berry | undefined;
  name: string = "";


  ngOnInit() {
    this.dataService.getDetails(this.name)
      .subscribe((response: Berry) => this.berry = response);
  }

  chooseBerry() {
    this.shareService.setBerry(this.berry);
  }
}
