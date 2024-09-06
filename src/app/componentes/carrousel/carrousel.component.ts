import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.sliderContainer.nativeElement.addEventListener('scroll', () => {
      this.updateActiveImage();
    });
  }

  
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;
  images = [
    '../../../assets/img.jpg',
    '../../../assets/img1.jpg',
    '../../../assets/img2.jpg',
    '../../../assets/img3.jpg',
    '../../../assets/img4.jpg'
  ];

  currentIndex = 0;


  updateActiveImage() {
    const container = this.sliderContainer.nativeElement;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const center = scrollLeft + containerWidth / 2;

    const images = container.querySelectorAll('.slider-item');
    images.forEach((item: any, index: number) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(center - itemCenter);
      if (distance < item.offsetWidth / 2) {
        this.currentIndex = index;
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  prevSlide() {
    this.sliderContainer.nativeElement.scrollBy({
      left: -this.sliderContainer.nativeElement.offsetWidth,
      behavior: 'smooth'
    });
  }

  nextSlide() {
    this.sliderContainer.nativeElement.scrollBy({
      left: this.sliderContainer.nativeElement.offsetWidth,
      behavior: 'smooth'
    });
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.sliderContainer.nativeElement.scrollTo({
      left: this.sliderContainer.nativeElement.offsetWidth * index,
      behavior: 'smooth'
    });
  }
}
