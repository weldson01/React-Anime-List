import { createContext, useState } from "react";

export const FavoriteAnimesContext = createContext<any>({});

export const FavoriteAnimesContextProvider = ({ children }: any) => {
  const [listAnimesId, setListAnimesId] = useState<any>([]);

  return (
    <FavoriteAnimesContext.Provider value={{ listAnimesId, setListAnimesId }}>
      {children}
    </FavoriteAnimesContext.Provider>
  );
};
