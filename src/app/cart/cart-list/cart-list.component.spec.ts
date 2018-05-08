import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { CartListComponent } from './cart-list.component';
import {CartItemComponent} from "../cart-item/cart-item.component";
import {CartService} from "../cart.service";
import {FormsModule} from "@angular/forms";
import {GeneratorService} from "../../core/service/generator.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {OrderByPipe} from "../../shared/pipe/order-by.pipe";
import {Store} from "@ngrx/store";
import {AppState} from "../../core/+store/app.state";
import {Item} from "../model/item.model";
import {CartItem} from "../model/cart-item.model";
import {By} from "@angular/platform-browser";



describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;
  let cartService: CartService;
  let storeSpy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CartListComponent, OrderByPipe],
      providers: [
        CartService,
        {provide: Store, useValue: jasmine.createSpyObj('store', ['dispatch'])}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    cartService = fixture.debugElement.injector.get(CartService);
    storeSpy = fixture.debugElement.injector.get(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display empty cart', () => {
    spyOn(cartService, 'getAll').and.returnValue([]);
    component.ngOnInit();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('[header-text]')).nativeElement.textContent).toEqual('Products cart is empty');
  });

  it('should display items in the cart', () => {
    spyOn(cartService, 'getAll').and.returnValue([new CartItem(1, '1', 1, 1), new CartItem(2, '2', 2, 2)]);
    spyOn(cartService, 'isEmpty').and.returnValue(false);
    component.ngOnInit();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('[header-text]')).nativeElement.textContent).toEqual('Items in the cart:');
    expect(fixture.debugElement.queryAll(By.css('cart-item')).length).toEqual(2);
  });

  it('should redirect to order page', () => {
    spyOn(cartService, 'getAll').and.returnValue([new CartItem(1, '1', 1, 1), new CartItem(2, '2', 2, 2)]);
    spyOn(cartService, 'isEmpty').and.returnValue(false);
    component.ngOnInit();
    fixture.detectChanges();

    const goToOrderButton = <HTMLButtonElement>fixture.debugElement.query(By.css('#goToOrder')).nativeElement;
    goToOrderButton.click();

    expect(storeSpy.dispatch.calls.count()).toEqual(1);
    expect(storeSpy.dispatch.calls.mostRecent().args[0].payload.path).toEqual(['/order'])
  });

});
