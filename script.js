	function submitForm(event){
		var input = document.getElementById("bill");
		var x = document.forms["tipForm"]["bill"].value;
		var peopleInput = document.getElementById("people");

		var e = document.getElementById("dropdown");
		var service = e.options[e.selectedIndex].value;
		var great = Math.round(input.value / 2);
		var good = Math.round(input.value / 4);
		var notBad = Math.round(input.value / 6);
		var bad = Math.round(input.value / 8);
		var rBad = Math.round(input.value / 10);

		var greatTips = Math.round(great / peopleInput.value);
		var goodTips = Math.round(good / peopleInput.value);
		var notBadTips = Math.round(notBad / peopleInput.value);
		var badTips = Math.round(bad / peopleInput.value);
		var rBadTips = Math.round(rBad / peopleInput.value);

		var friendDisplay = peopleInput.value - 1;


			if(isNaN(x)){
				event.preventDefault()
				document.getElementById("billMustNum").innerHTML = "Must Be A Number!"
				
			} else {
				document.getElementById("billMustNum").innerHTML = ""
			}
			if(input.value.length == 0){
				event.preventDefault()
				document.getElementById("blankBill").innerHTML = "Bill cant be blank"
			} else {
				document.getElementById("blankBill").innerHTML = ""
			}
			if(service == "choose"){
				event.preventDefault()
				document.getElementById("blankService").innerHTML = "You have to choose one"
			} else {
				document.getElementById("blankService").innerHTML = ""
			}
			if(peopleInput.value == 0){
				event.preventDefault()
				document.getElementById("blankPeople").innerHTML = "Cant be less than 1 person"
			} else {
				document.getElementById("blankPeople").innerHTML = ""
			}
			if(input.value <= 50000 && input.value != 0 && peopleInput.value != 0 && service != "choose"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = "Well, we dont think you need to tip the waiters, unless you want to"
			}
			if(input.value <= 50000 && input.value != 0 && peopleInput.value != 0 && service != "choose"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = "Well, we dont think you need to tip the waiters, unless you want to"
				
			}
	
			if(input.value > 50000 && peopleInput.value == 1 && service == "great"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = great + " rupiah or more would be an appropriate tips"
				
			} else if(input.value > 50000 && peopleInput.value > 1 && service == "great"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = great + " rupiah or more would be an appropriate tips. You can share it with " + friendDisplay + " of your friends. That mean each of you should pay " + greatTips + " to cover for the tips"
				
			}
	
			if(input.value > 50000 && peopleInput.value == 1 && service == "good"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = good + " rupiah or more would be an appropriate tips"
				
			} else if(input.value > 50000 && peopleInput.value > 1 && service == "good"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = good + " rupiah or more would be an appropriate tips. You can share it with " + friendDisplay + " of your friends. That mean each of you should pay " + goodTips + " to cover for the tips"
				
			}
	
			if(input.value > 50000 && peopleInput.value == 1 && service == "notBad"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = notBad + " rupiah or more would be an appropriate tips"
				
			} else if(input.value > 50000 && peopleInput.value > 1 && service == "notBad"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = notBad + " rupiah or more would be an appropriate tips. You can share it with " + friendDisplay + " of your friends. That mean each of you should pay " + notBadTips + " to cover for the tips"
				
			}
	
			if(input.value > 50000 && peopleInput.value == 1 && service == "bad"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = bad + " rupiah or more would be an appropriate tips"
				
			} else if(input.value > 50000 && peopleInput.value > 1 && service == "bad"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = bad + " rupiah or more would be an appropriate tips. You can share it with " + friendDisplay + " of your friends. That mean each of you should pay " + badTips + " to cover for the tips"
				
			}
	
			if(input.value > 50000 && peopleInput.value == 1 && service == "reallyBad"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = rBad + " rupiah or more would be an appropriate tips"
				
			} else if(input.value > 50000 && peopleInput.value > 1 && service == "reallyBad"){
				event.preventDefault()
				document.getElementById("answer").innerHTML = rBad + " rupiah or more would be an appropriate tips. You can share it with " + friendDisplay + " of your friends. That mean each of you should pay " + rBadTips + " to cover for the tips"
				
			}
	}
