import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {
  private startTime: number = 0;
  private elapsedTime: number = 0;
  private intervalId: any;
  private isRunning: boolean = false;
  private alertTime: number = 0; // Alert time in milliseconds
  private alertTimeout: any;

  constructor() {}

  start() {
    if (!this.isRunning) {
      this.startTime = Date.now() - this.elapsedTime;
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
        this.checkAlert();
      }, 100); // Update every 100ms
    }
  }

  stop() {
    if (this.isRunning) {
      clearInterval(this.intervalId);
      this.isRunning = false;
      this.clearAlert();
    }
  }

  reset() {
    this.stop();
    this.elapsedTime = 0;
    this.startTime = Date.now();
  }

  getElapsedTime(): number {
    return this.elapsedTime;
  }

  getIsRunning(): boolean {
    return this.isRunning;
  }

  setAlert(hours: number, minutes: number) {
    this.alertTime = (hours * 3600 + minutes * 60) * 1000;
    this.clearAlert();
    if (this.alertTime > 0) {
      this.alertTimeout = setTimeout(() => {
        if (this.isRunning) {
          this.playAlertSound();
        }
      }, this.alertTime - this.elapsedTime); // Adjust based on elapsed time
    }
  }

  clearAlert() {
    if (this.alertTimeout) {
      clearTimeout(this.alertTimeout);
      this.alertTimeout = null;
    }
  }

  private playAlertSound() {
    const beep = new Audio('assets/alert-sound.mp3');
    beep.play().catch(error => console.error('Alert sound failed to play', error));
    this.showAlert(); // Show alert box after playing sound
  }

  private showAlert() {
    // Use a method to trigger an alert box
    // In a real application, you might use a service to display modals or notifications
    alert('Time up!');
  }

  private checkAlert() {
    if (this.elapsedTime >= this.alertTime && this.isRunning) {
      this.playAlertSound();
      this.clearAlert();
    }
  }
}
