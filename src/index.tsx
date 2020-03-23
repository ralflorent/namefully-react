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
        method='format'
        args={['O']}
        tag='a'
        position='left'

        href='https://github.com/ralflorent'
        style={{color: 'blue'}}
    >
        <span>Hi,</span>
    </Namefully>,
    document.getElementById('root')
);

