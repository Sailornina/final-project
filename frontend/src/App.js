import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import StartScreen from "./components/StartScreen";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";


export const App = () => {
  const reducer = combineReducers({
    user: user.reducer
  });
  const store = configureStore({
    // reducer: reducer
    reducer
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={<StartScreen />} />
               <Route 
            path="/Profile"
            element={<Profile/>} />
          <Route
            path="/login"
            element={<Login />} />
             <Route 
            path="/Loading"
            element={<Loading />} />
          <Route 
            path="/not-found"
            element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};