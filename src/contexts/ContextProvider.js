import React, { useContext, useState } from "react";

/* ------------------------------------------------------ */

const Context = React.createContext({
  activeMenu: false,
});

const nav_inital_state = {
  home: false,
  pages: false,
  portfolio: false,
  elements: false,
  blog: false,
  features: false,
  shop: false,
};

/* ------------------------------------------------------ */
export const ContextProvider = ({ children }) => {
  // const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(false);
  const [navIsShow, setNavIsShow] = useState(true);
  const [navState, setNavState] = useState(nav_inital_state);

  const handleNavState = (state) => {
    if (navState[state]) {
      setNavState(nav_inital_state);
      return false;
    }
    setNavState({ ...nav_inital_state, [state]: true });
  };

  return (
    <Context.Provider
      value={{
        activeMenu,
        setActiveMenu,
        handleNavState,
        navState,
        setNavState,
        navIsShow,
        setNavIsShow,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  const state = useContext(Context);
  return state;
};
