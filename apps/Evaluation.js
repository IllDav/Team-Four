import Application from './Application.js';
import InputScreen from './InputScreen.js';

export class Evaluation extends Application {
    constructor(canvas) {
        super(canvas);

        this.initialize();
    }

    initialize() {
        const h11 = document.createElement('h1');
        this.canvas.appendChild(h11);
        h11.textContent = 'Értékelés';
		
		const save = document.createElement('button');
        this.canvas.appendChild(save);
        save.textContent = 'Mentés PDF-ként';
        save.id = 'savePDF';
		
	}

    update() {
        
    }
	
	cleaner(elementID) {
		document.getElementById(elementID).innerHTML = "";
	}
}

export default Evaluation;