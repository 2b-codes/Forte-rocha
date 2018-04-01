Simple react telephone input
----------------------------

This is a simplified fork of https://github.com/mukeshsoni/react-telephone-input.

```
$ npm install react-telephone-input-simple
```

```js
var ReactTelInput = require('react-telephone-input-simple');
React.render(<ReactTelInput
                defaultCountry="in"
                autoFocus="true"
                placeholder="1 (415) 992-5555"
                onChange={handleInputChange}/>
                onBlur={handleInputBlur}
                document.getElementById('my-container'));
```

## Features
* Automatically format the number as the user types
* Typing a different dial code will automatically update the displayed flag

You can try the app by downloading everything and running the commands given below -

```
$ npm install
$ npm start

go to your browser and type `http://localhost:8000`
```
