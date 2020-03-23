/**
 * Main entrypoint for Namefully
 *
 * Created on March 22, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Namefully from './Namefully';

ReactDOM.render(
    <Namefully
        raw='Florent Ralph Junior'
        options={{ orderedBy: 'lastname'}}
        method='shorten'
        tag='a'

        href='https://github.com/ralflorent'
        style={{color: 'blue'}}
    />,
    document.getElementById('root')
);

