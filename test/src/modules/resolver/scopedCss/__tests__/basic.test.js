/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createElement } from 'lwc';
import Basic from '../basic';

it('component has expected scoped styles', () => {
    const element = createElement('resolver-basic', { is: Basic });
    document.body.appendChild(element);

    if (global['lwc-jest'].nativeShadow) {
        expect(element.shadowRoot.querySelector('style').textContent).toEqual('h1.x-test_basic {color: red;}');
    } else { // synthetic shadow
        expect(document.head.querySelector('style').textContent).toEqual('h1.x-test_basic {color: red;}');
    }
})
