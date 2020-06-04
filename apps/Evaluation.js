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
        
        
        
        
        let ert_net_arb = document.getElementById("ert_net_arb").value; 
        let anyag_kolt = document.getElementById("anyag_kolt").value; 
        let igenybe_szolg = document.getElementById("igenybe_szolg").value; 
        let egyeb_szolg = document.getElementById("egyeb_szolg").value; 
        let anyag_raford = document.getElementById("anyag_raford").value; 
        let szemely_jel_raford = document.getElementById("szemely_jel_raford").value; 
        let uzem_eredmeny = document.getElementById("uzem_eredmeny").value; 
		
        
        const l2 = document.createElement('label'); 
        this.canvas.appendChild(l2);
        l2.textContent = 'Likviditás III.:';
        
        const likv2 = document.createElement('p');
        this.canvas.appendChild(likv2);
        likv2.textContent = (+pEszk + +ePapir)/rlk + '%';  
        //---------------------------------------    
        
    
        const l3 = document.createElement('label'); 
        this.canvas.appendChild(l3);
        l3.textContent = 'Saját tőke aránya (tulajdonosi arány) vagy tőkeellátottság (tőkeerősség).:';
        
        const likv3 = document.createElement('p');
        this.canvas.appendChild(likv3);
        likv3.textContent = sToke/(+sToke + +aEred+ +kot + +hlk + +rlk) + '%';  //nem biztos hogy így kell számolni
        //---------------------------------------     
        
        const l4 = document.createElement('label'); 
        this.canvas.appendChild(l4);
        l4.textContent = 'Idegen tőke saját tőke aránya (kötelzettségek részaránya):';
        
        const likv4 = document.createElement('p');
        this.canvas.appendChild(likv4);
        likv4.textContent = (+kot + +hlk + +rlk)/sToke + '%';  
        //---------------------------------------    
        
        const l5 = document.createElement('label'); 
        this.canvas.appendChild(l5);
        l5.textContent = 'Hosszú távú adósság:';
        
        const likv5 = document.createElement('p');
        this.canvas.appendChild(likv5);
        likv5.textContent = hlk/(+hlk + +sToke) + '%';  
        
        //--------------------------------------- 
        
        const l6 = document.createElement('label'); 
        this.canvas.appendChild(l6);
        l6.textContent = 'Működési profithányad:';
        
        const likv6 = document.createElement('p');
        this.canvas.appendChild(likv6);
        likv6.textContent = uzem_eredmeny/ert_net_arb + '%';  
        
       //---------------------------------------    
        
        const l7 = document.createElement('label'); 
        this.canvas.appendChild(l7);
        l7.textContent = 'Nettó profithányad (Árbevétel-arányos adózott eredmény, ROS):';
        
        const likv7 = document.createElement('p');
        this.canvas.appendChild(likv7);
        likv7.textContent = aEred/ert_net_arb + '%';  
        
        //---------------------------------------    
        
        const l8 = document.createElement('label'); 
        this.canvas.appendChild(l8);
        l8.textContent = 'Eszközarányos adózott eredmény (ROA):';
        
        const likv8 = document.createElement('p');
        this.canvas.appendChild(likv8);
        likv8.textContent = aEred/(+fEszk + +ePapir + +pEszk) + '%';  
        
        //---------------------------------------    
        
        const l9 = document.createElement('label'); 
        this.canvas.appendChild(l9);
        l9.textContent = 'Sajáttőke-arányos adózott eredmény (ROE):';
        
        const likv9 = document.createElement('p');
        this.canvas.appendChild(likv9);
        likv9.textContent = aEred/sToke + '%';  
        
        //---------------------------------------    
        
        const l10 = document.createElement('label'); 
        this.canvas.appendChild(l10);
        l10.textContent = 'Árbevétel arányos nyereség:';
        
        const likv10 = document.createElement('p');
        this.canvas.appendChild(likv10);
        likv10.textContent = aEred/ert_net_arb + '%';  
        
        //---------------------------------------    
        
        const l11 = document.createElement('label'); 
        this.canvas.appendChild(l11);
        l11.textContent = 'Anyagjellegű ráfordítások aránya:';
        
        const likv11 = document.createElement('p');
        this.canvas.appendChild(likv11);
        likv11.textContent = (+anyag_kolt + +igenybe_szolg + +egyeb_szolg)/(+anyag_kolt + +anyag_raford + +szemely_jel_raford) + '%';  //nem biztos hogy csak ennyi
        
        //---------------------------------------    
        
        const l12 = document.createElement('label'); 
        this.canvas.appendChild(l12);
        l12.textContent = 'Hosszú távú adósság:';
        
        const likv12 = document.createElement('p');
        this.canvas.appendChild(likv12);
        likv12.textContent =  szemely_jel_raford/(+anyag_kolt + +anyag_raford + +szemely_jel_raford)+ '%';  
        
        //---------------------------------------    
            
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