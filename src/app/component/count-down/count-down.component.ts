import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent {

  private countDownTime: number;

  private timerNumerics = {
    milliseconds: 1000,
    minuteInSeconds: 60,
    minutesInHour: 60,
    hoursInDay: 24
  };

  @Input() set time(value: string){
    this.countDownTime = new Date(value).getTime();
  }

  get days(): string {
    const { milliseconds, minuteInSeconds, minutesInHour, hoursInDay } = this.timerNumerics;
    const days = Math.floor(this.getTimeDifference() / (hoursInDay * minutesInHour * minuteInSeconds * milliseconds));

    return days < 10 ? `0${days}` : `${days}`;
  }

  get hours(): string {
    const { milliseconds, minuteInSeconds, minutesInHour, hoursInDay } = this.timerNumerics;
    const hours = Math.floor((this.getTimeDifference() % (hoursInDay * minutesInHour * minuteInSeconds * milliseconds))
      / (minutesInHour * minuteInSeconds * milliseconds));

    return hours < 10 ? `0${hours}` : `${hours}`;
  }

  get minutes(): string {
    const { milliseconds, minuteInSeconds, minutesInHour } = this.timerNumerics;
    const minutes = Math.floor(
      (this.getTimeDifference() % (minutesInHour * minuteInSeconds * milliseconds))
      / (minuteInSeconds * milliseconds));

    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  }

  get seconds(): string {
    const { milliseconds, minuteInSeconds } = this.timerNumerics;
    const seconds = Math.floor((this.getTimeDifference() % (minuteInSeconds * milliseconds)) / milliseconds);

    return seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

  private getTimeDifference():number{
    const currentTime = new Date().getTime();
    return this.countDownTime -  currentTime;

  }
}
