import Application from './Application.js';
import Evaluation from './Evaluation.js';

export class InputScreen extends Application {
    constructor(canvas) {
        super(canvas);
		
        this.initialize();
    }

    initialize() {
		
		divMerleg = document.getElementById('merleg');
		
        const h1Elem = document.createElement('h1');
        this.canvas.appendChild(h1Elem);
        h1Elem.textContent = 'Töltsd ki a mérleget és az eredménykimutatást!';
		
		const p1 = document.createElement('p');
        this.canvas.appendChild(p1);
        p1.textContent = '\nMérleg';
		
		/*Itt kéne láthatóvá tenni a mérleg div-jét
		
		/* const p2 = document.createElement('p');
        this.canvas.appendChild(p2);
        p2.textContent = '\n Itt az eredménykimutatás'; */
		
		

        const evaluate = document.createElement('button');
        this.canvas.appendChild(evaluate);
        evaluate.textContent = 'Értékelés';
        evaluate.id = 'eval';
		
		let next;
		const evalEvent1 = document.getElementById('eval');
		evalButton.addEventListener('click', function() {/*egyszer itt a html-ben megadott inputokat el kéne menteni változókba, vagy itt, vagy az Evaluation.js-ben, ez még nem állt össze});*/
		
		/*ez csak léptet a kövi oldalra*/
		const evalEvent2 = document.getElementById('eval');
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