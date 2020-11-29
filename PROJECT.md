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

- Client-side or server-side rendering?
- Firebase
  - hosting
    - preview channels from feature branch - NEW TO ME
  - persist data in Firestore?
  - authentication? social sign in too
  - serverless functions for API - NEW TO ME
- ES modules in the browser - NEW TO ME
- Github actions for CICD
- Fetch products at build time or run time?
  - if build time, we would also implement a webhook to trigger a re-build when the JSON
    changes (e.g. when somebody clicks "publish" in a CMS). and/or as a nightly cron.
- Feature toggles
- Optimistic UI (don't wait for api calls, assume they're successful)

## Stories

- Design Redux state
- Initial app setup
  - React, webpack, babel, docker
  - Unit testing, linting
  - Documentation
- Add Redux
- Create Site header
  - logo
  - skip to content
  - favourites count
  - basket count
- Create product card
- Fetch products at build-time
- Cypress
- Add to basket (update basket count, save to local storage)
- Add to favourites (update favourites count, save to local storage)
- Basket page
- Favourites page
- Deploy to firebase
- Save basket to firebase (use cookie for basket id)
- Save favourites to firebase (use UUID for favourites. makes a shareable favourites link.)

- Authentication (theoretical)
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
- One of the product images is broken
