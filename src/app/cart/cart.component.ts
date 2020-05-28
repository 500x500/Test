import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CartElement} from '../table/table.component';
import {snilsValidator} from '../validation-snils';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  order: CartElement[];
  snilsAndPhotoGroup: FormGroup;
  delivery: FormControl;
  showDeliveryData = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.order = JSON.parse(localStorage.getItem('cart'));
    this.firstFormGroup = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      personalData: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
    this.snilsAndPhotoGroup = this.fb.group({
      snils: ['', [snilsValidator, Validators.required]]
    });
  }

}
