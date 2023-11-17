import { useContext } from 'react';
import APIContext from 'Utils/websocket/APIContext';

const useAPIContext = () => useContext(APIContext);

export default useAPIContext;
