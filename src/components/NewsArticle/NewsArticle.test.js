import React from 'react';
import NewsArticle from './NewsArticle';
import {shallow} from 'enzyme';

describe('NewsArticle', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NewsArticle
            id = {2}
                key = {2}
                image = {'https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376'}
                headline = {'Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner'}
                description = {'The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library. Skeletal wings extend to the side, and it looks downright prehistoric.'}
                url = {'https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/'}
            />)
    })

    it('should match the snapshot with all the data passed through', () => {
        expect(wrapper).toMatchSnapshot()
    })
})