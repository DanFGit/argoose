Just some notes before starting the challenge, things I could do. Indicated
things that would be new territory for me 😄

## Ideas

Minimum features:

- Fetch products from API
- User sees a list of products
- User can add products to the basket

Extra features:

- Multiple quanities
- Persist basket between page loads
- Sorting - price asc, price desc, a-z, z-a
- Filtering - not really enough attributes to filter
- Searching - simple string based
- Favourites
- Themes (or dark mode at least, using CSS media query)
- Micro-animations
  - add to trolley
  - add to favourites
  - delete
  - opening trolley
- Gestures - NEW TO ME
  - swipe product to the left to add it to favourites, to the right to add it to basket
  - when viewing favourites, swipe to remove or add to basket
  - when viewing basket, swipe to remove or move to favourites
- Service worker
  - offline page
    - show the user their basket and favourites
- Login
- Payment (via PayPal or Stripe)
- Analytics

## Design

- Client-side rendering
- CSS Variables for themeing - NEW TO ME
- Firebase
  - hosting
    - preview channels from feature branch - NEW TO ME
  - persist data in Firestore?
  - authentication? social sign in too
  - serverless functions for API - NEW TO ME
- Github actions for CICD
- Fetch products at run time?
- Feature toggles - toggle off favourites, a/b test? firebase remote config
- Optimistic UI (don't wait for api calls, assume they're successful)

## Stories

- Design Redux state ✅
- Initial app setup ✅
  - React, webpack, babel, docker ✅
  - Unit testing, linting ✅
  - Documentation ✅
- Add Redux ✅
- Create Site header ✅
  - logo ✅
  - skip to content ✅
  - basket count ✅
- Create product card ✅
- Fetch products on page load ✅
  - loading skeleton ✅
  - error handling ✅
- Cypress
- Deploy to firebase

---

- FEATURE: Basket
  - count in header
  - add to basket button
  - basket page
  - remove from basket
  - amend quantites
  - save basket to firebase (use a cookie for basket id)

---

- FEATURE: Favourites
  - count in header
  - add to/remove from favourites button
  - favourites page
  - save favourites to firebase (use UUID for favourites. save list of UUIDs in
    localstorage. makes a shareable favourites link.)

---

- FEATURE: Authentication
  - profile page to change email/password or link/unlink accounts, see order history
  - reset password page
  - on login, if user has a guest basket, would need to save to database
  - on login, if user already has a basket in database, apply it
    - if user also has guest basket, merge it
  - on login, if user has guest favourites, save them to database
  - on logout, clear local storage and cookie

## Notes / observations

- Wouldn't usually use Redux for something as simple as this unless it was
  expected to grow more complex in the near future
- One of the products has a broken image so I build the image URL dynamically
