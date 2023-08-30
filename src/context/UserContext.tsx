import React, { Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

  type ContextProviderProps = {
    children: ReactNode;
  };

  interface IContext {
    userData: any,
    selectedTest: any,
    profileData: any,
    setUserData:  Dispatch<SetStateAction<any>>,
    setSelectedTest:  Dispatch<SetStateAction<any>>,
    setProfileData:  Dispatch<SetStateAction<any>>,
  };
  
  const defaultValue = {} as IContext;

  export const UserContext = React.createContext(defaultValue);

  export function useUserContext() {
    return useContext(UserContext);
  };

  function ContextProvider({ children }: ContextProviderProps) {
    const [userData, setUserData] = useState<any>(null);
    const [profileData, setProfileData] = useState<any>(null)
    const [selectedTest, setSelectedTest] = useState<any>(null);

    const contextValues = {
        userData, 
        selectedTest,
        profileData,
        setUserData,
        setSelectedTest,
        setProfileData
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
  };

  export { ContextProvider };