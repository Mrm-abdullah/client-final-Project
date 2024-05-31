  -----------------
  setup client site
  -----------------

  .eslintrc.cjs ---  rules: {'react/prop-types': 'off', }

  1. goto ---- https://reactrouter.com
  2. goto ---- https://tailwindcss.com/docs/guides/vite
  3. goto ---- https://daisyui.com/docs/install
  4. goto ---- https://console.firebase.google.com
  5. to ---- https://vitejs.dev/guide/env-and-mode.html
  6. goto ---- https://github.com/smastrom/   // rating
  7. goto ---- https://reactrouter.com/en/main/hooks/use-location // location
  8. goto ---- https://github.com/brillout/awesome-react-components
  *            react-responsive-carousel
  *               npm install react-responsive-carousel --save
  *            swiper
  *               https://swiperjs.com/demos#centered
  *               npm i swiper
  *             react-rating
  *               npm i @smastrom/react-rating
  *               https://reactrating.netlify.app
  9. goto ---- https://www.npmjs.com/package/react-helmet-async  // helmet
  10. goto ---- https://www.npmjs.com/package/react-parallax  // react-parallax
  11. goto ---- https://www.npmjs.com/package/react-tabs  // react-tabs
  12. goto ---- https://www.npmjs.com/package/react-simple-captcha // captcha
  13. goto ---- https://react-hook-form.com/ // hook form 
  *            https://www.npmjs.com/package/react-hook-form // hook form 
  14. goto ---- https://sweetalert2.github.io/#download // sweet aleart
  15. goto ---- https://www.npmjs.com/package/react-icons // icons
  *            https://react-icons.github.io/react-icons
  16. goto ---- https://axios-http.com/docs/post_example // axios
  *            https://axios-http.com/docs/api_intro
  *            https://axios-http.com/docs/interceptors
  17. goto ---- https://tanstack.com/query/latest/docs/framework/react/installation // tanstack
  18. goto ---- https://recharts.org/en-US/guide // chart
  *            https://recharts.org/en-US/examples/CustomShapeBarChart
  
  19. goto ---- 



<!--   
  -----------------
  Page folder file setup 
  -----------------
  * Layout
  *  >Main

  * Routes
  *  >Routes
  *  >PrivateRoutes

  * ../ .env.local --- 5 no
  * firebase
  *  >firebase.config.js

  * Hooks
  *  >useAuth

  * Providers
  *  >AauthProviders
      <AauthProviders> // main
        <RouterProvider router={router} />
      </AauthProviders>

  * Pages
  *  >Home
  *   >>Home
  *   >>Banner
  *  >Shared
  *   >>Navber
  *   >>Footer

  *  >Register
  *   >>Register
  *  >Login
  *   >>Login -->




  -----------------
  setup server site
  -----------------

  1. goto ---- https://expressjs.com/en/starter/installing.html

  2. create index.js and type
  const express = require('express')
  const app = express()
  const cors = require('cors')
  require('dotenv').config()
  const port = process.env.PORT || 5000;

// middleware
app.use(cors({
    origin: [
      "http://localhost:5173",
      "https://project-final-27f39.web.app",
      "https://project-final-27f39.firebaseapp.com",
    ],
    credentials: true,
  }))
app.use(express.json());

  3. package.json
  "scripts": {
      "start": "node index.js",
    },

  4. goto ---- https://cloud.mongodb.com/v2/6623bee6440aa14866eca3c7#/clusters/connect?clusterId=Cluster0
  5. goto ---- https://www.npmjs.com/package/dotenv
  6. goto ---- https://www.npmjs.com/package/cors
  7. goto ---- https://www.mongodb.com/docs/drivers/node/current/usage-examples/find


  -----------------
  jwt setup
  -----------------
  8. goto ---- https://jwt.io/libraries?language=Node.js // jwt
  *            https://github.com/auth0/node-jsonwebtoken
  9. goto ---- https://expressjs.com/en/resources/middleware/cookie-parser.html
  10. goto ---- 7 no verify token
  11. goto ---- 
  12. goto ---- 

  -------------------
  stripe js react client
  --------------------------

  13. goto ---- https://github.com/stripe/react-stripe-js
  *             https://docs.stripe.com/stripe-js/react
  *             npm install --save @stripe/react-stripe-js @stripe/stripe-js
        // server
  14. goto ---- https://docs.stripe.com/payments/quickstart
  *             https://docs.stripe.com/payments/payment-intents/verifying-status#checking-status-retrieve
  *             npm install --save stripe
  *             



  * secret key genarate
  require('crypto').randomBytes(64).toString('hex')


  -------------------
  Server Deployment steps
  --------------------------
  *  https://web.programming-hero.com/web-9/video/web-9-61-9-must-watch-update-your-server-deployment-process-in-vercel-part-1
  *  https://github.com/ferdouszihad/car-doctor-deployment

  * https://vercel.com/docs/cli

  Live link:
  waiting