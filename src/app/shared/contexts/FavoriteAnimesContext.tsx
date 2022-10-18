import { createContext, useEffect, useState } from "react";

export const FavoriteAnimesContext = createContext<any>({});

export const FavoriteAnimesContextProvider = ({ children }: any) => {
  const [listAnimesId, setListAnimesId] = useState<[{}]>([{}]);
  useEffect(() => {
    setListAnimesId(() => {
      const data = localStorage.getItem("lista");
      if (data) {
        return JSON.parse(data);
      }
    });
  }, []);
  return (
    <FavoriteAnimesContext.Provider value={{ listAnimesId, setListAnimesId }}>
      {children}
    </FavoriteAnimesContext.Provider>
  );
};
