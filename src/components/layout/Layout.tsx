import { Fragment, PropsWithChildren, useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import useTicksHistory from 'Api/hooks/useTicksHistory';

type TParams = Parameters<ReturnType<typeof useTicksHistory>['subscribe']>[1];
const Layout = ({ children }: PropsWithChildren) => {
    const [symbol, setSymbol] = useState('R_50');
    const [granularity, setGranularity] = useState<TParams>(undefined);
    const { subscribe, unsubscribe } = useTicksHistory();
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if ('target' in e) {
            if (e.target.name === 'symbol') setSymbol(e.target.value);
            if (e.target.name === 'granularity') setGranularity(Number(e.target.value) as TParams);
        }
    };
    useEffect(() => {
        subscribe(symbol, granularity);
        return () => {
            unsubscribe();
        };
    }, [subscribe, unsubscribe, symbol, granularity]);

    return (
        <Fragment>
            <Header />
            {children}
            <div>
                <label htmlFor='symbol'>Choose a symbol:</label>
                <select name='symbol' onChange={handleChange}>
                    <option value='R_50'>R_50</option>
                    <option value='frxAUDJPY'>frxAUDJPY</option>
                    <option value='R_100'>R_100</option>
                    <option value='audi'>Audi</option>
                </select>
            </div>
            <div>
                <label htmlFor='granularity'>Choose a granularity:</label>
                <select name='granularity' onChange={handleChange}>
                    <option value={undefined}>1 tick</option>
                    <option value={60}>1 min</option>
                    <option value={120}>2 mins</option>
                    <option value={180}>3 mins</option>
                </select>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Layout;
