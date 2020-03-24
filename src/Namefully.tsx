/**
 * `Namefully`, a person name handler in the Latin alphabet
 *
 * Created on March 22, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
import * as React from 'react';
import {
    Namefully,
    Config, CONFIG, Parser, version,
    Name, Firstname, Lastname, Nama, Fullname, Namon, Prefix, Suffix
} from 'namefully';


/**
 * Set of properties to build a `Namefully` component. In addition, the corresponding
 * html attributes for a given html element can also be set.
 * @interface Props
 * @extends React.AllHTMLAttributes<HTMLElement>
 */
interface Props extends React.AllHTMLAttributes<HTMLElement> {
    /**
     * Holds the raw element to parse or construct the pieces of the partial or
     * full name
     * @type {string | string[] | Name[] | Nama}
     */
    raw: string | string[] | Name[] | Nama;
    /**
     * Optional parameters to configure how to run `Namefully`, i.e., how to create
     * the name parts, their order of appearance and so on.
     * @type {Config}
     */
    options?: Partial<Config>;
    /**
     * Indicates what method of `Namefully` to execute so that the correct information
     * can be display as inner html content.
     */
    method?: keyof Namefully;
    /**
     * The respective arguments for the preset method, if any. Do note that the
     * correct associated argument should be passed to avoid exceptions.
     */
    args?: any[];
    /**
     * Defines which html tag of the set to use to render the namefully content.
     * @type {'div' | 'p' | 'a' | 'span'}, the default one is 'span'
     */
    tag?: 'div' | 'p' | 'a' | 'span';
    /**
     * Where to position a child node with respect to the Namefully's content.
     * @type { 'left' | 'right' }
     */
    position?: 'left' | 'l' | 'right' | 'r';
    /**
     * Children node alongside the Namefully's content
     */
    children?: JSX.Element;
}

/**
 * Make the props of `Namefully` available
 */
export { Props as NamefullyProps };

/**
 * Make the default settings available
 */
export { Config, CONFIG, Parser, version };

/**
 * Make some models of `Namefully` available
 */
export { Name, Firstname, Lastname, Fullname, Prefix, Suffix, Nama, Namon };

/**
 * Namefully, react-based component to handle person names in the Latin alphabet.
 * @function component or presentational react component
 *
 * Namefully does not magically guess which part of the name is what. It relies
 * actually on how the developer indicates the roles of the name parts so that
 * it, internally, can perform certain operations and saves the developer some
 * calculations/processings. Nevertheless, Namefully can be constructed using
 * distinct raw data shape. This is intended to give some flexibility to the
 * developer so that he or she is not bound to a particular data format. Please,
 * do follow closely the APIs to know how to properly use it in order to avoid
 * some errors (mainly validation's).
 *
 * `Namefully` also works like a trap door. Once a raw data is provided and
 * validated, a developer can only ACCESS in a vast amount of, yet effective ways
 * the name info. NO EDITING is possible. If the name is mistaken, a new instance
 * of `Namefully` must be created. Remember, this utility's primary objective is
 * to help to **handle** a person name.
 *
 * Note that the name standards used for the current version of this library are
 * as follows:
 *      [Prefix] Firstname [Middlename] Lastname [Suffix]
 * The opening `[` and closing `]` brackets mean that these parts are optional.
 * In other words, the most basic and typical case is a name that looks like this:
 * `John Smith`, where `John` is the first name and `Smith`, the last name.
 * @see https://departments.weber.edu/qsupport&training/Data_Standards/Name.htm
 * for more info on name standards.
 *
 * **IMPORTANT**: Keep in mind that the order of appearance matters and can be
 * altered through configured parameters, which we will be seeing later on. By
 * default, the order of appearance is as shown above and will be used as a basis
 * for future examples and use cases.
 *
 * Once imported, all that is required to do is to create an instance of
 * `Namefully` and the rest will follow.
 *
 * Some terminologies used across the library are:
 * - namon: piece of a name (e.g., firstname)
 * - nama: pieces of a name (e.g., firstname + lastname)
 *
 * Happy naming!
 */
export default (props: Props): JSX.Element => {
    const { raw, options, method, args, tag, position, children, ...htmlAttrs } = props;

    const name = new Namefully(raw, options);

    const getContent = (context: any, fn: (params?: any) => any, vargs: any[]) => fn.apply(context, vargs);
    const content = getContent(name, name[method || 'full'], args);

    const Tag = tag || 'span';

    if (position === 'left' || position === 'l')
        return <Tag {...htmlAttrs}>{children} {content}</Tag>

    return <Tag {...htmlAttrs}>{content} {children}</Tag>;
}
