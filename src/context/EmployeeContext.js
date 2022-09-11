import { createContext, useState } from "react";

export const EmployeeContext = createContext([]);

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addUser = (user) => {
    const newEmployees = [...employees, user];
    setEmployees(newEmployees);
  };

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees, addUser }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
