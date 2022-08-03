/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createElement } from 'lwc'
import { library } from './library'
import Component from './component'

jest.mock('./library')

it('can mock a library', () => {
    library.mockImplementation(() => {})
    console.log(library())
    createElement('x-foo', { is: Component })
});
