// $(".all-btn1").click(function() {
//     $(".select-base li div").addClass("bg-color"); 
//     $(".select-base li div img").addClass("main-filter");
// });
// $(".all-btn2").click(function() {
//     $(".select-flavor li div").addClass("bg-color"); 
//     $(".select-flavor li div img").addClass("main-filter");
// });
// $(".circle1").click(function() {$(".circle1").toggleClass("bg-color"); 
// $(".circle1>img").toggleClass("main-filter");});
function allcheckedStyle(e) {
    if(e.target.checked){
        e.target.parentElement.style.backgroundColor = '#ffdad0';
        e.target.nextElementSibling.style.color = '#f3553c';
    }else{
         e.target.parentElement.style.backgroundColor = 'white';
         e.target.nextElementSibling.style.color = 'black';

    }
 }
function BasemodifiedbyallStyle(e) {
	var inputs = document.querySelectorAll(".base_list");
	for (let i = 0; i < inputs.length; i++) {
		e = inputs[i];
	    if(e.checked){
	        e.previousElementSibling.style.backgroundColor = '#ffdad0';
	        e.previousElementSibling.firstElementChild.style.filter = "invert(48%) sepia(37%) saturate(6061%) hue-rotate(339deg) brightness(100%) contrast(92%)";
	    }else{
	         e.previousElementSibling.style.backgroundColor = 'white';
	         e.previousElementSibling.firstElementChild.style.filter = "invert(73%) sepia(8%) saturate(12%) hue-rotate(326deg) brightness(97%) contrast(87%)";
	    }
	}
} 

function FlavormodifiedbyallStyle(e) {
	var inputs = document.querySelectorAll(".flavor_list");
	for (let i = 0; i < inputs.length; i++) {
		e = inputs[i];
	    if(e.checked){
	        e.previousElementSibling.style.backgroundColor = '#ffdad0';
	        e.previousElementSibling.firstElementChild.style.filter = "invert(48%) sepia(37%) saturate(6061%) hue-rotate(339deg) brightness(100%) contrast(92%)";
	    }else{
	         e.previousElementSibling.style.backgroundColor = 'white';
	         e.previousElementSibling.firstElementChild.style.filter = "invert(73%) sepia(8%) saturate(12%) hue-rotate(326deg) brightness(97%) contrast(87%)";
	    }
	}
} 

function tagcheckedStyle(e) {
    if(e.target.checked){
        e.target.parentElement.style.backgroundColor = '#ffdad0';
        e.target.nextElementSibling.style.color = '#f3553c';
    }else{
         e.target.parentElement.style.backgroundColor = 'white';
         e.target.nextElementSibling.style.color = 'black';

    }
 }
function BasecheckedStyle(e) {
    if(e.target.checked){
        e.target.previousElementSibling.style.backgroundColor = '#ffdad0';
        e.target.previousElementSibling.firstElementChild.style.filter = "invert(48%) sepia(37%) saturate(6061%) hue-rotate(339deg) brightness(100%) contrast(92%)";
    }else{
    	var all = document.querySelector("#base_id_0");
    	all.parentElement.style.backgroundColor = 'white';
        all.nextElementSibling.style.color = 'black';
         
        e.target.previousElementSibling.style.backgroundColor = 'white';
        e.target.previousElementSibling.firstElementChild.style.filter = "invert(73%) sepia(8%) saturate(12%) hue-rotate(326deg) brightness(97%) contrast(87%)";
    }
}
function FlavorcheckedStyle(e) {
    if(e.target.checked){
        e.target.previousElementSibling.style.backgroundColor = '#ffdad0';
        e.target.previousElementSibling.firstElementChild.style.filter = "invert(48%) sepia(37%) saturate(6061%) hue-rotate(339deg) brightness(100%) contrast(92%)";
    }else{
    	var all = document.querySelector("#flavor_id_0");
    	all.parentElement.style.backgroundColor = 'white';
        all.nextElementSibling.style.color = 'black';
         
        e.target.previousElementSibling.style.backgroundColor = 'white';
        e.target.previousElementSibling.firstElementChild.style.filter = "invert(73%) sepia(8%) saturate(12%) hue-rotate(326deg) brightness(97%) contrast(87%)";
    }
}
function allCheck(e) { // 전체 체크 버튼 클릭시 전체 체크 및 해제 *베이스
	if(e.target.checked) {
		document.querySelectorAll(".base_list").forEach(function(v, i) {
			v.checked = true;
		});
	} else {
		document.querySelectorAll(".base_list").forEach(function(v, i) {
			v.checked = false;
		});
	}
}
 
function checkAllList(e) { //체크 버튼 클릭시 전체 체크 버튼 체크 및 해제 *베이스
	let checkCount = 0;
	document.querySelectorAll(".base_list").forEach(function(v, i) {
		if(v.checked === false){
			checkCount++;
		}
	});
	if(checkCount>0) {
		document.querySelector("#base_id_0").checked = false;
	} else if(checkCount === 0) {   
		document.querySelector("#base_id_0").checked = true;
	}
}

function allCheckFlavor(e) { // 전체 체크 버튼 클릭시 전체 체크 및 해제 *맛
	if(e.target.checked) {
		document.querySelectorAll(".flavor_list").forEach(function(v, i) {
			v.checked = true;
		});
	} else {
		document.querySelectorAll(".flavor_list").forEach(function(v, i) {
			v.checked = false;
		});
	}
}
 
function checkAllListFlavor(e) { //체크 버튼 클릭시 전체 체크 버튼 체크 및 해제 *맛
	let checkCount = 0;
	document.querySelectorAll(".flavor_list").forEach(function(v, i) {
		if(v.checked === false){
			checkCount++;
		}
	});
	if(checkCount>0) {
		document.querySelector("#flavor_id_0").checked = false;
	} else if(checkCount === 0) {   
		document.querySelector("#flavor_id_0").checked = true;
	}
}
// $(".circle1").click(function() {$(".circle1").toggleClass("bg-color"); $(".circle1>img").toggleClass("main-filter");});
// $(".circle2").click(function() {$(".circle2").toggleClass("bg-color"); $(".circle2>img").toggleClass("main-filter");});
// $(".circle3").click(function() {$(".circle3").toggleClass("bg-color"); $(".circle3>img").toggleClass("main-filter");});
// $(".circle4").click(function() {$(".circle4").toggleClass("bg-color"); $(".circle4>img").toggleClass("main-filter");});
// $(".circle5").click(function() {$(".circle5").toggleClass("bg-color"); $(".circle5>img").toggleClass("main-filter");});
// $(".circle6").click(function() {$(".circle6").toggleClass("bg-color"); $(".circle6>img").toggleClass("main-filter");});
// $(".circle7").click(function() {$(".circle7").toggleClass("bg-color"); $(".circle7>img").toggleClass("main-filter");});
// $(".circle8").click(function() {$(".circle8").toggleClass("bg-color"); $(".circle8>img").toggleClass("main-filter");});
// $(".circle9").click(function() {$(".circle9").toggleClass("bg-color"); $(".circle9>img").toggleClass("main-filter");});
// $(".circle10").click(function() {$(".circle10").toggleClass("bg-color"); $(".circle10>img").toggleClass("main-filter");});
// $(".circle11").click(function() {$(".circle11").toggleClass("bg-color"); $(".circle11>img").toggleClass("main-filter");});
// $(".circle12").click(function() {$(".circle12").toggleClass("bg-color"); $(".circle12>img").toggleClass("main-filter");});
// $(".circle13").click(function() {$(".circle13").toggleClass("bg-color"); $(".circle13>img").toggleClass("main-filter");});
// $(".circle14").click(function() {$(".circle14").toggleClass("bg-color"); $(".circle14>img").toggleClass("main-filter");});
// $(".circle15").click(function() {$(".circle15").toggleClass("bg-color"); $(".circle15>img").toggleClass("main-filter");});
// $(".circle16").click(function() {$(".circle16").toggleClass("bg-color"); $(".circle16>img").toggleClass("main-filter");});

// $(".tag-btn1").click(function() {$(".tag-btn1").toggleClass("bg-color"); $(".tag-btn1").toggleClass("main-color");});
// $(".tag-btn2").click(function() {$(".tag-btn2").toggleClass("bg-color"); $(".tag-btn2").toggleClass("main-color");});
// $(".tag-btn3").click(function() {$(".tag-btn3").toggleClass("bg-color"); $(".tag-btn3").toggleClass("main-color");});
// $(".tag-btn4").click(function() {$(".tag-btn4").toggleClass("bg-color"); $(".tag-btn4").toggleClass("main-color");});
// $(".tag-btn5").click(function() {$(".tag-btn5").toggleClass("bg-color"); $(".tag-btn5").toggleClass("main-color");});
// $(".tag-btn6").click(function() {$(".tag-btn6").toggleClass("bg-color"); $(".tag-btn6").toggleClass("main-color");});
// $(".tag-btn7").click(function() {$(".tag-btn7").toggleClass("bg-color"); $(".tag-btn7").toggleClass("main-color");});
// $(".tag-btn8").click(function() {$(".tag-btn8").toggleClass("bg-color"); $(".tag-btn8").toggleClass("main-color");});
// $(".tag-btn9").click(function() {$(".tag-btn9").toggleClass("bg-color"); $(".tag-btn9").toggleClass("main-color");});
// $(".tag-btn10").click(function() {$(".tag-btn10").toggleClass("bg-color"); $(".tag-btn10").toggleClass("main-color");});
// $(".tag-btn11").click(function() {$(".tag-btn11").toggleClass("bg-color"); $(".tag-btn11").toggleClass("main-color");});
// $(".tag-btn12").click(function() {$(".tag-btn12").toggleClass("bg-color"); $(".tag-btn12").toggleClass("main-color");});
// $(".tag-btn13").click(function() {$(".tag-btn13").toggleClass("bg-color"); $(".tag-btn13").toggleClass("main-color");});
// $(".tag-btn14").click(function() {$(".tag-btn14").toggleClass("bg-color"); $(".tag-btn14").toggleClass("main-color");});
// $(".tag-btn15").click(function() {$(".tag-btn15").toggleClass("bg-color"); $(".tag-btn15").toggleClass("main-color");});


