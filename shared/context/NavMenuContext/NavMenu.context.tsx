import React, { createContext, useState } from "react";

const NavigationMenuContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen: boolean) => {},
});

const NavigationMenuContextProvider = ({ children }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavigationMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </NavigationMenuContext.Provider>
  );
};

export { NavigationMenuContext, NavigationMenuContextProvider };
