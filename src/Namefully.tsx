/**
 * `Namefully`, a person name handler in the Latin alphabet
 *
 * Created on March 22, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import * as React from 'react';
import * as nf from 'namefully';


class Namefully extends React.Component {

    public render(): JSX.Element {
        const name = new nf.Namefully('Ralph Florent')
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Namefully</h1>
                <p> Hello, {name.fn()}!</p>
            </div>
        );
    }

}

export default Namefully;
