import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  isMobile = false;
  test = 'src/assets/images/bg-main-desktop.png';

  frontImg = '../../../assets/images/bg-card-front.png';
  backImg = '../../../assets/images/bg-card-back.png';
  cardLogo = '../../../assets/images/card-logo.svg';
}
