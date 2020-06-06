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
		const l1_label = document.createElement('label'); //megfelelő tag létrehozása
        this.canvas.appendChild(l1_label);  //Hozzáfűzás a HTML-hez
        l1_label.textContent = 'Likviditás I.:';  //Tartalmának megadása
		
		//Itt az értékek kiírása történik, hasonlóan mint felette
		const likv1 = document.createElement('p');
        this.canvas.appendChild(likv1);
		var lik1 = fEszk / rlk;
        likv1.textContent = (lik1 * 100).toFixed(2) + '%';
		
		const likv1_text = document.createElement('p');
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
        this.canvas.appendChild(likv1_text);
		
        //---------------------------------------   
		
        const l3_label = document.createElement('label'); 
        this.canvas.appendChild(l3_label);
        l3_label.textContent = 'Likviditás III.:';
        
        const likv3 = document.createElement('p');
        this.canvas.appendChild(likv3);
		var lik3 = (pEszk + ePapir) / rlk;
        likv3.textContent = (lik3*100).toFixed(2) + '%';  
		
		const likv3_text = document.createElement('p');
		var l3_text = "";
		
		if(lik3 < 0.4){
			l3_text = "bla bla Likviditás rossz";
		}
		else if(lik3 >= 0.4 && lik3 < 0.7){
			l3_text = "bla bla Likviditás elfogadható";
		}
		else{
			l3_text = "bla bla Likviditás jó";
		}
        likv3_text.textContent = l3_text;
        this.canvas.appendChild(likv3_text);
        //---------------------------------------    
        
        const sta_label = document.createElement('label'); 
        this.canvas.appendChild(sta_label);
        sta_label.textContent = 'Saját tőke aránya:';
        
        const sta = document.createElement('p');
        this.canvas.appendChild(sta);
		var s = sToke/osszF;
        sta.textContent = (s*100).toFixed(2) + '%';
		
		const sta_text = document.createElement('p');
        this.canvas.appendChild(sta_text);
		var s_text = "";
		
		if(s < 0.3){
			s_text = "bla bla STA rossz";
		}
		else if(s >= 0.3 && s < 0.6){
			s_text = "bla bla STA elfogadható";
		}
		else{
			s_text = "bla bla STA jó";
		}
        sta_text.textContent = s_text;
        //---------------------------------------     
        
        const ita_label = document.createElement('label'); 
        this.canvas.appendChild(ita_label);
        ita_label.textContent = 'Idegen tőke aránya:';
        
        const ita = document.createElement('p');
        this.canvas.appendChild(ita);
		var i = kot/sToke;
        ita.textContent = (i*100).toFixed(2) + '%';

		const ita_text = document.createElement('p');
        this.canvas.appendChild(ita_text);
		var i_text = "";
		
		if(i < 0.3){
			i_text = "bla bla ITA jó";
		}
		else if(i >= 0.3 && i < 0.7){
			i_text = "bla bla ITA elfogadható";
		}
		else{
			i_text = "bla bla ITA rossz";
		}
        ita_text.textContent = i_text;
		
        //---------------------------------------    
        
        const hta_label = document.createElement('label'); 
        this.canvas.appendChild(hta_label);
        hta_label.textContent = 'Hosszú távú adósság:';
        
        const hta = document.createElement('p');
        this.canvas.appendChild(hta);
		var ha = hlk/(hlk + sToke);
        hta.textContent = (ha*100).toFixed(2) + '%';  
        
		const hta_text = document.createElement('p');
        this.canvas.appendChild(hta_text);
		var ha_text = "";
		
		if(ha < 0.3){
			ha_text = "bla bla HTA jó";
		}
		else if(ha >= 0.3 && ha < 0.6){
			ha_text = "bla bla HTA elfogadható";
		}
		else{
			ha_text = "bla bla HTA rossz";
		}
        hta_text.textContent = ha_text;
		
        //--------------------------------------- 
        
        const mph_label = document.createElement('label'); 
        this.canvas.appendChild(mph_label);
        mph_label.textContent = 'Működési profithányad:';
        
        const mph = document.createElement('p');
        this.canvas.appendChild(mph);
		var mp = uzem_eredmeny/ert_net_arb;
        mph.textContent = (mp*100).toFixed(2) + '%';  
		
		const mph_text = document.createElement('p');
        this.canvas.appendChild(mph_text);
		var mp_text = "";
		
		if(mp < 0.3){
			mp_text = "bla bla MPH rossz";
		}
		else if(mp >= 0.3 && mp < 0.6){
			mp_text = "bla bla MPH elfogadható";
		}
		else{
			mp_text = "bla bla MPH jó";
		}
        mph_text.textContent = mp_text;
        
       //---------------------------------------    
        
        const ros_label = document.createElement('label'); 
        this.canvas.appendChild(ros_label);
        ros_label.textContent = 'Nettó profithányad (ROS):';
        
        const ros = document.createElement('p');
        this.canvas.appendChild(ros);
		var rs = aEred/ert_net_arb;
        ros.textContent = (rs*100).toFixed(2) + '%';
		
		const ros_text = document.createElement('p');
        this.canvas.appendChild(ros_text);
		var rs_text = "";
		
		if(rs < 0.3){
			rs_text = "bla bla ROS rossz";
		}
		else if(rs >= 0.3 && rs < 0.6){
			rs_text = "bla bla ROS elfogadható";
		}
		else{
			rs_text = "bla bla ROS jó";
		}
        ros_text.textContent = rs_text;
        
        //---------------------------------------    
        
        const roa_label = document.createElement('label'); 
        this.canvas.appendChild(roa_label);
        roa_label.textContent = 'Eszközarányos adózott eredmény (ROA):';
        
        const roa = document.createElement('p');
        this.canvas.appendChild(roa);
		var ra = aEred/osszE;
        roa.textContent = (ra*100).toFixed(2) + '%'; 

		const roa_text = document.createElement('p');
        this.canvas.appendChild(roa_text);
		var ra_text = "";
		
		if(ra < 0.3){
			ra_text = "bla bla ROA rossz";
		}
		else if(ra >= 0.3 && ra < 0.6){
			ra_text = "bla bla ROA elfogadható";
		}
		else{
			ra_text = "bla bla ROA jó";
		}
        roa_text.textContent = ra_text;
        
        //---------------------------------------    
        
        const l9 = document.createElement('label'); 
        this.canvas.appendChild(l9);
        l9.textContent = 'Sajáttőke-arányos adózott eredmény (ROE):';
        
        const roe = document.createElement('p');
        this.canvas.appendChild(roe);
		var re = aEred/sToke;
        roe.textContent = (re*100).toFixed(2) + '%';
		
		
		
		
		
        
        //---------------------------------------    
        
        const l10 = document.createElement('label'); 
        this.canvas.appendChild(l10);
        l10.textContent = 'Árbevétel arányos nyereség:';
        
        const arbev_nyer = document.createElement('p');
        this.canvas.appendChild(arbev_nyer);
		var any = aEred/ert_net_arb;
        arbev_nyer.textContent = (any*100).toFixed(2) + '%';
		
		
		
		
        
        //---------------------------------------    
        
        const l11 = document.createElement('label'); 
        this.canvas.appendChild(l11);
        l11.textContent = 'Anyagjellegű ráfordítások aránya:';
        
        const anyag_rf = document.createElement('p');
        this.canvas.appendChild(anyag_rf);
		var arf = (anyag_kolt + igenybe_szolg + egyeb_szolg)/ossz_koltseg;
        anyag_rf.textContent = (arf*100).toFixed(2) + '%';
		
		
		
		
        
        //---------------------------------------    
        
        const l12 = document.createElement('label'); 
        this.canvas.appendChild(l12);
        l12.textContent = 'Személyi jellegű réfordítások:';
        
        const szemelyi_rf = document.createElement('p');
        this.canvas.appendChild(szemelyi_rf);
		var szrf = szemely_jel_raford/ossz_koltseg;
        szemelyi_rf.textContent = (szrf*100).toFixed(2) + '%';
		
		
		
		
        
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