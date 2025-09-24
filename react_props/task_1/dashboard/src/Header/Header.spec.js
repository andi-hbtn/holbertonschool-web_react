import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
    it('should render the Holberton logo', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img').prop('alt')).toBe('Holberton logo');
    });

    it('should render the heading with the correct text', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1').text()).toBe('School dashboard');
    });
});
