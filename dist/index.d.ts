interface IEl {
    type: string;
    attributes?: string[][] | any;
    ref?: string;
    text?: string;
    children?: IEl[];
}
export default function createElement(obj: IEl): HTMLElement;

export declare const _default: {
    createElement: typeof createElement;
};
export default _default;
