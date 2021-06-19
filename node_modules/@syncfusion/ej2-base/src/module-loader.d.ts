/**
 * Interface for module declaration.
 */
export interface ModuleDeclaration {
    /**
     * Specifies the args for module declaration.
     */
    args: Object[];
    /**
     * Specifies the member for module declaration.
     */
    member: string;
    /**
     * Specifies whether it is a property or not.
     */
    isProperty?: boolean;
}
export interface IParent {
    [key: string]: any;
}
export declare class ModuleLoader {
    private parent;
    private loadedModules;
    constructor(parent: IParent);
    /**
     * Inject required modules in component library
     * @return {void}
     * @param {ModuleDeclaration[]} requiredModules - Array of modules to be required
     * @param {Function[]} moduleList - Array of modules to be injected from sample side
     */
    inject(requiredModules: ModuleDeclaration[], moduleList: Function[]): void;
    /**
     * To remove the created object while destroying the control
     * @return {void}
     */
    clean(): void;
    /**
     * Removes all unused modules
     * @param {ModuleDeclaration[]} moduleList
     * @returns {void}
     */
    private clearUnusedModule;
    /**
     * To get the name of the member.
     * @param {string} name
     * @returns {string}
     */
    private getMemberName;
    /**
     * Returns boolean based on whether the module specified is loaded or not
     * @param {string} modName
     * @returns {boolean}
     */
    private isModuleLoaded;
}
