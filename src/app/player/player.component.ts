import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements AfterViewInit {
  myVideo:any;
  constructor () {}

  ngAfterViewInit(): void {
  this.myVideo = document.getElementById("video1") as HTMLVideoElement | null;
  }

  playPause() {
    if (this.myVideo != null) {
      this.myVideo.paused ? this.myVideo.play() : this.myVideo?.pause();
    }
  }

  makeFull() { // 720p (HD): 1280 x 720
    this.myVideo.width = 1280;
    this.myVideo.height = 720;
  }

  makeNormal() { //360p (SD): 640 x 360
    this.myVideo.width = 640;
    this.myVideo.height = 360;
  }

  makeSmall() { //240p (SD): 426 x 240
    this.myVideo.width = 426;
    this.myVideo.height = 240;
  }

}
