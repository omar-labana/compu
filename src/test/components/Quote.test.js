import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Quote from '../../components/Quote';

const stl = () => 'red';
const doNothing = () => '';

describe('Quote Component', () => {
  const wrapper = shallow(<Quote buttonName="1" st={stl} clickHandler={doNothing} />);

  it('exists', () => {
    expect(wrapper.find('Quote')).toBeTruthy();
  });

  it('has to match snap', () => {
    const quote = renderer.create(<Quote />);
    expect(quote).toMatchSnapshot();
  });
});
