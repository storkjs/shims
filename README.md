# data-grid

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/storkjs/shims/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/storkjs/shims.svg)](https://github.com/storkjs/shims/issues)
[![Bower version](https://badge.fury.io/bo/shims.svg)](https://github.com/storkjs/shims/releases)

**What is it?**
Essential shims and polyfills for general usage and for IE11 compatibility. Made for StorkJS components.

**Why?**
Why does IE even exists? No one knows..

### Shims & Polyfills
_CustomEvent_: Adds CustomEvent for IE (9-11).

_isInteger_: Adds Number.isInteger for IE.

_keyboardMap_: A useful array of all keyboard key names ordered by their keyCode.

_getCoordinates_: Adds a new method on _Element_'s prototype. This method returns an object with the general position of the element (x & y).

_index_: Adds a new property on _Element_'s prototype. This property returns the index of the element in its parent's children.