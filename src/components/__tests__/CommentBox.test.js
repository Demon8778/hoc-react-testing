import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
	wrapper = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	wrapper.unmount();
});

it('has a textarea and a button', () => {
	expect(wrapper.find('textarea').length).toBe(1);
	expect(wrapper.find('button').length).toBe(2);
});

describe('the textarea', () => {
	beforeEach(() => {
		wrapper.find('textarea').simulate('change', {
			target: { value: 'new comment' }
		});
		wrapper.update();
	});

	it('has a textarea that user can type in', () => {
		expect(wrapper.find('textarea').prop('value')).toBe('new comment');
	});

	it('should empty out texarea on submiting a form', () => {
		wrapper.find('form').simulate('submit');
		wrapper.update();

		expect(wrapper.find('textarea').prop('value')).toBe('');
	});
});
