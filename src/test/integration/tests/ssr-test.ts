/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import { TemplateResult } from 'lit-html';
export interface SSRTest {
  render(...args: any): TemplateResult;
  expectations: Array<{
    /**
     * The arguments to pass to render()
     */
    args: Array<unknown>;
    /**
     * The expected HTML string.
     *
     * Does not need to contain lit-html marker comments, but currently _does_
     * need to contain the SSR marker attributes (__lit-attr) because of an
     * apparent bug in @open-wc/semantic-dom-diff:
     * https://github.com/open-wc/open-wc/issues/1476
     */
    html: string;
  }>;
  /**
   * A list of selectors of elements that should no change between renders.
   * Used to assert that the DOM reused in hydration, not recreated.
   */
  stableSelectors: Array<string>;
}

