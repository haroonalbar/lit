/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import {createComponent} from '@lit-labs/react';
import {SimpleGreeter} from './simple-greeter';

export default createComponent({
  react: React,
  tagName: 'simple-greeter',
  elementClass: SimpleGreeter,
});
