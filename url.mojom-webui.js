// mojom-webui/url/mojom/url.mojom-webui.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import {mojo} from '//resources/mojo/mojo/public/js/bindings.js';



/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const UrlSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    UrlSpec.$,
    'Url',
    [
      mojo.internal.StructField(
        'url', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0),
    ],
    [[0, 16],]);



/**
 * @record
 */
export class Url {
  constructor() {
    /** @type { !string } */
    this.url;
  }
}

