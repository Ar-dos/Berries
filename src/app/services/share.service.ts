import { EventEmitter, Injectable, Output } from '@angular/core';
import { Berry } from "../models/berry.model";


@Injectable({
  providedIn: 'root'
})

export class ShareService {
  @Output() getBerry: EventEmitter<any> = new EventEmitter();

berry: Berry | undefined;

  constructor() {}

  setBerry(berry) {
    this.berry = berry;
    this.getBerry.emit(this.berry);
  }
}
