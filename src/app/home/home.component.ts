import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { ShareService } from "../services/share.service";
import { DataService } from "../services/data.service";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Berry } from "../models/berry.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private shareService: ShareService,
    public dialog: MatDialog
  ) {}

  berryNames: string[] = [];
  berry: Berry | undefined;


  openModal(name: string) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.position = {bottom:'0px'};
    dialogConfig.minWidth = '100%';
    dialogConfig.minHeight = '300px';
    dialogConfig.hasBackdrop = false;
    dialogConfig.data = {name: name}

    this.dialog.closeAll();
    this.dialog.open(DetailsComponent, dialogConfig );
  }

ngOnInit(): void  {
    this.shareService.getBerry.
    subscribe((response: Berry) =>
      this.setBerry(response));

    this.dataService.getBerries()
      .subscribe((response : any) => {
        response.results.forEach(result => {
              this.berryNames.push(result.name);
            });
        });
  }

  private setBerry(berry: Berry) : void {
    this.berry = berry;
  }
}
