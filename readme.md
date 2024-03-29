# @namefully/react

[![npm version][version-img]][version-url]
[![CI build][ci-img]][ci-url]
[![MIT License][license-img]][license-url]

## Description

[namefully][namefully-url]'s [React](https://reactjs.org/) version.
[Try it live](https://stackblitz.com/edit/namefully-react).

## Installation

```bash
npm i @namefully/react
```

## Peer Dependencies

- React
- namefully ^1.2.0

## Usage

```tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Namefully } from '@namefully/react'

const App = () => (<h1>Hello, <Namefully raw='John Smith'>!</h1>)
ReactDOM.render(<App />, document.getElementById('example'))
```

## Demo

To view a demo:

- clone or download a copy of the repository
- install the dependencies using `npm install`
- finally, run `npm start`

The last command will bootstrap a demo by running a local web server. Use a
browser and type the following web address `localhost:3000` to load the content.

### Read more

As this is a wrapper of the core utility, visit the [main page][namefully-url]
to learn more about its key features, configurations, limitations, and API.

## Author

Developed by [Ralph Florent](https://github.com/ralflorent).

## License

The underlying content of this project is licensed under [MIT](LICENSE).

<!-- References -->
[namefully-url]: https://github.com/ralflorent/namefully
[version-img]: https://img.shields.io/npm/v/@namefully/react
[version-url]: https://www.npmjs.com/package/@namefully/react
[ci-img]: https://github.com/ralflorent/namefully-react/workflows/build/badge.svg
[ci-url]: https://github.com/ralflorent/namefully-react/actions/workflows/config.yml
[license-img]: https://img.shields.io/npm/l/@namefully/react
[license-url]: https://opensource.org/licenses/MIT
