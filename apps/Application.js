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

        // Clean canvas before loading app
        while (canvas.lastChild) {
            canvas.removeChild(canvas.lastChild);
        }
    }

    /**
     * @abstract
     */
    initialize() {}

    /**
     * @abstract
     */
    update() {}
}

export default Application;