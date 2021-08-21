import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Calculator from '../../components/Calculator';

describe('Calculator Component', () => {
  const wrapper = shallow(<Calculator />);

  it('exists', () => {
    expect(wrapper.find('Calculator')).toBeTruthy();
  });

  it('has to match snap', () => {
    const calc = renderer.create(<Calculator />);
    expect(calc).toMatchSnapshot();
  });
});
