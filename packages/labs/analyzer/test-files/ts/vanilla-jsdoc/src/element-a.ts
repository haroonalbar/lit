/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A cool custom element.
 *
 * @slot - Description for default slot
 * @slot no-description
 * @slot with-description Description for with-description
 * with wraparound
 * @slot with-description-dash - Description for with-description-dash
 * @cssPart no-description
 * @cssPart with-description Description for :part(with-description)
 * with wraparound
 * @cssPart with-description-dash - Description for :part(with-description-dash)
 * @cssProperty --no-description
 * @cssProperty --with-description Description for --with-description
 * with wraparound
 * @cssProperty --with-description-dash - Description for --with-description-dash
 * @cssProp --short-no-description
 * @cssProp --short-with-description Description for --short-with-description
 * with wraparound
 * @cssProp --short-with-description-dash - Description for --short-with-description-dash
 */
export class ElementA extends HTMLElement {
  /**
   * Class field 1 description
   */
  private field1 = 'default1';

  /**
   * Method 1 description
   */
  method1() {}
}

customElements.define('element-a', ElementA);

/**
 * @description TaggedDescription description. Lorem ipsum dolor sit amet, consectetur
 * adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
 * aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * @summary TaggedDescription summary.
 * @deprecated TaggedDescription deprecated message.
 */
export class TaggedDescription extends HTMLElement {}

/**
 * UntaggedDescription description. Lorem ipsum dolor sit amet, consectetur
 * adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
 * aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 *
 * @deprecated UntaggedDescription deprecated message.
 * @summary UntaggedDescription summary.
 */
export class UntaggedDescription extends HTMLElement {}
