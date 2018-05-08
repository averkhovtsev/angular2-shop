import { CartService } from './cart.service';
import {CartItem} from "./model/cart-item.model";
import {StoreProduct} from "../product/model/store.product";

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    service = new CartService();
  });

  it('should be empty', () => {
    expect(service.isEmpty()).toBeTruthy();
    expect(service.getAll()).toEqual([]);
    expect(service.size()).toEqual(0);
    expect(service.getTotalPrice()).toEqual(0);
  });

  it('should add item', () => {
    const storeProduct = new StoreProduct(11, 'first', '', 12, null, null);
    service.addProduct(storeProduct);

    expect(service.isEmpty()).toBeFalsy();
    expect(service.getAll()).toEqual([new CartItem(11, 'first', 12, 1)]);
    expect(service.size()).toEqual(1);
    expect(service.getTotalPrice()).toEqual(12);
  });

  it('should add two same items', () => {
    let storeProduct = new StoreProduct(11, 'first', '', 12, null, null);
    service.addProduct(storeProduct);
    service.addProduct(storeProduct);

    expect(service.isEmpty()).toBeFalsy();
    expect(service.getAll()).toEqual([new CartItem(11, 'first', 12, 2)]);
    expect(service.size()).toEqual(1);
    expect(service.getTotalPrice()).toEqual(24);
  });

  it('should add two different items', () => {
    let storeProduct1 = new StoreProduct(11, 'first', '', 12, null, null);
    let storeProduct2 = new StoreProduct(21, 'second', '', 22, null, null);
    service.addProduct(storeProduct1);
    service.addProduct(storeProduct2);

    expect(service.isEmpty()).toBeFalsy();
    expect(service.getAll()).toEqual([new CartItem(11, 'first', 12, 1), new CartItem(21, 'second', 22, 1)]);
    expect(service.size()).toEqual(2);
    expect(service.getTotalPrice()).toEqual(34);
  });

  it('should get by id', () => {
    let storeProduct1 = new StoreProduct(11, 'first', '', 12, null, null);
    let storeProduct2 = new StoreProduct(21, 'second', '', 22, null, null);
    service.addProduct(storeProduct1);
    service.addProduct(storeProduct2);

    expect(service.getById(21)).toEqual(new CartItem(21, 'second', 22, 1));
    expect(service.getById(22)).toBeUndefined();
  });

  it('should remove by id', () => {
    let storeProduct1 = new StoreProduct(11, 'first', '', 12, null, null);
    let storeProduct2 = new StoreProduct(21, 'second', '', 22, null, null);
    service.addProduct(storeProduct1);
    service.addProduct(storeProduct2);

    expect(service.remove(new CartItem(21, 'second', 22, 1))).toBeTruthy();
    expect(service.getById(21)).toBeUndefined();
  });

  it('should clear all', () => {
    let storeProduct1 = new StoreProduct(11, 'first', '', 12, null, null);
    let storeProduct2 = new StoreProduct(21, 'second', '', 22, null, null);
    service.addProduct(storeProduct1);
    service.addProduct(storeProduct2);

    service.clear();

    expect(service.isEmpty()).toBeTruthy();
    expect(service.getAll()).toEqual([]);
    expect(service.size()).toEqual(0);
    expect(service.getTotalPrice()).toEqual(0);
  });


});
