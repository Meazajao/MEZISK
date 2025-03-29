import React, { createContext } from 'react'
import all_products from '../Assets/all_product'
 

export const ShopContex = createContext(null)

const ShopContexProvider = (props) => {
   const contextValue = {all_products}
   return (
    <ShopContex.Provider value={contextValue}>
        {props.children}
    </ShopContex.Provider>
   )
}

export default ShopContexProvider
