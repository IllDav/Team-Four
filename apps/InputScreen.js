import Application from './Application.js';
import Evaluation from './Evaluation.js';


export class InputScreen extends Application {
    constructor(canvas) {
        super(canvas);
		
        this.initialize();
    }

    initialize() {
		
        const evaluate = document.createElement('button');
        this.canvas.appendChild(evaluate);
        evaluate.textContent = 'Értékelés';
        evaluate.id = 'eval';
		
		let next;
		
		const evalValues = document.getElementById('eval');
		evalValues.addEventListener('click', function() {
		next = new Evaluation(document.getElementById('canvas'));
		});
		
    }
	
	update() {
	}
	
	cleaner(elementID){
		document.getElementById(elementID).innerHTML = "";
	}
}

export default InputScreen;