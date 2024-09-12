import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-database',
  standalone: true,
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent {

  @ViewChild('sqlTextArea') sqlTextArea!: ElementRef<HTMLTextAreaElement>;

  copyToClipboard() {
    const textarea = this.sqlTextArea.nativeElement;
    textarea.select();
    document.execCommand('copy');
    alert('SQL script copied to clipboard!');
  }
}
