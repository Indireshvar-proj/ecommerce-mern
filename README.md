# Full-Stack-E-Commerce-MERN-APP -Edunet foundation 
Full Stack E-Commerce MERN APP: 
 
In the week 1

I have created an environment by installing mern technologies using node.js,express.js,reactjs and mondodb for database.

For the week 1 I have developed the frontend environment by creating the landing pages or home page with differnet components like header,category list,category product ,footer,etc

A comprehensive feature-rich e-commerce website developed as a server-client React application, powered by the MERN (MongoDB, Express.js, React.js, Node.js) stack<img height=20px src="https://skillicons.dev/icons?i=react">
<img height=20px src="https://skillicons.dev/icons?i=nodejs">
<img height=20px src="https://skillicons.dev/icons?i=express">
<img height=20px src="https://skillicons.dev/icons?i=mongodb">
<img height=20px src="https://skillicons.dev/icons?i=firebase">
<img height=20px src="https://skillicons.dev/icons?i=js">
This project showcases proficiency in full-stack development, including frontend UI/UX design, backend API development, database management, and integration with external services. <br>.  This project showcases proficiency in full-stack development, including frontend UI/UX design, backend API development, database management, and integration with external services.

I have added the middlewares and route methodology to manage the user roles and admin roles with permissions only the admin can able to add or edit products to the home page.

### 🛒 Key Features:
- **dynamic shopping cart**
- 🖊 **Interactive review system**
- 🗂️ **Organized product listings**
- 💳**Paypal payment process**
- 🔒 **User authentication and authorization**
- 🛠️ **User functionalities**, such as order history, and **admin functionalities** such as real-time metrics (registered users, order count, total money orders), creation, editing, and deletion of products.
<br>

## For week 1:

## 🌟 Frontend Implementation 

The frontend is built using **React.js**, using React features such as hooks (`useState`, `useEffect`), and state management using **Redux**. It includes components and routing to create an interactive user experience.

### Key React features:

1. **React Components**: Utilizes functional components and hooks to manage state and side effects, promoting code reusability and simplification.
2. **Redux State Management**: Manages the global state of the application, including user authentication, product listing, and shopping cart state. Redux Thunk is used for asynchronous operations.
3. **Routing with React Router**: Implements dynamic routing for different parts of the application, including product pages, user login, and the shopping cart.
4. **State Management with useState and useEffect**: Manages local component state and side effects, ensuring components respond to changes in application state efficiently.
5. **Asynchronous Operations with Redux Thunk**: Handles asynchronous logic such as fetching data from the backend.

##  WEEK 2 

## Admin panel and Backend Implementation 🧱
The backend of this e-commerce website is built using **Node.js** and **Express.js**, connecting to **MongoDB Atlas** for database management. It includes secure user authentication with **Firebase** and implements API endpoints to handle various functionalities such as product management, user management, and order processing.

### Key Components of the Backend:
1. **Database Management with MongoDB Atlas**: 🌐
   `MongoDB Atlas` is a cloud-based NoSQL database used to manage the application's data efficiently. The database is designed to handle collections for `products, and orders`.

   - **Orders Collection**: Stores order details including items, shipping address, payment method, and user information.
   - **Products Collection**: Contains product information such as name, category, price, stock status, and reviews.

   **Example Order Document (MongoDB)**
   ```json
   
![mongodb examples](https://github.com/user-attachments/assets/8d140251-c1da-4c5e-b225-28baa62f098b)
# Backend Development
I have used various models schema i.e card products,productmodel,usermodel with Mongodb integration
![mongodb products](https://github.com/user-attachments/assets/12302083-a3a7-4443-b03f-3e3b6865ae3e)

2. **Express.js for API Development**: 🚀
   `Express.js` is used to create a RESTful API to handle `HTTP requests` and responses, ensuring efficient communication between the frontend and the backend. The API endpoints are designed to perform CRUD operations on user, product, and order data.
   
Moreover,I used the permission.js to authorize to edit or add the products for admin only

Added the middleware authtoken to get the tokens stored in the cookies session to restore the user credentials once the user access the database the model.

Apart from this additionally I have added several featureds like filtering the products based on the low to high and high to low prices and also selecting only the desired product items.
# Features included
Added the toast accesibility feature to display the login and logout notification and adding the products to the cart with reactjs toast notification

Used the search section in the header component to search and display the products on the name searched for.

Created a zoom in featue on product images in the product details page for accessing the information and quality of the product in detail

## The week 2 
# Technologies Used 🏆
[![My Skills](https://skillicons.dev/icons?i=js,react,html,css,bootstrap,mongodb,nodejs)](https://skillicons.dev)

### **MERN Stack:**
- [x] **MongoDB:** Efficient and scalable NoSQL database, ensuring robust data storage and retrieval capabilities.
- [x] **Express.js:** Fast and minimalist web framework for Node.js, facilitating the creation of powerful APIs and web applications.
- [x] **React.js:** Dynamic and responsive JavaScript library for building modern and engaging user interfaces, utilizing:
  - [ ] **useState:** React hook for managing state in functional components, enhancing component interactivity and reactivity. ⚛️
  - [ ] **useContext:** React hook for accessing and consuming context values across components, facilitating efficient data sharing. 🔄
  - [ ] **useReducer:** React hook for managing complex state logic with reducer functions, offering a more organized approach to state management. 🔴
- [x] **Node.js:** Lightweight and efficient JavaScript runtime environment, enabling scalable and high-performance server-side execution.

### **Firebase:**
- [x] **Authentication:** Firebase authentication services for secure user authentication and authorization management.
- [x] **Real-time Database:** Firebase real-time database for seamless and synchronized data updates across clients in real-time.

### **HTTP/S Protocols:**
- [x] **Axios:** Promise-based HTTP client for making asynchronous requests to the server, enhancing data fetching and manipulation.
- [x] **AJAX:** Asynchronous JavaScript and XML for making seamless requests to the server without refreshing the entire page.
- [x] **Fetch API:** Modern browser API for fetching resources asynchronously across the network, improving data retrieval efficiency.

### **Payment Processing:**
- [x] **PayPal API:** Integration of PayPal API for secure and reliable payment processing, ensuring seamless transactions for users.

### **Frontend Development:**
- [x] **HTML, CSS, JavaScript:** Foundational technologies for building the frontend interface, providing structure, style, and interactivity to web applications.
- [x] **Bootstrap:** Frontend framework for developing responsive and mobile-first web projects, streamlining the design and layout process and ensuring compatibility across various devices. 🌐
<br>



# Key Features 🎯
- [x] 🏠 **Home Page:** 
  - Lists products to browse and explore.

- [x] 🔍 **Detailed Product View:** 
  - Provides in-depth information about a selected product.

- [x] 📂 **Product Categories:** 
  - Categorizes products for easy navigation.

- [x] 🛒 **Shopping Cart:** 
  - Allows users to add and manage items in their cart.

- [x] 💳 **Order Processing with Invoice:** 
  - Securely handles payment processing invoice using the easyinvoice API for demo purposes.

- [x] 🔐 **Secure User Registration and Login:** 
  - Ensures a safe and secure user authentication system.

- [x] 👩‍💼👨‍💼 **Admin Functionalities:** 
  - Manages 'Products' and 'Orders' lists
  - Features a dashboard displaying real-time metrics: registered users, order count, and financial performance through total money orders.
  - Enables the creation, editing, and deletion of products.

- [x] 👩‍💼 **User Functionalities:** 
  - Accesses order history.
  - Edits user profile.

- [x] 👩🏻‍🤝‍🧑🏻 **About The Team Page:** 
  - Provides information about the development team.   
<br>



# MERN Project Architecture 📁

This repository contains the main files and folder structure for the MERN (MongoDB, Express.js, React.js, Node.js) project.
The app follows a typical MERN architecture where React is used for the front-end, Node.js and Express for the back-end, MongoDB for the database, and JWT for authentication.
These components work together to provide a seamless shopping experience for users while allowing for easy management of products, orders, and user accounts.

## Folder Structure 📁

```
MERN-project/
├── frontend/
│   ├── components/
│   │   ├── AdminEditproduct.js
│   │   ├── AdminProductcart.js
│   │   ├── BannerProduct.js
│   │   ├── categoryList.js
│   │   ├── Categorywiseproduct.js
│   │   ├── changeUserRole.js
│   │   ├── DsiplayImage.js
│   │   ├── UploadProduct.js
│   │   ├── Footer.js
│   │   └── Header.js
│   ├── pages/
│   │   ├── About.js
│   │   ├── Cart.js
│   │   ├── AdminPanel.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── AllProducts.js
│   │   ├── CategoryProduct.js
│   │   ├── searchProduct.js
│   │   └── Signup.js
│   ├── App.js
│   ├── Store.js
│   ├── index.js
│   └── utils.js
├── Backend/
│   ├── models/
│   │   ├── cartProduct.js
│   │   ├── ProductModel.js
│   │   ├── userModel.js
│   ├── config/
│   │   ├── db.js
│   ├── middleware/
│   │   ├── authToken.js
│   ├── helpers/
│   │   ├── permission.js
│   ├── controller/
│   │   ├──product
│   │   ├──user
│   ├── index.js
│   ├── utils.js
│   ├── data.js
└── ...
```

- [x] **backend**: Contains the backend files and resources, following a RESTful architecture.
- [x] **frontend**: Houses the frontend files and components developed with React.js.
- [x] **config**: Stores configuration files for the project, such as database configurations or environment variables.
- [x] **models**: Defines the database models and schemas used in the application.
- [x] **routes**: Contains the route definitions for the API endpoints.
- [x] **controllers**: Includes the controller functions responsible for handling requests and responses.
- [x] **middlewares**: Houses custom middleware functions used in the API.
- [x] **utils**: Stores utility functions and helper modules used throughout the project.
- [x] **public**: Stores any static assets or files served by the backend.
- [x] **views**: Contains server-side views if any, typically used in server-side rendering applications.


## Backend Structure 🧱🔨-

### Server -

- [ ] **`server.js`:** This is the main entry point for the Node.js backend. It initializes Express, connects to MongoDB using Mongoose, defines API routes, and serves the React frontend. It also includes logic for seeding initial data and serving static files.

### Routes -

- [ ] **`orderRoutes.js`,** `productRoutes.js`, `seedRoutes.js`, `userRoutes.js`: These files define the API endpoints and route handlers for managing orders, products, user authentication, and seeding initial data.

### Models -

- [ ] `Order.js`, `Product.js`, `User.js`: These files define the data models using Mongoose, which allow you to interact with MongoDB collections.

### firebase.js -

- [ ] **`firebase.js`:** This file sets up Firebase for authentication and database management in the application. It ensures that the Firebase app is properly configured and ready to use authentication and Firestore services.

### utils.js -

- [ ] **`utils.js`:** This file provides essential utility functions and middleware for user authentication and authorization in the application. It ensures that only authenticated users with the appropriate permissions can access certain routes or perform specific actions.



## Frontend Structure 🖼 -

### Components

- [ ] **`AdminRoute.js`, `CheckoutSteps.js`, `LoadingBox.js`, `MessageBox.js`, `Product.js`, `ProtectedRoute.js`, `Rating.js`, `SearchBox.js`**.

### Screens -

- [ ] **`CartScreen.js`, `DashboardScreen.js`, `HomeScreen.js`, `HowToScreen.js`, `OrderHistoryScreen.js`, `OrderListScreen.js`, `OrderScreen.js`, `PaymentMethodScreen.js`, `PlaceOrderScreen.js`, `ProductEditScreen.js`, `ProductListScreen.js`, `ProductScreen.js`, `ProfileScreen.js`, `SearchScreen.js`, `ShippingAddressScreen.js`, `SigninScreen.js`, `SignupScreen.js`, `AboutUsScreen.js`**.

### app.js -

- `App.js`: This file is the entry point for your React frontend application- controls the frontend structure and behavior. It defines routes using `react-router-dom` for different pages/screens of the application and orchestrates the structure and behavior of your frontend application.

### store.js

- [ ] **`store.js`:** This file defines and manages the application's global state management using React context and reducers. It essentially manages the global state of the application, handling user authentication, cart management, and related operations.

### index.js

- [ ] **`index.js`:** This file serves as the entry point for the React application. It wraps the `<App />` component with providers such as `StoreProvider`, `HelmetProvider`, and `PayPalScriptProvider`.

Here's an example of how HelmetProvider and react-helmet might be use in the app:
```
// Import necessary dependencies
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Wrap your entire application with HelmetProvider in index.js
ReactDOM.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
  document.getElementById('root')
);

// In any component where you want to dynamically change document head elements, use Helmet component
const MyComponent = () => {
  return (
    <div>
      {/* Use Helmet component to set document title */}
      <Helmet>
        <title>My Page Title</title>
        {/* Add other head elements like meta tags */}
        <meta name="description" content="This is my page description" />
      </Helmet>
      {/* Your component JSX */}
      <h1>Hello, World!</h1>
    </div>
  );
};
```

 
## Components vs Screens 🥇 -

### 🗂 Components -

Components are reusable building blocks that encapsulate a piece of UI functionality. They promote code reusability and maintainability by allowing you to create modular pieces of code that can be used across different parts of your application.

### 📁 Screens -

Screens are typically higher-level components that represent entire pages or views within your application. They often contain multiple components and handle more complex logic related to rendering and managing UI state.



<br>


## The application follows these key patterns 🏆 -
THe architecture focuses on structured state management, components, and effective handling of side effects and navigation in a React app.

1. 🚀**State Management:**
   - Uses `useReducer` for organized state management.

2. 🚀**Global State:**
   - Manages global state for properties like `cart`, `userInfo`, `loading`, and `error`.

3. 🚀**Side Effects:**
   - Handles side effects, such as data fetching, with `useEffect`.

4. 🚀**Component Structure:**
   - Organizes the app into modular components, promoting a component-based architecture.

5. 🚀**React Router:**
   - Implements React Router for navigation.

6. 🚀**Conditional Rendering:**
   - Conditionally displays UI elements based on the application's state.

7. 🚀**Authentication Handling:**
   - Manages user authentication through global state.

8. 🚀**Middleware (`logger`):**
   - Uses a middleware function (`logger`) for state change logging.

9. 🚀**RESTful API Calls:**
   - Utilizes Axios for making API calls to a backend server.




<br>









