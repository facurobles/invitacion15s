import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  targetDate: Date = new Date('2024-10-19T22:00:00');
  startDateUtc = this.targetDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  agendarEvento() {
    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const title = encodeURIComponent('Fiesta de 15 - Maricarmen ❤️');
    const details = encodeURIComponent('Te espero en mi fiesta para pasar un momento inolvidable. No faltes!');
    const location = encodeURIComponent('Huellas del inka');

    const url = `${baseUrl}&text=${title}&dates=${this.startDateUtc}/${this.startDateUtc}&details=${details}&location=${location}`;

    window.open(url, '_blank');  // Abre la URL en una nueva pestaña
  }
}
