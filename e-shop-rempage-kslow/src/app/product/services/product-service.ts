import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../model/product";


export class ProductService {

  subject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    [
      {
        id: 2,
        name: "Komputer Game X Powered By MSI",
        quantity: 10,
        availability: "yes",
        price: 10000,
        weight: 10.0
      },
      {
        id: 4,
        name: "Komputer Optimus E-Sport GB450T-CR9",
        quantity: 1,
        availability: "yes",
        price: 1000,
        weight: 13.0
      },
      {
        id: 5,
        name: "Komputer Optimus E-Sport GB450T-CR9",
        quantity: 1,
        availability: "yes",
        price: 1000,
        weight: 13.0
      },
      {
        id: 6,
        name: "Komputer Optimus E-Sport GB450T-CR9",
        quantity: 1,
        availability: "yes",
        price: 1000,
        weight: 13.0
      },
      {
        id: 7,
        name: "Komputer Optimus E-Sport GB450T-CR9",
        quantity: 1,
        availability: "yes",
        price: 1000,
        weight: 13.0
      },
      {
        id: 8,
        name: "Komputer Optimus E-Sport GB450T-CR9",
        quantity: 1,
        availability: "yes",
        price: 1000,
        weight: 13.0
      },
      {
        id: 9,
        name: "Komputer Optimus E-Sport GB450T-CR9",
        quantity: 1,
        availability: "yes",
        price: 1000,
        weight: 13.0
      },
    ]
  );

  findAll(): Observable<Product[]> {
    return this.subject.asObservable();
  }

  findById(id: number): Observable<Product> | any {
    return new Observable(subscriber => {
      const products = this.subject.getValue();
      subscriber.next(products.find(product => product.id === id));
      subscriber.complete();
    });
  }

}
