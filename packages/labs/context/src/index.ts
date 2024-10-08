/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

export {
  ContextCallback,
  ContextRequestEvent as ContextEvent,
} from './lib/context-request-event.js';

export {
  Context,
  ContextKey,
  ContextType,
  createContext,
} from './lib/create-context.js';

export {ContextConsumer} from './lib/controllers/context-consumer.js';
export {ContextProvider} from './lib/controllers/context-provider.js';
export {ContextRoot} from './lib/context-root.js';

export {provide} from './lib/decorators/provide.js';
export {consume} from './lib/decorators/consume.js';

import {provide} from './lib/decorators/provide.js';
import {consume} from './lib/decorators/consume.js';

/**
 * @deprecated use `provide` instead
 */
export const contextProvider = provide;

/**
 * @deprecated use `consume` instead
 */
export const contextProvided = consume;
