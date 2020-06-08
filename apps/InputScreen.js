import Application from './Application.js';
import Evaluation from './Evaluation.js';


export class InputScreen extends Application {
    constructor(canvas) {
        super(canvas);

        this.initialize();
    }

    initialize() {

      const parent = document.createElement('div');
      parent.className = 'text-center';
      const evaluate = document.createElement('button');
      evaluate.className="btn btn-outline-dark";
      evaluate.textContent = 'Értékelés';
      evaluate.id = 'eval';
      parent.appendChild(evaluate);
      this.canvas.appendChild(parent);

		let next;

		const evalValues = document.getElementById('eval');
		evalValues.addEventListener('click', function() {
		next = new Evaluation(document.getElementById('canvas'));
		});

    }

}

export default InputScreen;
