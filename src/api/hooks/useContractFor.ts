import useQuery from './useQuery';

const useContractFor = (symbol: string) => {
    const { data, ...rest } = useQuery('contracts_for', {
        payload: {
            contracts_for: symbol,
            currency: 'USD',
            landing_company: 'svg',
            product_type: 'basic',
        },
    });

    return {
        /** The authorize response. */
        data,
        ...rest,
    };
};

export default useContractFor;
