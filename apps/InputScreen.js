import Application from './Application.js';
import Evaluation from './Evaluation.js';

export class InputScreen extends Application {
    constructor(canvas) {
        super(canvas);
		
		this.cleaner('appStart');
        this.initialize();
    }

    initialize() {
		
        const h1Elem = document.createElement('h1');
        this.canvas.appendChild(h1Elem);
        h1Elem.textContent = 'Töltsd ki a mérleget és az eredménykimutatást!';
		
		const p1 = document.createElement('p');
        this.canvas.appendChild(p1);
        p1.textContent = '\nItt lesz a mérleg';
		
		const p2 = document.createElement('p');
        this.canvas.appendChild(p2);
        p2.textContent = '\nMellette az eredménykimutatás';
		


        const evaluate = document.createElement('button');
        this.canvas.appendChild(evaluate);
        evaluate.textContent = 'Értékelés';
        evaluate.id = 'eval';
		
		let next;
		const evalButton = document.getElementById('eval');
		evalButton.addEventListener('click', function() {
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