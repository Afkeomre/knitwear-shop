# Knitwear Shop

This project is a clothing store application built with Vue.js, using the Composition API. It employs Vue components to implement the user interface and functionality. Vue Router provides page navigation.

## Website

You can try the application online [here](https://knitwear-shop.vercel.app/).

## Features
 - **Pages**
   - Home: includes a selection of bestseller products. Users can add items to the cart directly from this section.
   - Women's Clothing: allows users to browse, search, and filter women's clothing by price or name and add it to the cart.
   - Men's Clothing: similar to the women’s section, but for men's clothing.
   - Cart: shows items added to the cart as well as their quantities and total cost. Users can remove items and proceed with checkout.
  
 - **Product Management**
   - Add products from the home page or the men’s/women’s clothing pages. A size must be selected before adding an item to the cart; otherwise, a warning will be displayed.
   - Items added from the bestseller section are also marked as added on the men’s or women’s clothing page.

 - **Cart Functionality**
   - Displays a summary of items, quantities, and total price.
   - Applies a discount for orders of more than 5 items.
   - Items can be removed from the cart.
   - Orders can be placed, and users receive feedback on order success or failure.
   - Cart data persists across page navigations using local storage.
   - After a successful order the cart is cleared for new purchases.
  
 - **Search and Filtering**
   - Available on the women's and men's clothing pages.
   - Allows filtering by price range and product name.
  
## Technical Details
 - Developed with Vue.js using the Composition API.
 - Vue Router manages page navigation.
 - Product data is fetched from a server.

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
