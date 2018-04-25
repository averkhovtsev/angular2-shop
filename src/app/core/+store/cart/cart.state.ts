import {EntityState} from "@ngrx/entity";
import {CartItem} from "../../../cart/model/cart-item.model";

export interface CartState extends EntityState<CartItem> {
}