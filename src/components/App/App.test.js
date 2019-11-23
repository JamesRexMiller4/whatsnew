import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import local from '../../data/local';
import science from '../../data/science';

describe('App', () => {
  let wrapper, data;

  beforeEach(() => {
    data = local;
    wrapper = shallow(<App />)
    wrapper.setState({displayNews: data})
  })

  it('should match the snapshot with all the data passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have its state assigned to the appropriate data', () => {
    expect(wrapper.state('displayNews')).toEqual(data)
  })

  describe('Methods', () => {
    
    it('should be able to choose a dataset of news results to display', () => {
      expect(wrapper.state('displayNews')).toEqual(data)
      wrapper.instance().chooseNews('science')
      expect(wrapper.state('displayNews')).toEqual(science)
    })

    it('should be able to filter results based on a search query', () => {
      const query = {query: 'Who'}
      expect(wrapper.state('displayNews')).toEqual(data)
      wrapper.instance().filterNews(query)
      expect(wrapper.state('displayNews')).toEqual([{
        id: 1,
        headline: 'The Who postpones Denver Concert at the Pepsi Center',
        img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
        description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
        url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
      }])
    })
  })
})