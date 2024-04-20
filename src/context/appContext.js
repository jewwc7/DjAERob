import {createContext} from 'react';

const AppContext = createContext(null);
AppContext.displayName = 'CONTEXTPROVIDER!'

export default AppContext;