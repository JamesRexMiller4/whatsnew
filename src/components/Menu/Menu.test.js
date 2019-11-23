import React from 'react';
import Menu from './Menu';
import {shallow} from 'enzyme';
import local from '../../data/local';

describe('Menu', () => {
    let wrapper, chooseNewsMock;

    beforeEach(() => {
        chooseNewsMock = jest.fn()
        wrapper = shallow(<Menu 
        chooseNews={chooseNewsMock}
        />)
    })
    it('should match the snapshot with all the data passed correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('should trigger the chooseNews method when a button is clicked', () => {
        wrapper.find('#local').simulate('click');
        expect(chooseNewsMock).toHaveBeenCalledWith('local');
    })
})