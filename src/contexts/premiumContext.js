import { createContext, useState } from "react";

export const PremiumContext = createContext();

export const UserTier = ({ children }) => {
    const [tier, setTier] = useState(false);

    return (
        <PremiumContext.Provider value={{tier, setTier}}>
            {children}
        </PremiumContext.Provider>
    )
 }