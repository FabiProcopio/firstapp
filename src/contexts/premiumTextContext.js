import { createContext, useState } from "react";

export const PremiumTextContext = createContext();

export const UserPText = ({children}) => {
    const [userP, setUserP] = useState(false);

    return (
        <PremiumTextContext.Provider value={{userP, setUserP}}>
            {children}
        </PremiumTextContext.Provider>
    )
}
