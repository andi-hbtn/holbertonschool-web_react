import { fromJS } from 'immutable';
export default function accessImmutableObject(object, array) {
    // const myKey = array.find((el) => { return el === 'first' });
    return fromJS(object).getIn(array)
}