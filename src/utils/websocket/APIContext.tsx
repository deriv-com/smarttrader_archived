import { Dispatch, SetStateAction, createContext } from 'react';
// @ts-expect-error `@deriv/deriv-api` is not in TypeScript, Hence we ignore the TS error.
import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic';

type TSocketConnection = Record<string, DerivAPIBasic>;

type TAPIContext = {
    socketConnection: TSocketConnection;
    setSocketConnection: Dispatch<SetStateAction<TSocketConnection>>;
};

const APIContext = createContext<TAPIContext>({ socketConnection: {}, setSocketConnection: () => {} });

export default APIContext;
