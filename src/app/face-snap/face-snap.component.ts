import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  notSnapped!: boolean;
  buttonText!: string;

  ngOnInit() {
    this.notSnapped = true;
    this.buttonText = "Oh Snap!";
  }

  onClickSnap() {
    if (this.notSnapped) {
      this.faceSnap.snaps++;
      this.notSnapped = false;
      this.buttonText = "Ooops Unsnap!";
    } else {
      this.faceSnap.snaps--;
      this.notSnapped = true;
      this.buttonText = "Oh Snap!";
    }
  }
}
