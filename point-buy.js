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

	const strMod = document.querySelector('#str-mod');
	const dexMod = document.querySelector('#dex-mod');
	const conMod = document.querySelector('#con-mod');
	const intMod = document.querySelector('#int-mod');
	const wisMod = document.querySelector('#wis-mod');
	const chaMod = document.querySelector('#cha-mod');

	const updateTotal = function() {
		const result = +strCost.value + +dexCost.value
		             + +conCost.value + +intCost.value
		             + +wisCost.value + +chaCost.value;

		if (typeof result === 'number') {
			totalCost.value = result;
		} else {
			totalCost.value = undefined;
		}
	};

	const calcModifier = function(score) {
		if (!/^\d+$/.exec(score))
			return 'undefined';
		else if (+score < 10)
			return '' + Math.floor(score / 2 - 5);
		else
			return '+' + Math.floor(score / 2 - 5);
	}

	document.querySelector('#str-score').addEventListener('input', function(e) {
		strCost.value = costs[e.target.value];
		strMod.value = calcModifier(e.target.value);
		updateTotal();
	});

	document.querySelector('#dex-score').addEventListener('input', function(e) {
		dexCost.value = costs[e.target.value];
		dexMod.value = calcModifier(e.target.value);
		updateTotal();
	});

	document.querySelector('#con-score').addEventListener('input', function(e) {
		conCost.value = costs[e.target.value];
		conMod.value = calcModifier(e.target.value);
		updateTotal();
	});

	document.querySelector('#int-score').addEventListener('input', function(e) {
		intCost.value = costs[e.target.value];
		intMod.value = calcModifier(e.target.value);
		updateTotal();
	});

	document.querySelector('#wis-score').addEventListener('input', function(e) {
		wisCost.value = costs[e.target.value];
		wisMod.value = calcModifier(e.target.value);
		updateTotal();
	});

	document.querySelector('#cha-score').addEventListener('input', function(e) {
		chaCost.value = costs[e.target.value];
		chaMod.value = calcModifier(e.target.value);
		updateTotal();
	});
};
