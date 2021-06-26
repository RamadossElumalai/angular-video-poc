import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.scss']
})
export class VideoPlayComponent {
  playVideo: boolean = false;
  @Input() videoSource: string = "";
  @ViewChild('videoPlayer', {static:true}) videoplayer: any;

  toggleVideo(event: any) {
      this.videoplayer.nativeElement.play();
  }
}
