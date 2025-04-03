import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

configure({ adapter: new Adapter() });

describe("Testing the <App /> Component", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("<App /> is rendered without crashing", () => {
    expect(wrapper).to.not.be.an('undefined');  // Correct method for checking undefined
  });

  it("<App /> contains the <Notifications /> Component", () => {
    expect(wrapper.contains(<Notifications />)).toEqual(true);  // Correct method for equality check
  });

  it("<App /> contains the <Header /> Component", () => {
    expect(wrapper.contains(<Header />)).toEqual(true);  // Correct method for equality check
  });

  it("<App /> contains the <Login /> Component", () => {
    expect(wrapper.contains(<Login />)).toEqual(true);  // Correct method for equality check
  });

  it("<App /> contains the <Footer /> Component", () => {
    expect(wrapper.contains(<Footer />)).toEqual(true);  // Correct method for equality check
  });

});
