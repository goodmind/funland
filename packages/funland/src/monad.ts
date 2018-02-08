/*!
 * Copyright (c) 2018 by The Funland Project Developers.
 * Some rights reserved.
 *
 * Licensed under the MIT License.
 * See LICENSE file in the project root for full license information.
 */

import { Applicative } from "./applicative"
import { Chain } from "./chain"

interface Monad<F> extends Applicative<F>, Chain<F> {}