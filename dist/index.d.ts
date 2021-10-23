interface IEl {
    type: string;
    attributes?: string[][] | any;
    ref?: string;
    text?: string;
    children?: IEl[];
}
export default function _createElement(obj: IEl): HTMLElement;

export declare const createElement: typeof _createElement;
