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
		let osszE = document.getElementById('osszEszk').value;
		let osszF = document.getElementById('osszForr').value;
		
        let ert_net_arb = document.getElementById("ert_net_arb").value; 
        let anyag_kolt = document.getElementById("anyag_kolt").value; 
        let igenybe_szolg = document.getElementById("igenybe_szolg").value; 
        let egyeb_szolg = document.getElementById("egyeb_szolg").value; 
        let anyag_raford = document.getElementById("anyag_raford").value; 
        let szemely_jel_raford = document.getElementById("szemely_jel_raford").value; 
        let uzem_eredmeny = document.getElementById("uzem_eredmeny").value; 
        let ossz_koltseg = document.getElementById("ossz_koltseg").value; 
		
		//Ez már a kiíratás, mindegyik mutatószámhoz kell majd egy label, és egy p, amibe kerül a százalékos érték
		const l1 = document.createElement('label'); //megfelelő tag létrehozása
        this.canvas.appendChild(l1);  //Hozzáfűzás a HTML-hez
        l1.textContent = 'Likviditás I.:';  //Tartalmának megadása
		
		//Itt az értékek kiírása történik, hasonlóan mint felette
		const likv1 = document.createElement('p');
        this.canvas.appendChild(likv1);
		var lik1 = fEszk / rlk;
        likv1.textContent = (lik1 * 100).toFixed(2) + '%';
		
		
		
		
		
		const likv1_text = document.createElement('p');
        this.canvas.appendChild(likv1_text);
		var l1_text = "";
		
		if(lik1 < 0.4){
			l1_text = "bla bla Likviditás rossz"; //ezek helyére egy szebben fogalmazott verzió kerül majd
		}
		else if(lik1 >= 0.4 && lik1 < 0.7){
			l1_text = "bla bla Likviditás elfogadható";
		}
		else{
			l1_text = "bla bla Likviditás jó";
		}
        likv1_text.textContent = l1_text;
		
		
		
		
        
        const l2 = document.createElement('label'); 
        this.canvas.appendChild(l2);
        l2.textContent = 'Likviditás III.:';
        
        const likv3 = document.createElement('p');
        this.canvas.appendChild(likv3);
        likv3.textContent = (((pEszk + ePapir) / rlk)*100).toFixed(2) + '%';  
        //---------------------------------------    
        
        const l3 = document.createElement('label'); 
        this.canvas.appendChild(l3);
        l3.textContent = 'Saját tőke aránya:';
        
        const sta = document.createElement('p');
        this.canvas.appendChild(sta);
        sta.textContent = ((sToke/osszF)*100).toFixed(2) + '%';
        //---------------------------------------     
        
        const l4 = document.createElement('label'); 
        this.canvas.appendChild(l4);
        l4.textContent = 'Idegen tőke aránya:';
        
        const ita = document.createElement('p');
        this.canvas.appendChild(ita);
        ita.textContent = ((kot/sToke)*100).toFixed(2) + '%';  
        //---------------------------------------    
        
        const l5 = document.createElement('label'); 
        this.canvas.appendChild(l5);
        l5.textContent = 'Hosszú távú adósság:';
        
        const hta = document.createElement('p');
        this.canvas.appendChild(hta);
		var h_st = hlk + sToke;
        hta.textContent = ((hlk/(hlk + sToke))*100).toFixed(2) + '%';  
        
        //--------------------------------------- 
        
        const l6 = document.createElement('label'); 
        this.canvas.appendChild(l6);
        l6.textContent = 'Működési profithányad:';
        
        const mph = document.createElement('p');
        this.canvas.appendChild(mph);
        mph.textContent = ((uzem_eredmeny/ert_net_arb)*100).toFixed(2) + '%';  
        
       //---------------------------------------    
        
        const l7 = document.createElement('label'); 
        this.canvas.appendChild(l7);
        l7.textContent = 'Nettó profithányad (ROS):';
        
        const ros = document.createElement('p');
        this.canvas.appendChild(ros);
        ros.textContent = ((aEred/ert_net_arb)*100).toFixed(2) + '%';  
        
        //---------------------------------------    
        
        const l8 = document.createElement('label'); 
        this.canvas.appendChild(l8);
        l8.textContent = 'Eszközarányos adózott eredmény (ROA):';
        
        const roa = document.createElement('p');
        this.canvas.appendChild(roa);
        roa.textContent = ((aEred/osszE)*100).toFixed(2) + '%';  
        
        //---------------------------------------    
        
        const l9 = document.createElement('label'); 
        this.canvas.appendChild(l9);
        l9.textContent = 'Sajáttőke-arányos adózott eredmény (ROE):';
        
        const roe = document.createElement('p');
        this.canvas.appendChild(roe);
        roe.textContent = ((aEred/sToke)*100).toFixed(2) + '%';  
        
        //---------------------------------------    
        
        const l10 = document.createElement('label'); 
        this.canvas.appendChild(l10);
        l10.textContent = 'Árbevétel arányos nyereség:';
        
        const arbev_nyer = document.createElement('p');
        this.canvas.appendChild(arbev_nyer);
        arbev_nyer.textContent = ((aEred/ert_net_arb)*100).toFixed(2) + '%';  
        
        //---------------------------------------    
        
        const l11 = document.createElement('label'); 
        this.canvas.appendChild(l11);
        l11.textContent = 'Anyagjellegű ráfordítások aránya:';
        
        const anyag_rf = document.createElement('p');
        this.canvas.appendChild(anyag_rf);
        anyag_rf.textContent = (((anyag_kolt + igenybe_szolg + egyeb_szolg)/ossz_koltseg)*100).toFixed(2) + '%';
        
        //---------------------------------------    
        
        const l12 = document.createElement('label'); 
        this.canvas.appendChild(l12);
        l12.textContent = 'Személyi jellegű réfordítások:';
        
        const szemelyi_rf = document.createElement('p');
        this.canvas.appendChild(szemelyi_rf);
        szemelyi_rf.textContent =  ((szemely_jel_raford/ossz_koltseg)*100).toFixed(2) + '%';  
        
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