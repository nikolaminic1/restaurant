import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CookiesProvider } from "react-cookie";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/constants";
import "./App.css";
import "./index.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout/CLayout";
import { ConfigProvider } from "antd";
import Home from "./pages/Home";
import Profile from "./pages/auth/Profile";
import Order from "./pages/order/Order";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./pages/auth/Login";
import Restaurant from "./pages/restaurant/Restaurant";
import RestaurantCategories from "./pages/restaurant/RestaurantCategories";
import Products from "./pages/restaurant/Products";
import Product from "./pages/restaurant/Product";
import Orders from "./pages/order/Orders";
import Register from "./pages/auth/Register";

function App() {
  return (
    <ErrorBoundary>
      <CookiesProvider>
        <ConfigProvider theme={{ hashed: false }}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                  <Layout>
                    <Routes>
                      <Route element={<PrivateRoutes />}>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/orders">
                          <Route index={true} element={<Orders />} />
                          <Route path=":id" element={<Order />} />
                        </Route>
                        <Route path="/" element={<Home />} />
                        <Route path="/restaurant" element={<Restaurant />} />

                        <Route
                          path="/categories"
                          element={<RestaurantCategories />}
                        />

                        <Route path="/products">
                          <Route index={true} element={<Products />} />
                          <Route path=":id" element={<Product />} />
                        </Route>
                      </Route>
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                    </Routes>
                  </Layout>
                </BrowserRouter>
              </PersistGate>
            </Provider>
          </ThemeProvider>
        </ConfigProvider>
      </CookiesProvider>
    </ErrorBoundary>
  );
}

export default App;
