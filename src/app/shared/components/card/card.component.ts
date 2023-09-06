import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  typeClass: string= '';
  @Input()
  cardType: string = '';

  ngOnInit() {
    this.validateType();
  }

  validateType() {
    switch (this.cardType) {
      case 'login':
        this.typeClass = 'card__login'
        break;

      default:
        break;
    }
  }

}
