import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  //console.log("COUNT:", count);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)


  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext };
export { ShoppingCartProvider };
