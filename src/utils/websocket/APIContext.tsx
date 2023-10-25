import { createContext } from 'react';
// @ts-expect-error `@deriv/deriv-api` is not in TypeScript, Hence we ignore the TS error.
import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic';

const APIContext = createContext<Record<string, DerivAPIBasic> | null>(null);

export default APIContext;
