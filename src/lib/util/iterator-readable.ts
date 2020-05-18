/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
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

import {Readable, ReadableOptions} from 'stream';

/**
 * Converts an Iterable into a Readable
 */
export class IterableReader<T> extends Readable {
  private _iterator: Iterator<T>;

  constructor(iterable: Iterable<T>, opts?: ReadableOptions) {
    super(opts);
    this._iterator = iterable[Symbol.iterator]();
  }

  _read(_size: number) {
    try {
      const r = this._iterator.next();
      this.push(r.done ? null : r.value);
    } catch (e) {
      this.emit('error', e);
    }
  }
}