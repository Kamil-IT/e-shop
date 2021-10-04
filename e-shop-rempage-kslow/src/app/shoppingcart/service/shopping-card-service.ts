import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../product/model/product";
import {map} from "rxjs/operators";


export class ShoppingCardService {

  subject: BehaviorSubject<ShoppingCart> = new BehaviorSubject<ShoppingCart>(
    {
      id: 120, totalPrice: 3000, shoppingCartItems: [
        {
          shopping_cart_id: 120,
          product: {
            id: 2,
            name: "Komputer Game X Powered By MSI",
            quantity: 10,
            availability: "yes",
            price: 10000,
            weight: 10.0
          },
          quantity: 2,
          totalPrice: 20000,
        },
        {
          shopping_cart_id: 120,
          product: {
            id: 4,
            name: "Komputer Optimus E-Sport GB450T-CR9",
            quantity: 1,
            availability: "yes",
            price: 1000,
            weight: 13.0
          },
          quantity: 2,
          totalPrice: 20000,

        }
      ]
    });

  findAll(): Observable<ShoppingCart> {
    return this.subject.asObservable();
  }

  wholeCardPrice(): Observable<number> {
    return this.findAll().pipe(
      map(shoppingCart => shoppingCart.totalPrice)
    );
  }

  productsInCard(): Observable<number> {
    return this.findAll().pipe(
      map(shoppingCart => shoppingCart.shoppingCartItems.length)
    );
  }

  addElement(productId: number): void {
    let shoppingCards = this.subject.getValue();
    shoppingCards.shoppingCartItems.forEach((shoppingCard) => {
      if (shoppingCard.product.id === productId) {
        shoppingCard.quantity += 1;
        shoppingCard.totalPrice += shoppingCard.product.price;
        shoppingCards.totalPrice += shoppingCard.product.price;
      }
    });
    this.subject.next(shoppingCards)
  }

  removeElement(productId: number): void {
    let shoppingCards = this.subject.getValue();
    shoppingCards.shoppingCartItems.forEach((shoppingCard) => {
      if (shoppingCard.product.id === productId) {
        shoppingCard.quantity -= 1;
        if (!shoppingCard.quantity) {
          shoppingCards.shoppingCartItems = shoppingCards.shoppingCartItems.filter((item) => item !== shoppingCard)
        } else {
          shoppingCard.totalPrice -= shoppingCard.product.price;
          shoppingCards.totalPrice -= shoppingCard.product.price;
        }
      }
    });
    this.subject.next(shoppingCards)
  }

}

export interface ShoppingCartItem {
  shopping_cart_id: number | undefined,
  product: Product,
  quantity: number,
  totalPrice: number
}

export interface ShoppingCart {
  id: number,
  totalPrice: number,
  shoppingCartItems: ShoppingCartItem[]
}
