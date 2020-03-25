# @namefully/react

## Description

[namefully](namefully-url)'s [React](https://reactjs.org/) version.

## WIP

Getting ready for release.

## Installation

```bash
npm i @namefully/react
```

## Dependencies

- namefully ^1.0.6

## Peer Dependencies

- React ^16.12.0

## Usage

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Namefully } from '@namefully/react';

const App = () => {
    return (
        <h1>
            Hello, <Namefully raw='John Smith'/>!
        </h1>
    )
};

ReactDOM.render(<App />, document.getElementById('example'));
```

## Demo

To view a demo:

- clone or download a copy of the repository.
- install the dependencies `npm install`
- finally, run `npm start`

The last command will bootstrap a demo by running a local web server. Use a
browser and type the following web address `localhost:3000` to load the content.

### Read more

As this is a wrapper of the core utility, visit the [main page](namefully-url)
to learn more about its key features, configurations, limitations, and API.

## Author

Developed by [Ralph Florent](https://github.com/ralflorent).

## License

The underlying content of this project is licensed under [GPL-3.0](LICENSE).

[namefully-url]: https://github.com/ralflorent/namefully
