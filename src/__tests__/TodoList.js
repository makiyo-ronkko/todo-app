import React from 'react';
import { TodoList } from '../TodoList';
import Todo from '../Todo';
import { REACT_TODO_TITLE } from '../constants';

import { shallow, mount } from 'enzyme';

// suit
describe('renders the correct content', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<TodoList />);
	});

	it('h1 text is REACT TODO LIST', () => {
		expect(wrapper.find('h1').text()).toContain(REACT_TODO_TITLE);
	});

	it('Loads a ul element', () => {
		expect(wrapper.find('ul')).toHaveLength(1);
	});
	it('Loads a ul element', () => {
		expect(wrapper.find('ul').length).toBe(1);
	});

	it('TodoList component should have a result container', () => {
		const wrapper = mount(<Todo />);
		const resultContainer = wrapper.find('.isCompleted');
		// console.log(wrapper.debug());
		expect(resultContainer).toHaveLength(1);
	});
});

// suit
describe('Landing page interaction with user', () => {});
