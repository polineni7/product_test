import { Component, OnInit } from '@angular/core';
import { StopwatchService } from '../../services/stopwatch.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {
  elapsedTime: number = 0;
  isRunning: boolean = false;
  alertHours: number = 0;
  alertMinutes: number = 0;
  hoursArray: number[] = Array.from({ length: 24 }, (_, i) => i);
  minutesArray: number[] = Array.from({ length: 60 }, (_, i) => i);

  constructor(private stopwatchService: StopwatchService) {}

  ngOnInit() {
    this.isRunning = this.stopwatchService.getIsRunning();
    this.updateElapsedTime();
  }

  start() {
    this.stopwatchService.start();
    this.isRunning = true;
    this.updateElapsedTime();
    this.stopwatchService.setAlert(this.alertHours, this.alertMinutes);
  }

  stop() {
    this.stopwatchService.stop();
    this.isRunning = false;
    this.updateElapsedTime();
  }

  reset() {
    this.stopwatchService.reset();
    this.isRunning = false;
    this.updateElapsedTime();
  }

  updateElapsedTime() {
    setInterval(() => {
      this.elapsedTime = this.stopwatchService.getElapsedTime();
    }, 100); // Update every 100ms
  }

  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor(ms % 1000 / 10); // Convert ms to tenths of a second
    return `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
  }

  updateAlert() {
    this.stopwatchService.setAlert(this.alertHours, this.alertMinutes);
  }
}
