/**
 * Namefully's demo
 *
 * Created on March 22, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Namefully } from '../src/index';

import './css/styles.css';

const App = () => {
    return (
        <div className='namefully'>
            <h1>Welcome to Namefully's Demo</h1>
            <Namefully
                raw='Mr Smith John Joe PhD'
                options={{ orderedBy: 'lastname' }}
                method='format'
                args={['O']}
                tag='a'
                position='left'

                href='https://example.com'
                style={{ color: 'blue' }}
            >
                <span>Hi,</span>
            </Namefully>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
