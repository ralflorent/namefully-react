/**
 * `Namefully`, a person name handler in the Latin alphabet
 *
 * Created on March 22, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import * as React from 'react';
import { Namefully, Config, Name, Nama } from 'namefully';

/**
 * @interface Props
 */
interface Props extends React.AllHTMLAttributes<HTMLElement> {
    raw: string | string[] | Name[] | Nama;
    options?: Partial<Config>;
    method?: keyof Namefully;
    args?: any[];
    tag?: 'div' | 'p' | 'a' | 'span';
    position?: 'left' | 'l' | 'right' | 'r';
    children?: JSX.Element;
}

/**
 * Namefully, react-based component to handle person names in the Latin alphabet
 */
export default (props: Props): JSX.Element => {
    const { raw, options, method, args, tag, position, children, ...htmlAttrs } = props;

    const name = new Namefully(raw, options);

    const getContent = (context: any, method: Function, args: any[]) => method.apply(context, args);
    const content = getContent(name, name[method || 'full'], args);

    const Tag = tag || 'span';

    if (position === 'left' || position === 'l')
        return <Tag {...htmlAttrs}>{children} {content}</Tag>

    return <Tag {...htmlAttrs}>{content} {children}</Tag>;
}
