import { createContext, useState } from "react";

const EmployeeContext = createContext([]);

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
