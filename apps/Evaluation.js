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

		
		const l1_label = document.createElement('label');
        this.canvas.appendChild(l1_label);
        l1_label.textContent = 'Likviditás I.:'; 
		
		const likv1 = document.createElement('p');
        this.canvas.appendChild(likv1);
		var lik1 = fEszk / rlk;
        likv1.textContent = (lik1 * 100).toFixed(2) + '%';
		
		const likv1_text = document.createElement('p');
        this.canvas.appendChild(likv1_text);
		var l1_text = "";
		
		if(lik1 < 0.4){
			l1_text = "A vállalat likviditása rossz, gondjai lehetnek a tartozások kiegyenlítéseivel.";
		}
		else if(lik1 >= 0.4 && lik1 < 0.7){
			l1_text = "A vállalat elfogadható mértékben rendelkezik forgóeszközzel a rövid kötelezettségekkel szemben.";
		}
		else{
			l1_text = "Jó a vállalat likviditása.";
		}
        likv1_text.textContent = l1_text;
		
		
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
			l3_text = "A vállalat a legkönnyebben eladható eszközeivel nehezen tudja finanszírozni a rövid lej. tartozásait.";
		}
		else if(lik3 >= 0.4 && lik3 < 0.7){
			l3_text = "A likvid fizetőeszközök elfogadható mértékben nyújt fedezetet a rövid lej. kötelezettségekhez.";
		}
		else{
			l3_text = "Az azonnali fizetőképessége a vállalatnak megfelelő mértékű.";
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
			s_text = "A vállalat nagyban függ az idegen tőkétől.";
		}
		else if(s >= 0.3 && s < 0.6){
			s_text = "Elfogadható mértékű az saját tőke aránya.";
		}
		else{
			s_text = "A vállalat nagyrészben saját tőkével finanszírozza az eszközeit. Kicsi az eladósodottság mértéke.";
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
			i_text = "A vállalat nem függ a külső tőkétől.";
		}
		else if(i >= 0.3 && i < 0.7){
			i_text = "A vállalat nagyjából egyenlően osztja el a saját és az idegen tőke arányát.";
		}
		else{
			i_text = "Magas az eladósodottság. Érdemes a jövőben kerülni a külső források igénybevételét.";
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
        
        const roe_label = document.createElement('label'); 
        this.canvas.appendChild(roe_label);
        roe_label.textContent = 'Sajáttőke-arányos adózott eredmény (ROE):';
        
        const roe = document.createElement('p');
        this.canvas.appendChild(roe);
		var re = aEred/sToke;
        roe.textContent = (re*100).toFixed(2) + '%';
		
		const roe_text = document.createElement('p');
        this.canvas.appendChild(roe_text);
		var re_text = "";
		
		if(re < 0.3){
			re_text = "bla bla ROE rossz";
		}
		else if(re >= 0.3 && re < 0.6){
			re_text = "bla bla ROE elfogadható";
		}
		else{
			re_text = "bla bla ROE jó";
		}
        roe_text.textContent = re_text;
		
		
		
        
        //---------------------------------------    
        
        const any_label = document.createElement('label'); 
        this.canvas.appendChild(any_label);
        any_label.textContent = 'Árbevétel arányos nyereség:';
        
        const arbev_nyer = document.createElement('p');
        this.canvas.appendChild(arbev_nyer);
		var any = aEred/ert_net_arb;
        arbev_nyer.textContent = (any*100).toFixed(2) + '%';
		
		const any_text = document.createElement('p');
        this.canvas.appendChild(any_text);
		var aany_text = "";
		
		if(any < 0.3){
			aany_text = "bla bla Árbev Nyer rossz";
		}
		else if(any >= 0.3 && any < 0.6){
			aany_text = "bla bla Árbev Nyer elfogadható";
		}
		else{
			aany_text = "bla bla ÁrbevNyer jó";
		}
        any_text.textContent = aany_text;
		
		
        
        //---------------------------------------    
        
        const ajr_label = document.createElement('label'); 
        this.canvas.appendChild(ajr_label);
        ajr_label.textContent = 'Anyagjellegű ráfordítások aránya:';
        
        const anyag_rf = document.createElement('p');
        this.canvas.appendChild(anyag_rf);
		var arf = (anyag_kolt + igenybe_szolg + egyeb_szolg)/ossz_koltseg;
        anyag_rf.textContent = (arf*100).toFixed(2) + '%';
		
		const ajr_text = document.createElement('p');
        this.canvas.appendChild(ajr_text);
		var ar_text = "";
		
		if(arf < 0.3){
			ar_text = "bla bla ARF kevés";
		}
		else if(arf >= 0.3 && arf < 0.6){
			ar_text = "bla bla ARF közepes";
		}
		else{
			ar_text = "bla bla ARF nagy";
		}
        ajr_text.textContent = ar_text;
		
		
        
        //---------------------------------------    
        
        const szrf_label = document.createElement('label'); 
        this.canvas.appendChild(szrf_label);
        szrf_label.textContent = 'Személyi jellegű réfordítások:';
        
        const szemelyi_rf = document.createElement('p');
        this.canvas.appendChild(szemelyi_rf);
		var szrf = szemely_jel_raford/ossz_koltseg;
        szemelyi_rf.textContent = (szrf*100).toFixed(2) + '%';
		
		const szrf_text = document.createElement('p');
        this.canvas.appendChild(szrf_text);
		var szr_text = "";
		
		if(szrf < 0.3){
			szr_text = "bla bla SZRF kevés";
		}
		else if(szrf >= 0.3 && szrf < 0.6){
			szr_text = "bla bla SZRF közepes";
		}
		else{
			szr_text = "bla bla SZRF nagy";
		}
        szrf_text.textContent = szr_text;
		
		
        
        //---------------------------------------    
            
		//Egyelőre nem fontos
		// const save = document.createElement('button');
        // this.canvas.appendChild(save);
        // save.textContent = 'Mentés PDF-ként';
        // save.id = 'savePDF';
		
	}

    update() {
        
    }
	
	printValuation() {
		document.getElementById(elementID).innerHTML = "";
	}
}

export default Evaluation;