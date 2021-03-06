// Based on: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/test/specs/commonTests/rendersChildren.js
/* global describe, expect, it, mount, shallow */
import React, { createElement } from 'react';
import assertRequiredHelpers from './assertRequiredHelpers';

/**
 * Assert a component renders children somewhere in the tree.
 * @param {React.Component|Function} Component A component that should render children.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export default (Component, options = {}) => {
    const { requiredProps = {} } = options;
    const { assertRequired } = assertRequiredHelpers('rendersChildren', Component);

    assertRequired(Component, 'a `Component`');

    describe('children (common)', () => {
        it('renders child text', () => {
            const text = 'This is a test!&*';
            const wrapper = mount(createElement(Component, requiredProps, text));

            expect(wrapper).to.contain.text(text);
        });

        it('renders child components', () => {
            const child = <div data-child={{ test: 'This is test' }} />;
            const wrapper = shallow(createElement(Component, requiredProps, child));

            expect(wrapper).to.contain(child);
        });

        it('renders child number with 0 value', () => {
            const wrapper = mount(createElement(Component, requiredProps, 0));

            expect(wrapper).to.contain.text('0');
        });
    });
};
