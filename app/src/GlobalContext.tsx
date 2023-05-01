import React, { createContext, useContext, useEffect } from "react";

// Define the props interface
interface GlobalContextProviderProps {
  children: React.ReactNode;
}
type GlobalState = {
  customerControlState: boolean;
  setCustomerControlState: React.Dispatch<React.SetStateAction<boolean>>;
  camerasControlState: boolean;
  setCamerasControlState: React.Dispatch<React.SetStateAction<boolean>>;
};
const GlobalContext = createContext<GlobalState | undefined>(undefined);

function GlobalContextProvider(props: GlobalContextProviderProps) {
  const [customerControlState, setCustomerControlState] = React.useState(true);
  const [camerasControlState, setCamerasControlState] = React.useState(false);
  useEffect(() => {
  }, [customerControlState]);

  const globalState = {
    setCustomerControlState,
    customerControlState,
    camerasControlState, 
    setCamerasControlState
  };

  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export function useGlobalState() {
  const globalState = useContext(GlobalContext);
  if (!globalState) {
    throw new Error(
      "useGlobalState must be used within a GlobalContextProvider"
    );
  }
  return globalState;
}

export default GlobalContextProvider;
