import { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [filter, setFilter] = useState("");
  const [productFilter, setProductFilter] = useState("");
  const [search, setSearch] = useState("");
  const [productSearch, setProductSearch] = useState("");

  const values = {
    auth,
    setAuth,
    filter,
    setFilter,
    productFilter,
    setProductFilter,
    search,
    setSearch,
    productSearch,
    setProductSearch,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
