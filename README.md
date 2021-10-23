# @tamb./utils

Utils I use


## createElement
a simple create element function

## Installation 
```js
import {createElement} from "@tamb/utils";
```

### Usage
```js
createElement({
    type: "div",
    text: "My text",
    attributes: [["id", "yoyo"], ["classes": ["my", "many", "classes"]]],
    children: {
        ...repeat
    },
    ref: "myRefName"
})
```

### refs
If you use `.call` and bind to an object you can create a ref as a field name in that object
```js
const x = {};

createElement.call(x, {
    type: "div",
    ref: "hey"
});

x.hey// will be your div
```

### inserting
```js
document.body.appendElement(createElement({type: "div"}));
```