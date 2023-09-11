import { createContext } from "react";

const ShppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
 const ShppingCartProvider = ({ children }) => {
    return (
        <ShppingCartContext.Provider>
            { children }
        </ShppingCartContext.Provider>
        
    )
}

export { ShppingCartProvider }