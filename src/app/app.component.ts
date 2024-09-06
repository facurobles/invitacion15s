import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carla15s';


  showButton: boolean = false;

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica si el desplazamiento vertical de la ventana es mayor a 100vh
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
    this.showButton = scrollPosition > windowHeight;
  }

  estado = true

  cambiarEstado(){
    this.estado = !this.estado
  }

  banderaAudio!:boolean;

  playAudio(audioPlayer: HTMLAudioElement) {
    audioPlayer.play();
    this.banderaAudio = true;
  }

  pauseAudio(audioPlayer: HTMLAudioElement) {
    audioPlayer.pause();
    this.banderaAudio = false;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
