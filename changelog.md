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

Task 4 (due date 05.04.2018) :
- applied currency pipe on totalPrice value (cart-list component)
- applied date pipe on today value (app component)
- applied uppercase pipe on category value (product-item component)
- updated product service to return promise
- applied async pipe to display products (product-list)
- created order-by pipe, registered in it core module
- applied order-by pipe to sort cart items (cart-list)

Task 5 (due date 12.04.2018) :
- created admin and admin-routing module
- configured admin-routing module
- introduced admin.guard to protect admin
- implemented user.service to handle authentication
- implemented login/logout
- product editing to be implemented

Task 6 (due date 18.04.2018) :
- general refactoring (moved all pipes and directives to shared module, 
    all services, guards and interceptors to core module)
- imported and set up json-server
- implemented product add/edit (admin)
- implemented http-product service
- created default-headers interceptor to add Content-Type:application/json header to all requests
- created timing interceptor to log time of all /products requests
- loaded and stored settings from assets/app-settings.json

Task 7 (due date 25.04.2018) :
- create app/products state
- create actions/effects/reducer for products
- imported NgRx/store module
- updated product-list and product-view components to use store
- introduced router store

Task 8 (due date 03.05.2018) :
- added bootstrap.css
- created order module with routing
- created reactive order-from component
- added name/email/phones to order form
- added ability to add/remove phone
- created custom validator for phone number