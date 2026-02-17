import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],
    standalone: false
})
export class PlayerComponent implements AfterViewInit {
  myVideo: any;
  status: boolean = true;
  modeDark: boolean = false;
  videoEnd: boolean = true;

  constructor() {}

  ngAfterViewInit(): void {
    this.myVideo = document.getElementById(
      'playVideo'
    ) as HTMLVideoElement | null;
    this.setType();
  }

  setType() {
    this.myVideo as HTMLVideoElement;
  }

  getDuration() {
    console.log(this.myVideo.duration);
    console.log(this.myVideo.currentTime);
    this.videoEnd = this.myVideo.ended;
  }

  /* #region screen controls */
  makeSmall() {
    //240p (SD): 426 x 240
    this.myVideo.width = 426;
    this.myVideo.height = 240;
  }

  makeBig() {
    // 720p (HD): 1280 x 720
    this.myVideo.width = 1280;
    this.myVideo.height = 400;
  }
  /* #endregion */

  playPause() {
    this.getDuration();
    if (this.myVideo != null) {
      this.myVideo.paused ? this.myVideo.play() : this.myVideo?.pause();
      this.status = this.myVideo.paused;
    }
  }

  forward() {
    this.myVideo.playbackRate = 2.0;
  }

  mute() {
    this.myVideo.muted = !this.myVideo.muted;
  }

  darkOrLight(event: any) {
    const html = document.querySelector('html') as HTMLElement;
    this.modeDark = html.classList.toggle('dark-mode');
  }
}
