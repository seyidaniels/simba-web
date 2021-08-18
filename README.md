# simba Admin

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# test
$ npm run test
```

#### Testing
This project uses [JEST](https://jestjs.io/) for unit testing, and [cypress](https://www.cypress.io/) for end-to-end testing

#### Project Structure
This project uses a structure similar to the **"View-State Split"** structure, quick explanation:

If you were to implement a page "/home",
you'd have the following:

**The route**
> src/pages/Home/index.vue

**The page components**
> src/components/Home/HeroSection.vue 
> 
> src/components/Home/OurValues.vue 
>
> src/components/Home/DownloadOurApp.vue 

**The state** (optional, state should be feature based)
> src/store/home.js

**The page assets**
> src/assets/images/home/smiling-man.png
>
> src/assets/images/home/hero-background.jpg
>
> src/assets/icons/arrow.svg
>
> src/assets/icons/search.svg

**Shared components**

shared components, will be added to a common folder like:
> src/components/common/
>
<br />
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
