Task 1 (due date 19.03.2018) :
- installed angular-cli via npm
- initialized new app via angular-cli
- created product component
- created model: Product interface and StoreProduct class
- updated product component/template to display a product
- created ProductService that is responsible of retrieving Products
- created product-list component
- updated product-list component/template to show products using ProductService
- created cart component
- added cart tag to the app template
- created CartService (handles products a user are going to buy)
- updated cart component/template to show products in the cart
- added Buy button to product component/template to be able to add the product to cart
- added Remove button to cart component/template to remove the product from cart
- created app-routing module to be able to navigate through the app
- configured route for product-list component to /products
- added routing-outlet tag to the app template 

Task 2 (due date 26.03.2018) :
- created product and cart module
- moved product-item and product-list to product module
- moved cart-item and cart-list to cart module
- created item and cart-item model classes
- updated cart service to use item
- updated cart list component to display items in the cart
- added ability to change quantity of items in the cart
- used ngClass on "Add to cart" button in product-item template
- implemented ChangeBackgroundDirective by means of @HostListener's and @HostBinding
- used change-background directive on cart-item in cart-list template
- created header module/component (with projection)
- used header component in  app, cart-list and product-list components

Task 3 (due date 30.03.2018) :
- created core module
- created ./core/service/local-storage.service and provided it in core module
- created ./core/service/config-options.service
- created ./core/service/constants.service and provided it in app module
- created ./core/service/config-options.service
- created ./core/service/generator.service (with factory) 
    and provided it in product-item component
    and optional in cart-item
- created ./core/directive/change-font-weight.directive and applied it on cart-item 