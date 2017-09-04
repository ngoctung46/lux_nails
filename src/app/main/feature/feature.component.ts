import { Component, OnInit } from '@angular/core';

const FEATURES = [
  {
    'category': 'Pedicure',
    'title': 'Polished and Painted for perfection',
    'description': `
    Our spa manicure and pedicure services
    soothe with a warm neck pillow.
    Skin exfoliation and a hydrating massage
    are extended to the elbow for manicures and to the knee for pedicures,
    which also include a customized foot bath with essential oil.
    A paraffin treatment seals in moisture for softer hands and feet.
    Nails are polished to perfection with our luxury nail care services.
    `,
    imageUrl: 'w1.jpg'
  },
  {
    'category': 'Manicure',
    'title': 'Polished and Painted for perfection',
    'description': `
    Our spa manicure and pedicure services
    soothe with a warm neck pillow.
    Skin exfoliation and a hydrating massage
    are extended to the elbow for manicures and to the knee for pedicures,
    which also include a customized foot bath with essential oil.
    A paraffin treatment seals in moisture for softer hands and feet.
    Nails are polished to perfection with our luxury nail care services.
    `,
    imageUrl: 'w2.jpg'
  },
  {
    'category': 'Nails Enhancement',
    'title': 'Polished and Painted for perfection',
    'description': `
      Our spa manicure and pedicure services
      soothe with a warm neck pillow.
      Skin exfoliation and a hydrating massage
      are extended to the elbow for manicures and to the knee for pedicures,
      which also include a customized foot bath with essential oil.
      A paraffin treatment seals in moisture for softer hands and feet.
      Nails are polished to perfection with our luxury nail care services.
      `,
      imageUrl: 'w3.jpg'
  },
  {
    'category': 'Spa',
    'title': 'Spa for refreshing',
    'description': `
      Our spa manicure and pedicure services
      soothe with a warm neck pillow.
      Skin exfoliation and a hydrating massage
      are extended to the elbow for manicures and to the knee for pedicures,
      which also include a customized foot bath with essential oil.
      A paraffin treatment seals in moisture for softer hands and feet.
      Nails are polished to perfection with our luxury nail care services.
  `,
  imageUrl: 'w4.jpg'
  }
];
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  features: any = [];
  constructor() { }

  ngOnInit() {
    this.features = FEATURES;
  }

}
