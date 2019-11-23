import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';

describe('Header', () => {

    let wrapper, mockFilterNews;

    beforeEach(() => {
        mockFilterNews = jest.fn()
        wrapper = shallow(<Header filterNews = {mockFilterNews}/>)
        wrapper.setState({query: ''})
    })

    it('should match the snapshot with all the data passed correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should have its state assigned to the appropriate data', () => {
        expect(wrapper.state('query')).toEqual('')
    })

    describe('Methods', () => {

        it('should be able set the components state after an onChange event', () => {
            const mockEvent = {target: {value: 'NASA'}}
            const expected = 'NASA'
            wrapper.instance().handleChange(mockEvent)
            expect(wrapper.state('query')).toEqual(expected)
        })

        it('should trigger the filterNews method on a click event, and reset the state of the header component', () => {
            const mockQuery = {query: 'NASA'}
            const mockSubmitQuery = jest.fn()
            wrapper.setState({query: 'NASA'})
            expect(wrapper.state('query')).toEqual('NASA')
            wrapper.find('.search-bar-btn').simulate('click')
            expect(mockSubmitQuery).toHaveBeenCalled()
            expect(mockFilterNews).toHaveBeenCalledWith(mockQuery)
        })
    })
})