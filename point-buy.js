'use strict';

window.onload = function() {
	const costs = [
		undefined, //  0
		undefined, //  1
		undefined, //  2
		        0, //  3
		        5, //  4
		       10, //  5
		       20, //  6
		       50, //  7
		      100, //  8
		      200, //  9
		      325, // 10
		      550, // 11
		      825, // 12
		     1250, // 13
		     1750, // 14
		     2500, // 15
		     3500, // 16
		     5000, // 17
		     7000, // 18
	];

	const strCost = document.querySelector('#str-cost');
	const dexCost = document.querySelector('#dex-cost');
	const conCost = document.querySelector('#con-cost');
	const intCost = document.querySelector('#int-cost');
	const wisCost = document.querySelector('#wis-cost');
	const chaCost = document.querySelector('#cha-cost');
	const totalCost = document.querySelector('#total-cost');
	const updateTotal = function() {
		totalCost.value = +strCost.value + +dexCost.value
		                + +conCost.value + +intCost.value
		                + +wisCost.value + +chaCost.value;
	};

	document.querySelector('#str-score').addEventListener('input', function(e) {
		strCost.value = costs[e.target.value];
		updateTotal();
	});

	document.querySelector('#dex-score').addEventListener('input', function(e) {
		dexCost.value = costs[e.target.value];
		updateTotal();
	});

	document.querySelector('#con-score').addEventListener('input', function(e) {
		conCost.value = costs[e.target.value];
		updateTotal();
	});

	document.querySelector('#int-score').addEventListener('input', function(e) {
		intCost.value = costs[e.target.value];
		updateTotal();
	});

	document.querySelector('#wis-score').addEventListener('input', function(e) {
		wisCost.value = costs[e.target.value];
		updateTotal();
	});

	document.querySelector('#cha-score').addEventListener('input', function(e) {
		chaCost.value = costs[e.target.value];
		updateTotal();
	});
};
