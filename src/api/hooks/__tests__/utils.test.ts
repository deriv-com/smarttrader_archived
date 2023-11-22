import { getQueryKeys } from '../utils';

describe('getQueryKeys', () => {
    it('returns only name if props are undefined', () => {
        const name = 'test';
        const result = getQueryKeys(name);
        expect(result).toEqual([name]);
    });
    it('removes req_id and name property if it exists with a value of 1', () => {
        const name = 'test';
        const props = {
            req_id: 1,
            [name]: 1,
            otherProp: 'value',
        };
        const result = getQueryKeys(name, props);
        expect(result).toEqual([name, '{"otherProp":"value"}']);
    });
    it('returns [name] if props contain other properties but not req_id or name with value 1', () => {
        const name = 'test';
        const props = {
            [name]: 2,
            prop1: 'value1',
            prop2: 'value2',
        };
        const expectedQueryProps = '{"prop1":"value1","prop2":"value2","test":2}';
        const expectedResult = [name, expectedQueryProps];
        const result = getQueryKeys(name, props);
        expect(result).toEqual(expectedResult);
    });
    it('returns [name, query_props] if props contain properties other than req_id and name with value 1', () => {
        const name = 'test';
        const props = {
            prop2: 'value2',
            prop1: 'value1',
        };
        const expectedQueryProps = JSON.stringify({
            prop1: 'value1',
            prop2: 'value2',
        });
        const expectedResult = [name, expectedQueryProps];
        const result = getQueryKeys(name, props);
        expect(result).toEqual(expectedResult);
    });
});
