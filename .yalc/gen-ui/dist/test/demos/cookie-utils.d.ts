declare const docCookies: {
    getItem: (sKey: string) => NonNullable<string>;
    setItem: (sKey: string, sValue: string, vEnd: any, sPath?: string, sDomain?: string, bSecure?: string) => boolean;
    removeItem: (sKey: string, sPath?: string, sDomain?: string) => boolean;
    hasItem: (sKey: string) => boolean;
    keys: () => Array<string>;
};
export default docCookies;
