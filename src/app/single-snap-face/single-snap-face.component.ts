import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-snap-face',
  templateUrl: './single-snap-face.component.html',
  styleUrls: ['./single-snap-face.component.scss']
})

export class SingleSnapFaceComponent implements OnInit {
  faceSnap!: FaceSnap;
  notSnapped!: boolean;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.notSnapped = true;
    this.buttonText = "Oh Snap!";
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.buttonText = 'Oops, unSnap!';
    } else {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.buttonText = 'Oh Snap!';
    }
  }
}
