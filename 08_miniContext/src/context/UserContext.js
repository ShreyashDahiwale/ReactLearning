import React from "react";


// have to create provider with the context. So that each component can have access to the context.
const userContext = React.createContext();

export default userContext;