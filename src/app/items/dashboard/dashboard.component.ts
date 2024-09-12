import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafeUrlPipe } from '../../safe-url.pipe';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, SafeUrlPipe ], // Use CommonModule
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sheetUrl: string = '';
  currentSheetUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Load URL from local storage if it exists
    const savedUrl = localStorage.getItem('sheetUrl');
    if (savedUrl) {
      this.sheetUrl = savedUrl;
      this.loadSheet();
    }
  }

  loadSheet() {
    if (this.sheetUrl) {
      // Store URL in local storage
      localStorage.setItem('sheetUrl', this.sheetUrl);
      // Sanitize the URL for use in iframe
      this.currentSheetUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.sheetUrl);
    }
  }
}
