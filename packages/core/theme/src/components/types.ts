export interface StyleNode {
    background?: string;
    text?: string;
    border?: string;
}

export interface SingleStyleNode {
    [key: string]: string | number;
}

export interface ComponentStyles {
    [key: string]: ComponentStyles | StyleNode | SingleStyleNode;
}
