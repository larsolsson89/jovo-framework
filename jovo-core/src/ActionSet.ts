import {Middleware} from "./Middleware";
import {Extensible} from "./Extensible";

/**
 * Set of middlewares predefined for an extensible class
 */
export class ActionSet {

    middleware: Map<string, Middleware> = new Map();

    constructor(names: string[], parent: Extensible) {
        names.forEach((name) => {
            this.create(name, parent);
        });
    }

    /**
     * Returns middleware
     * @param {string} middlewareName
     * @return {Middleware | undefined}
     */
    get(middlewareName: string): Middleware | undefined {
        return this.middleware.get(middlewareName);
    }


    /**
     * Creates meiddleware
     * @param {string} middlewareName
     * @param {Extensible} parent
     * @returns {Middleware}
     */
    create(middlewareName: string, parent: Extensible): Middleware {
        const middleware = new Middleware(middlewareName, parent);
        this.middleware.set(middlewareName, middleware);
        return middleware;
    }
}

