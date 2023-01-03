import * as React from 'react'
import { Namefully, Config, Name, JsonName, Parser } from 'namefully'

/**
 * Set of properties to build a `Namefully` component. In addition, the corresponding
 * html attributes for a given html element can also be set.
 * @interface Props
 * @extends React.AllHTMLAttributes<HTMLElement>
 */
interface Props extends React.AllHTMLAttributes<HTMLElement> {
    /**
     * The raw data to parse or construct a full name.
     * @type {string | string[] | Name[] | Nama}
     */
    raw: string | string[] | Name[] | JsonName | Parser
    /**
     * Optional parameters to configure how to run `namefully`, i.e., how to create
     * the name parts, their order of appearance and so on.
     * @type {Config}
     */
    options?: Partial<Config>
    /**
     * Indicates what method of `Namefully` to execute so that the correct information
     * can be display as inner html content.
     */
    method?: MethodOf<Namefully>
    /**
     * The respective arguments for the preset method, if any. Do note that the
     * correct associated argument should be passed to avoid exceptions.
     */
    args?: any[]
    /**
     * Defines which html tag of the set to use to render the namefully content.
     * @type {'div' | 'p' | 'a' | 'span'}, the default one is 'span'
     */
    tag?: 'div' | 'p' | 'a' | 'span'
    /**
     * Where to position a child node with respect to the Namefully's content.
     * @type { 'left' | 'right' }
     */
    position?: 'left' | 'l' | 'right' | 'r'
    /**
     * Children node alongside the Namefully's content
     */
    children?: JSX.Element
}

/**
 * Namefully, react-based component to handle person names.
 * @function component or presentational react component
 *
 * @usageNotes
 * ```tsx
 *      <Namefully
 *          raw={'Person Name'}
 *          options={{...SomeOptions}}
 *          method={"namefully's method"}
 *          args={['args', 'for', 'method' ...]}
 *          tag={'html tag'}
 *          position={'left or right of children'}
 *
 *          className={'a-class'}
 *          style={{...yourStyles}}
 *          moreHtmlAttrs={}
 *      >
 *          <htmltag>content</htmltag>
 *      </Namefully>
 * ```
 *
 * @example
 * ```tsx
 * import * as React from 'react';
 * import * as ReactDOM from 'react-dom';
 *
 * import { Namefully } from '@namefully/react';
 *
 * const App = () => {
 *     return (
 *         <h1>
 *             Hello, <Namefully raw='John Smith'/>!
 *         </h1>
 *     )
 * };
 *
 * ReactDOM.render(<App />, document.getElementById('example'));
 * ```
 * Happy name-handling!
 */
export default (props: Props): JSX.Element => {
    const { raw, options, method, args, tag, position, children, ...htmlAttrs } = props
    const name = new Namefully(raw, options)
    const content = executeInnerMethod(name, name[method || 'fullName'], args)
    const Tag = tag || 'span'

    if (position === 'left' || position === 'l') {
        return (
            <Tag {...htmlAttrs}>
                {children} {content}
            </Tag>
        )
    }

    return (
        <Tag {...htmlAttrs}>
            {content} {children}
        </Tag>
    )
}

// tslint:disable-next-line
function executeInnerMethod(context: any, fn: Function, args: any[]): string {
    const content = fn.apply(context, args)
    return Array.isArray(content) ? content.join(' ') : content
}

// tslint:disable-next-line
type FilterFunctionKeyOnly<T> = { [K in keyof T]: T[K] extends Function ? K : never }

type MethodOf<T> = FilterFunctionKeyOnly<T>[keyof T]
