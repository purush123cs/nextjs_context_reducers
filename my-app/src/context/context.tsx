"use client";

import React, { useReducer, createContext, ReactElement } from "react";
import {
  setRegistrationData,
} from "./reducers";
//import { PaymentDataType, RefundRequestResultType } from "@/types";

export type StateType = {
  registrationData: { firstName: string; lastName: string };
};
type ActionType = { type: string; payload: {} | boolean };
type ChildrenType = { children?: ReactElement | undefined | React.ReactNode};

// initial state
export const initialState: StateType = {
  //if state is a complex object, use types.ts file located under src
  registrationData: { firstName: "", lastName: "" },

};

// create context
const Context = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

// combine reducer function
const combineReducers =
  (...reducers: any[]) =>
  (state: StateType, action: ActionType) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

// context provider
const Provider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(
    combineReducers(
      setRegistrationData
    ),
    initialState
  ); // pass more reducers combineReducers(user, blogs, products)
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
