import Application from './Application.js';
import InputScreen from './InputScreen.js';

export class Evaluation extends Application {
    constructor(canvas) {
        super(canvas);

        this.initialize();
    }

	//Amint rányomunk az Értékelés gombra, ez a függvény fut le
    initialize() {
		document.getElementById('eval').style.display = 'none';
		
        const h11 = document.createElement('h1');
        this.canvas.appendChild(h11);
        h11.textContent = 'Értékelés';
		
		//Itt létrehozzuk a változókat, és egyenlővé tesszük a megfelelő input mezőbe írt értékekkel
		let fEszk = document.getElementById('forgEszk').value;   //változó = input a html-ből
		let ePapir = document.getElementById('ertPap').value;
		let pEszk = document.getElementById('penzEszk').value;
		let sToke = document.getElementById('sajToke').value;
		let aEred = document.getElementById('adEredm').value;
		let kot = document.getElementById('kotel').value;
		let hlk = document.getElementById('hosszLejKot').value;
		let rlk = document.getElementById('rovLejKot').value;
		
		//Ez már a kiíratás, mindegyik mutatószámhoz kell majd egy label, és egy p, amibe kerül a százalékos érték
		const l1 = document.createElement('label'); //megfelelő tag létrehozása
        this.canvas.appendChild(l1);  //Hozzáfűzás a HTML-hez
        l1.textContent = 'Likviditás I.:';  //Tartalmának megadása
		
		//Itt az értékek kiírása történik, hasonlóan mint felette
		const likv1 = document.createElement('p');
        this.canvas.appendChild(likv1);
        likv1.textContent = (((fEszk / rlk).toFixed(4))*100) + '%';
		
		
		//Egyelőre nem fontos
		// const save = document.createElement('button');
        // this.canvas.appendChild(save);
        // save.textContent = 'Mentés PDF-ként';
        // save.id = 'savePDF';
		
	}

    update() {
        
    }
	
	cleaner(elementID) {
		document.getElementById(elementID).innerHTML = "";
	}
}

export default Evaluation;