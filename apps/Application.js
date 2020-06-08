/**
 * Base class for applications.
 */
export class Application {
    /**
     * 
     * @param {HTMLElement} canvas Target div
     */
    constructor(canvas) {
        this.canvas = canvas;

    }

    /**
     * @abstract
     */
    initialize() {}

}

export default Application;