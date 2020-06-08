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
		
		document.getElementById('eredmenyek').style.display = 'block';

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
		
		
		var lik1 = fEszk / rlk;
		var l1_text = "";

		if(lik1 < 0.4){
			l1_text = "A vállalatnak gondjai lehetnek a tartozások gyors kiegyenlítésével.";
		}
		else if(lik1 >= 0.4 && lik1 < 0.7){
			l1_text = "A vállalat elfogadható mértékben rendelkezik forgóeszközzel ahhoz, hogy törlessze rövid lejáratú kötelezettségeit.";
		}
		else{
			l1_text = "A vállalat fizetőképessége naprakész, likviditása stabil!";
		}
		
		document.getElementById('likvid1Label').innerHTML = 'Likviditás I.';
		document.getElementById('likvid1Value').innerHTML = (lik1 * 100).toFixed(2) + '%';
		document.getElementById('likvid1Valuation').innerHTML = l1_text;


        //---------------------------------------
		
		var lik3 = (+pEszk + +ePapir) / rlk;
		var l3_text = "";

		if(lik3 < 0.4){
			l3_text = "A vállalat a legkönnyebben eladható eszközeivel is nehezen tudja visszafizetni a kötelezettségeit.";
		}
		else if(lik3 >= 0.4 && lik3 < 0.7){
			l3_text = "A likvid fizetőeszközök elfogadható mértékben nyújtanak fedezetet a folyamatosan felmerülő kötelezettségekhez.";
		}
		else{
			l3_text = "A meglévő folyóeszközeiből képes kiegyenlíteni a folyamatosan felmerülő kötelezettségeit.";
		}
		
		document.getElementById('likvid3Label').innerHTML = 'Likviditás III.';
		document.getElementById('likvid3Value').innerHTML = (lik3*100).toFixed(2) + '%';
		document.getElementById('likvid3Valuation').innerHTML = l3_text;
		
        //---------------------------------------

		var s = sToke/osszF;
		var s_text = "";

		if(s < 0.3){
			s_text = "A vállalat nagy mértékben függ az idegen tőkétől!";
		}
		else if(s >= 0.3 && s < 0.6){
			s_text = "A tulajdonosok önfinanszírozó képessége elfogadható mértékű a tőkebiztonság szempontjából.";
		}
		else{
			s_text = "A vállalat nagyrészben saját forrásból finanszírozza az eszközeit, kerülve a tőkéje elidegenedését.";
		}
		
		document.getElementById('staLabel').innerHTML = 'Saját tőke aránya';
		document.getElementById('staValue').innerHTML = (s*100).toFixed(2) + '%';
		document.getElementById('staValuation').innerHTML = s_text;
        //---------------------------------------


		var i = kot/sToke;
		var i_text = "";

		if(i < 0.3){
			i_text = "A vállalat nem különösebben függ a külsőleg bevont tőkétől.";
		}
		else if(i >= 0.3 && i < 0.7){
			i_text = "A vállalat nagyjából egyenlően osztja el a saját és az idegen tőke arányát.";
		}
		else{
			i_text = "Magas az eladósodottság más finanszírozók felé. Érdemes a jövőben mérsékelni a külső források igénybevételét!";
		}
		document.getElementById('itaLabel').innerHTML = 'Idegen tőke aránya';
		document.getElementById('itaValue').innerHTML = (i*100).toFixed(2) + '%';
		document.getElementById('itaValuation').innerHTML = i_text;

        //---------------------------------------


		var ha = hlk/(+hlk + +sToke);
		var ha_text = "";

		if(ha < 0.3){
			ha_text = "A saját tőkéhez képest alacsony a hosszú lejáratú kötelezettségek aránya, kevés a tartozás.";
		}
		else if(ha >= 0.3 && ha < 0.6){
			ha_text = "Érdemes több figyelmet fordítani a vállalat hosszabb távú kölcsöneinek törlesztésére!";
		}
		else{
			ha_text = "A vállalat veszélyes, csődközeli helyzetbe is kerülhet. Érdemes megvizsgálni a felvett hitelek céljait!";
		}
		document.getElementById('htaLabel').innerHTML = 'Hosszú távú adósság';
		document.getElementById('htaValue').innerHTML = (ha*100).toFixed(2) + '%';
		document.getElementById('htaValuation').innerHTML = ha_text;

        //---------------------------------------


		var mp = uzem_eredmeny/ert_net_arb;
		var mp_text = "";

		if(mp < 0.3){
			mp_text = "Egységnyi árbevétel alacsony mértékű eredményt realizál.";
		}
		else if(mp >= 0.3 && mp < 0.6){
			mp_text = "Egységnyi árbevétel elfogadható mértékű eredményt realizál.";
		}
		else{
			mp_text = "Az egységnyi árbevételre vetített jövedelmezőség egészen kedvező.";
		}
		document.getElementById('mphLabel').innerHTML = 'Működési profithányad';
		document.getElementById('mphValue').innerHTML = (mp*100).toFixed(2) + '%';
		document.getElementById('mphValuation').innerHTML = mp_text;

       //---------------------------------------


		var rs = aEred/ert_net_arb;
		var rs_text = "";

		if(rs < 0.3){
			rs_text = "Az összes költség levonása után a jövedelmezőség nem egészen kedvező.";
		}
		else if(rs >= 0.3 && rs < 0.6){
			rs_text = "Adózás és a költségek fizetése után a bevétel mérsékelten jövedelmező.";
		}
		else{
			rs_text = "Az összes bevétel kiemelkedő mértékű profitabilitást mutat a költségek levonása után is.";
		}
		document.getElementById('nphLabel').innerHTML = 'Nettó profithányad';
		document.getElementById('nphValue').innerHTML = (rs*100).toFixed(2) + '%';
		document.getElementById('nphValuation').innerHTML = rs_text;

        //---------------------------------------

		var ra = aEred/osszE;
		var ra_text = "";

		if(ra < 0.3){
			ra_text = "Gyenge az eszközfelhasználás hatékonysága.";
		}
		else if(ra >= 0.3 && ra < 0.6){
			ra_text = "Elfogadható mértékű az eszközfelhasználás hatékonysága.";
		}
		else{
			ra_text = "A vállalat az eszközeit a lehető leghatékonyabban használja fel.";
		}
		document.getElementById('roaLabel').innerHTML = 'Eszközarányos megtérülés';
		document.getElementById('roaValue').innerHTML = (ra*100).toFixed(2) + '%';
		document.getElementById('roaValuation').innerHTML = ra_text;

        //---------------------------------------


		var re = aEred/sToke;
		var re_text = "";

		if(re < 0.3){
			re_text = "A saját tőke alacsony mértékben térül meg, a vállalat hozama túl alacsony.";
		}
		else if(re >= 0.3 && re < 0.6){
			re_text = "A saját tőke elfogadható mértékben térül meg.";
		}
		else{
			re_text = "A vállalat nagy mértékű hozamot biztosított a tulajdonosoknak.";
		}
		document.getElementById('roeLabel').innerHTML = 'Tőkearányos megtérülés';
		document.getElementById('roeValue').innerHTML = (re*100).toFixed(2) + '%';
		document.getElementById('roeValuation').innerHTML = re_text;

        //---------------------------------------


		var any = aEred/ert_net_arb;
		var aany_text = "";

		if(any < 0.3){
			aany_text = "A bevételnek csak kevés százaléka nyereség, nem igazán jövedelmező az értékesítés.";
		}
		else if(any >= 0.3 && any < 0.6){
			aany_text = "Az értékesítés csak mérsékelten volt jövedelmező.";
		}
		else{
			aany_text = "A bevétel majdnem egésze profitként realizálódik.";
		}
		document.getElementById('anyLabel').innerHTML = 'Árbevétel arányos nyereség';
		document.getElementById('anyValue').innerHTML = (any*100).toFixed(2) + '%';
		document.getElementById('anyValuation').innerHTML = aany_text;

        //---------------------------------------

		var arf = (+anyag_kolt + +igenybe_szolg + +egyeb_szolg)/ossz_koltseg;
		var ar_text = "";

		if(arf < 0.3){
			ar_text = "A vállalat viszonylag keveset költött anyagjellegű termékekre!";
		}
		else if(arf >= 0.3 && arf < 0.6){
			ar_text = "Az anyagjellegű ráfordítások közepes mértékben jelentősek az összes költséget tekintve!";
		}
		else{
			ar_text = "Nagy mértékű az anyagjellegű ráfordítások aránya az összes költséghez képest!";
		}
		document.getElementById('ajrLabel').innerHTML = 'Anyagjellegű ráfordítások aránya';
		document.getElementById('ajrValue').innerHTML = (arf*100).toFixed(2) + '%';
		document.getElementById('ajrValuation').innerHTML = ar_text;


        //---------------------------------------

		var szrf = szemely_jel_raford/ossz_koltseg;
		var szr_text = "";

		if(szrf < 0.3){
			szr_text = "A vállalatra nem jellemző a humán erőforrás központú működés!";
		}
		else if(szrf >= 0.3 && szrf < 0.6){
			szr_text = "A személyi jellegű ráfordításokban nincs kiugró érték!";
		}
		else{
			szr_text = "A humán erőforrás költségei nagy részarányt képviselnek az összes költségben!";
		}
		document.getElementById('szjrLabel').innerHTML = 'Személyi jellegű ráfordítások aránya';
		document.getElementById('szjrValue').innerHTML = (szrf*100).toFixed(2) + '%';
		document.getElementById('szjrValuation').innerHTML = szr_text;

	}
}

export default Evaluation;
