	var myVar;
	var myVoid;
	var mySet;
	var myNum;
	var myRing1;
	var myRing2;
	var myRing3;
	var myRing4;
	// To set the date.
	setInterval(myDate, 1000);
	function myDate() {
	var z = new Date;
	var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	var y = z.getHours();
	var x = z.getMinutes();
	var v = days[z.getDay()];
	time.innerHTML = y + ':' + x + v;
}
// To start or open the mobile phone.
		var a = 1;
	function openMe() {
		if (a == 1) {
		img.style.display = "block";
		box2.style.display = "none";
		a = 2;
	}
		else {
			img.style.display = "none";	
			box2.style.display = "none";
			a = 1;	
		}
	}
	// To go back to the previous Icon.
	function prevIcon() {
		icon1.style.display = 'none'
		icons.style.display = 'block';
	}
	// To go to the next set of Icons
	function nextMe() {
		icons.style.display = 'none'
		icon1.style.display = 'block'
	}
	// To go back to Home
	function goBack() {
		icons.style.display = 'none'
		img.style.display = 'block'
	}
	// To display first set of icon.
	function iconMe() {
		icons.style.display = 'block'
		img.style.display = 'none'
	}
	// To go back to home from the calling area.
	function backMe() {
		icons.style.display = 'none'
		icon1.style.display = 'none'
		response.style.display = "none";
		img.style.display = "block";
		callcenter.style.display = "none"
		box2.style.display = "none";
		optcall.style.display = "none";
		plswait.style.display = "none";
		display.value = '';
	}
	// To display the where to perform the all calls
	function callUs() {
		callcenter.style.display = 'block'
		img.style.display = "none";
		box2.style.display = "block";
	}
	// Works for all buttons on the call area
	function myButton(num) {
		display.value += num;
	}
	// To delete a previously typed number
	function delMe() {
		display.value = display.value.slice(0,-1);
	}
	// To buy cards
	var arr;
	var card;
	function buyCard() {
		 arr = {network: net.value, amount: amnt.value, rechargecard: Math.floor(Math.random() * '000011129874267418129'), loaded: 'No'};
			 if (!localStorage.hasOwnProperty('myCard')) {
			localStorage.myCard = JSON.stringify([]);
		}
		  card = JSON.parse(localStorage.myCard);
		card.push(arr);
			localStorage.myCard= JSON.stringify(card);
			 alert('Card bought successfully. Pls click on the next button to see your card');
	}
	// To see the card bought
	function collectCard() {
		var c = '';
		let b = JSON.parse(localStorage.getItem('myCard'));
		c += '<table border="2px solid black" background-color="red"><tr><th>Network</th><th>Amount</th><th>Recharge card</th></tr>';
		for (var i = 0; i < b.length; i++) {
		d = "<tr>" + "<td>" + b[i].network + "</td>" + "<td>" + b[i].amount + "</td>" + "<td>" + b[i].rechargecard + "</td>" + "</tr>";
		c +=d;
	}
		result.innerHTML = c + '</table>';
	}
	// All about MTN balance
	let mtnbal = 0;
	function saveBal() {
	localStorage.setItem('mtnBalance', JSON.stringify(mtnbal));
	}
	function getBal() {
		mtnbal = JSON.parse(localStorage.getItem('mtnBalance'))
	}
	// To display the list of choices of SIM
	function callMe() {
		callcenter.style.display = 'none';
		optcall.style.display = 'block';
	}
	// To receive calls
	function receiveCall() {
		if (network.innerHTML == 'MTN NG') {
		ringing.innerHTML = 'Calling...';
		myMtnBal = setInterval(callMyMtn, 1000);
		}
		else if (network.innerHTML == 'GLO NG') {
			ringing.innerHTML = 'Calling...';
			myGloBal = setInterval(callMyGlo, 1000);
		}
		else if (network.innerHTML == 'AIRTEL NG') {
			ringing.innerHTML = 'Calling...';
			myAirBal = setInterval(callMyAirtel, 1000);
		}
		else if (network.innerHTML == '9MOBILE NG') {
			ringing.innerHTML = 'Calling...';
			myMobile = setInterval(callMyMobile, 1000);
		}

	}
	// To end all calls of all Network
	var myMtnBal;
	var myGloBal;
	var myAirBal;
	var myMobileBal;
	function endCall() {
		if (network.innerHTML == 'MTN NG') {
		clearInterval(myMtnBal);
		calling.style.display = 'none';
		calling2.style.display = 'none';
		box1.style.display = 'block';
		alert(eval(secs.innerHTML) + eval(60 * mins.innerHTML) + '.00' + 'secs at #' + eval(eval(secs.innerHTML) + eval(60 * mins.innerHTML)) * eval(0.5) + ' ' +'Your new balance is ' + mtnbal);
		ringing.innerHTML = 'Ringing....';
		hrs.innerHTML = '00';
		mins.innerHTML = '00';
		secs.innerHTML = '00';
		display.value = '';
		img.style.display = 'block';
		}
		else if (network.innerHTML == 'GLO NG') {
		clearInterval(myGloBal);
		calling.style.display = 'none';
		calling2.style.display = 'none';
		box1.style.display = 'block';
		alert(eval(secs.innerHTML) + eval(60 * mins.innerHTML) + '.00' + 'secs at #' + eval(eval(secs.innerHTML) + eval(60 * mins.innerHTML)) * eval(0.5) + ' ' + 'Your new balance is ' + globalance);
		ringing.innerHTML = 'Ringing....';
		hrs.innerHTML = '00';
		mins.innerHTML = '00';
		secs.innerHTML = '00';
		display.value = '';
		img.style.display = 'block';
		}
		else if (network.innerHTML == 'AIRTEL NG') {
		clearInterval(myAirBal);
		calling.style.display = 'none';
		calling2.style.display = 'none';
		box1.style.display = 'block';
		alert(eval(secs.innerHTML) + eval(60 * mins.innerHTML) + '.00' + 'secs at #' + eval(eval(secs.innerHTML) + eval(60 * mins.innerHTML)) * eval(0.5) + ' ' + 'Your new balance is ' + airtelbalance);
		ringing.innerHTML = 'Ringing....';
		hrs.innerHTML = '00';
		mins.innerHTML = '00';
		secs.innerHTML = '00';
		display.value = '';
		img.style.display = 'block';
		}
		else if (network.innerHTML == '9MOBILE NG') {
		clearInterval(myMobileBal);
		calling.style.display = 'none';
		calling2.style.display = 'none';
		box1.style.display = 'block';
		alert(eval(secs.innerHTML) + eval(60 * mins.innerHTML) + '.00' + 'secs at #' + eval(eval(secs.innerHTML) + eval(60 * mins.innerHTML)) * eval(1) + ' ' +'Your new balance is ' + mobilebalance);
		ringing.innerHTML = 'Ringing....';
		hrs.innerHTML = '00';
		mins.innerHTML = '00';
		secs.innerHTML = '00';
		display.value = '';
		img.style.display = 'block';
		}
	}
	function endCall2() {
		if (network.innerHTML == 'MTN NG') {
		clearInterval(myMtnBal);
		calling.style.display = 'none';
		calling2.style.display = 'none';
		box1.style.display = 'block';
		alert(eval(secs.innerHTML) + eval(60 * mins.innerHTML) + '.00' + 'secs at #' + eval(eval(secs.innerHTML) + eval(60 * mins.innerHTML)) * eval(0.5) + ' ' +'Your new balance is ' + mtnbal);
		ringing.innerHTML = 'Ringing....';
		hrs.innerHTML = '00';
		mins.innerHTML = '00';
		secs.innerHTML = '00';
		display.value = '';
		img.style.display = 'block';
		}
		else if (network.innerHTML == 'GLO NG') {
		clearInterval(myGloBal);
		calling.style.display = 'none';
		calling2.style.display = 'none';
		box1.style.display = 'block';
		alert(eval(secs.innerHTML) + eval(60 * mins.innerHTML) + '.00' + 'secs at #' + eval(eval(secs.innerHTML) + eval(60 * mins.innerHTML)) * eval(0.5) + ' ' + 'Your new balance is ' + globalance);
		ringing.innerHTML = 'Ringing....';
		hrs.innerHTML = '00';
		mins.innerHTML = '00';
		secs.innerHTML = '00';
		display.value = '';
		img.style.display = 'block';
		}
		else if (network.innerHTML == 'AIRTEL NG') {
		clearInterval(myAirBal);
		calling.style.display = 'none';
		calling2.style.display = 'none';
		box1.style.display = 'block';
		alert(eval(secs.innerHTML) + eval(60 * mins.innerHTML) + '.00' + 'secs at #' + eval(eval(secs.innerHTML) + eval(60 * mins.innerHTML)) * eval(0.5) + ' ' + 'Your new balance is ' + airtelbalance);
		ringing.innerHTML = 'Ringing....';
		hrs.innerHTML = '00';
		mins.innerHTML = '00';
		secs.innerHTML = '00';
		display.value = '';
		img.style.display = 'block';
		}
		else if (network.innerHTML == '9MOBILE NG') {
		clearInterval(myMobileBal);
		calling.style.display = 'none';
		calling2.style.display = 'none';
		box1.style.display = 'block';
		alert(eval(secs.innerHTML) + eval(60 * mins.innerHTML) + '.00' + 'secs at #' + eval(eval(secs.innerHTML) + eval(60 * mins.innerHTML)) * eval(1) + ' ' +'Your new balance is ' + mobilebalance);
		ringing.innerHTML = 'Ringing....';
		hrs.innerHTML = '00';
		mins.innerHTML = '00';
		secs.innerHTML = '00';
		display.value = '';
		img.style.display = 'block';
		}
	}
	// To ring when calling MTN
	function ringMtn() {
		if (display.value.length !== 11) {
		plswait.style.display = 'block';
		optcall.style.display = 'none';
		myVar = setInterval(myMtn, 3000);
		}
		else if (display.value.length == 11) {
		calling.style.display = 'block';
		calling2.style.display = 'block'
		box2.style.display = 'none';
		box1.style.display = 'none';
		optcall.style.display = 'none';
		phonenum.innerHTML = display.value;
		network.innerHTML = 'MTN NG';
		network2.innerHTML = 'MTN NG';
		myRing1 = setInterval(callMtn, 15000);
		}
	}
	// Calling and recharging through MTN Network
	function callMtn() {
		clearInterval(myRing1);
		getBal();
			if (mtnbal == 0) {
			calling.style.display = 'none';
			img.style.display = 'block';
			alert('Sorry, your account balance is too low. Pls recharge as soon as possible');
			// endCall();
		}
			else{
				alert('No Answer')
			}
			
	}
	function myMtn() {
		clearInterval(myVar);
		getBal()
		var val = display.value.trim();
	let card = JSON.parse(localStorage.myCard);
	for (var i = 0; i < card.length; i++) {
		let cd = card[i].rechargecard;
		if(display.value.trim() == "*555*"+cd+'#' && card[i].network == 'MTN' && card[i].loaded=="No"){
			plswait.style.display = 'none';
			response.style.display = 'block';
			response.style.color = 'black';
			response.innerHTML = 'Account recharge of MTN' + ' ' + card[i].amount + ' ' + 'is successful.';
     mtnbal+=parseInt(card[i].amount)
   card[i].loaded= "Yes";
     saveBal()
     localStorage.myCard = JSON.stringify(card);
	}
	else if (display.value == '*556#') {
			optcall.style.display = 'none';
			plswait.style.display = 'none';
			response.innerHTML = 'Yello, Main A/C Bal:' + ' ' + '#' + mtnbal;
			response.style.display = 'block';
			response.style.color = 'red';
		}
		else if (display.value.trim() == "*555*"+cd+'#' && card[i].network == 'MTN' && card[i].loaded == "Yes") {
			plswait.style.display = 'none';
			response.style.display = 'block';
			response.style.color = 'black';
			response.innerHTML = 'This Voucher has recently been loaded by you';
		}

}	
	}
	function callMyMtn() {
			timer2ndPhone();
			var seconds = secs.innerHTML;
			seconds++;
			secs.innerHTML = seconds;
			var minutes = mins.innerHTML;
			var hours = hrs.innerHTML;
			if (seconds > 59) {
				secs.innerHTML = '00';
				minutes++;
				mins.innerHTML = minutes;
			if (minutes > 59) {
				mins.innerHTML = '00';
				hours++;
			}
			}
			getBal();
			mtnbal -= 0.5;
			saveBal();
	}
	function timer2ndPhone() {
			var seconds = secs2.innerHTML;
			seconds++;
			secs2.innerHTML = seconds;
			var minutes = mins2.innerHTML;
			var hours = hrs2.innerHTML;
			if (seconds > 59) {
				secs2.innerHTML = '00';
				minutes++;
				mins2.innerHTML = minutes;
			if (minutes > 59) {
				mins2.innerHTML = '00';
				hrs2++;
			}
			}
	}
	// All about GLO balance
	let globalance = 0;
	function saveglo() {
	localStorage.setItem('gloBalance', JSON.stringify(globalance));
	}
	function balanceGLo() {
		globalance = JSON.parse(localStorage.getItem('gloBalance'))
	}
	// To ring when calling GLO
	function ringGlo() {
		if (display.value.length !== 11) {
		plswait.style.display = 'block';
		optcall.style.display = 'none';
		myVoid = setInterval(myGlo, 3000);
		}
		else if (display.value.length == 11) {
		calling.style.display = 'block';
		calling2.style.display = 'block'
		optcall.style.display = 'none';
		phonenum.innerHTML = display.value;
		network.innerHTML = 'GLO NG';
		network2.innerHTML = 'GLO NG';
		myRing2 = setInterval(callGlo, 15000);
		}
	}
	// Calling and recharging through GLO Network
	function callGlo() {
		clearInterval(myRing2);
		balanceGLo();
			if (globalance == 0) {
			calling.style.display = 'none';
			img.style.display = 'block';
			alert('Sorry, your account balance is too low. Pls recharge as soon as possible');
			// endCall();
		}
		else{
				alert('No Answer');
			}
	}
	function callMyGlo() {
		timer2ndPhone();
			var seconds = secs.innerHTML;
			seconds++;
			secs.innerHTML = seconds;
			var minutes = mins.innerHTML;
			var hours = hrs.innerHTML;
			if (seconds > 59) {
				secs.innerHTML = '00';
				minutes++;
				mins.innerHTML = minutes;
			if (minutes > 59) {
				mins.innerHTML = '00';
				hours++;
			}
			}
			balanceGLo();
			globalance -= 0.5;
			saveglo();
	}
	function myGlo() {
		clearInterval(myVoid);
		balanceGLo();
		var lav = display.value.trim();
		let e = JSON.parse(localStorage.getItem('myCard'));
		for (var i = 0; i < e.length; i++) {
			let dc = e[i].rechargecard;
		if (display.value.trim() == '*121*' + dc + '#' && e[i].network == 'GLO' && e[i].loaded == 'No') {
			optcall.style.display = 'none';
			plswait.style.display = 'none'
			response.style.display = 'block';
			response.style.color = 'green';
			response.innerHTML = 'Account recharge of GLO' + ' ' + e[i].amount + ' ' + 'is successful.';
			globalance+=parseInt(e[i].amount);
			e[i].loaded = 'Yes';
			saveglo();
			localStorage.myCard = JSON.stringify(e);
		}
		else if (display.value == '*125#') {
			optcall.style.display = 'none';
			plswait.style.display = 'none';
			response.innerHTML = 'Dear Customer, Main A/C Bal:' + ' ' + '#' + globalance;
			response.style.display = 'block';
			response.style.color = 'red';
		}
		else if (display.value.trim() == '*121*' + dc + '#' && e[i].network == 'GLO' && e[i].loaded == 'Yes') {
			optcall.style.display = 'none';
			plswait.style.display = 'none';
			response.innerHTML = 'This Utilisation of this pin was done by you';
			response.style.display = 'block';
			response.style.color = 'red';	
		}
	}
}
// All about AIRTEL balance
let airtelbalance = 0;
	function saveairtel() {
	localStorage.setItem('airtelBalance', JSON.stringify(airtelbalance));
	}
	function balanceairtel() {
		airtelbalance = JSON.parse(localStorage.getItem('airtelBalance'))
	}
// Calling and recharging through AIRTEL Network
	function ringAirtel() {
		if (display.value.length !== 11) {
		plswait.style.display = 'block';
		optcall.style.display = 'none';
		mySet = setInterval(myAirtel, 3000);
	}
	else if (display.value.length == 11) {
		calling.style.display = 'block';
		calling2.style.display = 'block'
		optcall.style.display = 'none';
		phonenum.innerHTML = display.value;
		network.innerHTML = 'AIRTEL NG';
		network2.innerHTML = 'AIRTEL NG';
		myRing3 = setInterval(callAirtel, 15000);
	}
	}
	function callAirtel() {
		clearInterval(myRing3);
		balanceairtel();
		if (airtelbalance == 0) {
			calling.style.display = 'none';
			img.style.display = 'block';
			alert('Sorry, your account balance is too low. Pls recharge as soon as possible');
		}
		else if (airtelbalance !== 0) {
			alert('No Answer');
		}
	}
	function callMyAirtel() {
		timer2ndPhone();
			var seconds = secs.innerHTML;
			seconds++;
			secs.innerHTML = seconds;
			var minutes = mins.innerHTML;
			var hours = hrs.innerHTML;
			if (seconds > 59) {
				secs.innerHTML = '00';
				minutes++;
				mins.innerHTML = minutes;
			if (minutes > 59) {
				mins.innerHTML = '00';
				hours++;
			}
			}
			balanceairtel();
			airtelbalance -= 0.5;
			saveairtel();
	}
	function myAirtel() {
		clearInterval(mySet);
		balanceairtel();
		var way = display.value.trim();
		let f = JSON.parse(localStorage.getItem('myCard'));
		for (var i = 0; i < f.length; i++) {
			let ef = f[i].rechargecard;
		if (display.value.trim() == '*126*' + ef + '#' && f[i].network == 'AIRTEL' && f[i].loaded == 'No') {
			optcall.style.display = 'none';
			plswait.style.display = 'none'
			response.style.display = 'block';
			response.style.color = 'red';
			response.innerHTML = 'Account recharge of ZAIN' + ' ' + f[i].amount + ' ' + 'is successful.';
			airtelbalance += parseInt(f[i].amount);
			f[i].loaded = 'Yes';
			saveairtel();
			localStorage.myCard = JSON.stringify(f);
		}
		else if (display.value == '') {
			optcall.style.display = 'none';
			plswait.style.display = 'none';
			callcenter.style.display = 'block'
			response.style.display = 'none';
		}
		else if (display.value == '*123#') {
			optcall.style.display = 'none';
			plswait.style.display = 'none';
			response.innerHTML = 'Yello, Main A/C Bal:' + ' ' + '#' + airtelbalance;
			response.style.display = 'block';
			response.style.color = 'red';
		}
		else if (display.value.trim() == '*126*' + ef + '#' && f[i].network == 'AIRTEL' && f[i].loaded == 'Yes') {
			optcall.style.display = 'none';
			plswait.style.display = 'none';
			response.style.display = 'block';
			response.style.color = 'red';
			response.innerHTML = 'Sorry, you just load it right now';
		}
	}
}
	// All about 9MOBILE balance
	let mobilebalance = 0;
	function savemobile() {
	localStorage.setItem('mobileBalance', JSON.stringify(mobilebalance));
	}
	function balancemobile() {
		mobilebalance = JSON.parse(localStorage.getItem('mobileBalance'))
	}
	// Calling and recharging through 9MOBILE Network
	function ring9mobile() {
		if (display.value.length !== 11) {
		plswait.style.display = 'block';
		optcall.style.display = 'none';
		myNum = setInterval(my9mobile, 3000);
		}
		else if (display.value.length == 11) {
			calling.style.display = 'block';
			calling2.style.display = 'block'
			optcall.style.display = 'none';
			phonenum.innerHTML = display.value;
			network.innerHTML = '9MOBILE NG';
			network2.innerHTML = '9MOBILE NG';
			myRing4 = setInterval(call9mobile, 15000);
		}
	}
	function call9mobile() {
		clearInterval(myRing4);
		balancemobile();
		if (mobilebalance == 0) {
			calling.style.display = 'none';
			img.style.display = 'block';
			alert('Call failed due to insufficient balance.')
		}
		else if (mobilebalance !== 0) {
			alert('No Answer');
		}
	}
	function callMyMobile() {
		timer2ndPhone();
			var seconds = secs.innerHTML;
			seconds++;
			secs.innerHTML = seconds;
			var minutes = mins.innerHTML;
			var hours = hrs.innerHTML;
			if (seconds > 59) {
				secs.innerHTML = '00';
				minutes++;
				mins.innerHTML = minutes;
			if (minutes > 59) {
				mins.innerHTML = '00';
				hours++;
			}
			}
			balancemobile();
			mobilebalance -= 1;
			savemobile();
	}
	function my9mobile() {
		clearInterval(myNum);
		balancemobile();
		var yu = display.value.trim();
		let g = JSON.parse(localStorage.getItem('myCard'));
		for (var i = 0; i < g.length; i++) {
			let ab = g[i].rechargecard;
		if (display.value == '*889*' + ab + '#' && g[i].network == '9MOBILE' && g[i].loaded == 'No') {
			optcall.style.display = 'none';
			plswait.style.display = 'none'
			response.style.display = 'block';
			response.style.color = 'blue';
			response.innerHTML = 'Account recharge of ETISALAT' + ' ' + g[i].amount + ' ' + 'is successful.';
			mobilebalance += parseInt(g[i].amount);
			g[i].loaded = 'Yes';
			savemobile();
			localStorage.myCard = JSON.stringify(g);
		}
		else if (display.value == '') {
			optcall.style.display = 'none';
			plswait.style.display = 'none';
			callcenter.style.display = 'block';
			response.style.display = 'none';
		}
		else if (display.value == '*890#') {
			optcall.style.display = 'none';
			plswait.style.display = 'none';
			response.innerHTML = 'Yello, Main A/C Bal:' + ' ' + '#' + mobilebalance;
			response.style.display = 'block';
			response.style.color = 'red';
		}
		else if (display.value == '*889*' + ab + '#' && g[i].network == '9MOBILE' && g[i].loaded == 'Yes') {
			optcall.style.display = 'none';
			plswait.style.display = 'none';
			response.style.display = 'block';
			response.style.color = 'red';
			response.innerHTML = 'Dear customer, this pin has been loaded by another customer';
		}
	}
}