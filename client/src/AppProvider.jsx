// import { createContext, useState, useEffect } from "react";
// import axiosInstance from "./axios";

// export const AppContext = createContext();

// export default function AppProvider({ children }) {

//   const [userData, setUserData] = useState(null);

//   useEffect(() => {

//     const fetchData = async () => {

//       const response = await axiosInstance.get("/admin-dashboard/profile/1");

//       if (response.status === 200) {

//         setUserData(response.data);
//         console.log(userData);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <AppContext.Provider value={{ userData }}>{children}</AppContext.Provider>
//   );
// }
