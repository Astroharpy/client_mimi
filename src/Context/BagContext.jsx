import { createContext } from "react";

const BagContext = createContext()

export const BagProvider = ({children})=>{
    const current = []
    const orders = JSON.parse(localStorage.getItem("orders")) || []
    return  <BagContext.Provider value={current}>
                 {children}
            </BagContext.Provider>
}

export default BagContext;

