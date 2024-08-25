import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {
  pizzaForm: FormGroup;
  vegToppings: FormArray;
  nonVegToppings: FormArray;

  constructor() { }

  ngOnInit(): void {
    this.pizzaForm = new FormGroup({
      pizzaSize: new FormControl(''),
      vegToppings: new FormArray([
        new FormControl('Tomatoes ($1.00)'),
        new FormControl('Onions ($0.50)'),
        new FormControl('Bell pepper ($1.00)'),
        new FormControl('Mushrooms ($1.20)'),
        new FormControl('Pineapple ($0.75)')
      ]),
      nonVegToppings: new FormArray([
        new FormControl('Sausage ($1.00)'),
        new FormControl('Pepperoni ($2.00)'),
        new FormControl('Barbecue chicken ($3.00)')
      ]),
      offer: new FormControl('')
    });
  }

  getTotal(): number {
    let total = 0;
    const pizzaSize = this.pizzaForm.get('pizzaSize').value;
    const vegToppings = this.pizzaForm.get('vegToppings').value;
    const nonVegToppings = this.pizzaForm.get('nonVegToppings').value;
    const offer = this.pizzaForm.get('offer').value;

    switch (pizzaSize) {
      case 'Small':
        total += 5;
        break;
      case 'Medium':
        total += 7;
        break;
      case 'Large':
        total += 8;
        break;
      case 'Extra Large':
        total += 9;
        break;
    }

    vegToppings.forEach(topping => {
      switch (topping) {
        case 'Tomatoes ($1.00)':
          total += 1;
          break;
        case 'Onions ($0.50)':
          total += 0.5;
          break;
        case 'Bell pepper ($1.00)':
          total += 1;
          break;
        case 'Mushrooms ($1.20)':
          total += 1.2;
          break;
        case