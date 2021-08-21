import React from 'react';
import '@testing-library/jest-dom';
import Button from '../../components/Button';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

const stl = () => 'red';
const doNothing = () => ''

describe('Button Component', () => {
    let wrapper;
    wrapper = shallow(<Button buttonName="1" st={stl} clickHandler={doNothing} />);

    it('exists', () => {
        expect(wrapper.find('button')).toBeTruthy();
    });

    it('has correct props', () => {
        const propa = wrapper.props()
        expect(propa.type).toBe("button")
        expect(propa.name).toBe("button")
        expect(propa.className).toBe("red")
    });

    it('has to match snap', () => {
        const button = renderer.create(<Button buttonName="1" st={stl} clickHandler={doNothing} />);
        expect(button).toMatchSnapshot();
    });
})