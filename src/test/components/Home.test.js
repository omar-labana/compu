import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from '../../components/Home';

const stl = () => 'red';
const doNothing = () => '';

describe('Home Component', () => {
  const wrapper = shallow(<Home buttonName="1" st={stl} clickHandler={doNothing} />);

  it('exists', () => {
    expect(wrapper.find('Home')).toBeTruthy();
  });

  it('has to match snap', () => {
    const home = renderer.create(<Home />);
    expect(home).toMatchSnapshot();
  });
});
