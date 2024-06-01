import { StateType, initialState } from "./context";

export function setRegistrationData(
  state: StateType,
  action: { type: string; payload: { country: string; frequency: string } }
) {
  switch (action.type) {
    case "REGISTRATION_DATA":
      return { ...state, registrationData: action.payload };
    default:
      return state;
  }
}