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

	const strScore = document.querySelector('#str-score');
	const dexScore = document.querySelector('#dex-score');
	const conScore = document.querySelector('#con-score');
	const intScore = document.querySelector('#int-score');
	const wisScore = document.querySelector('#wis-score');
	const chaScore = document.querySelector('#cha-score');
	const totalScore = document.querySelector('#total-score');

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

	// Strength
	document.querySelector('#str-score').addEventListener('input', function(e) {
		strMod.value = calcModifier(strScore.value);
		strCost.value = costs[strScore.value];
		updateTotal();
	});

	document.querySelector('#str-minus').addEventListener('click', function(e) {
		strScore.value = Math.max(3, +strScore.value - 1);
		strMod.value = calcModifier(strScore.value);
		strCost.value = costs[strScore.value];
		updateTotal();
	});

	document.querySelector('#str-plus').addEventListener('click', function(e) {
		strScore.value = Math.min(18, +strScore.value + 1);
		strMod.value = calcModifier(strScore.value);
		strCost.value = costs[strScore.value];
		updateTotal();
	});

	// Dexterity
	document.querySelector('#dex-score').addEventListener('input', function(e) {
		dexMod.value = calcModifier(dexScore.value);
		dexCost.value = costs[dexScore.value];
		updateTotal();
	});

	document.querySelector('#dex-minus').addEventListener('click', function(e) {
		dexScore.value = Math.max(3, +dexScore.value - 1);
		dexMod.value = calcModifier(dexScore.value);
		dexCost.value = costs[dexScore.value];
		updateTotal();
	});

	document.querySelector('#dex-plus').addEventListener('click', function(e) {
		dexScore.value = Math.min(18, +dexScore.value + 1);
		dexMod.value = calcModifier(dexScore.value);
		dexCost.value = costs[dexScore.value];
		updateTotal();
	});

	// Constitution
	document.querySelector('#con-score').addEventListener('input', function(e) {
		conMod.value = calcModifier(conScore.value);
		conCost.value = costs[conScore.value];
		updateTotal();
	});

	document.querySelector('#con-minus').addEventListener('click', function(e) {
		conScore.value = Math.max(3, +conScore.value - 1);
		conMod.value = calcModifier(conScore.value);
		conCost.value = costs[conScore.value];
		updateTotal();
	});

	document.querySelector('#con-plus').addEventListener('click', function(e) {
		conScore.value = Math.min(18, +conScore.value + 1);
		conMod.value = calcModifier(conScore.value);
		conCost.value = costs[conScore.value];
		updateTotal();
	});

	// Intelligence
	document.querySelector('#int-score').addEventListener('input', function(e) {
		intMod.value = calcModifier(intScore.value);
		intCost.value = costs[intScore.value];
		updateTotal();
	});

	document.querySelector('#int-minus').addEventListener('click', function(e) {
		intScore.value = Math.max(3, +intScore.value - 1);
		intMod.value = calcModifier(intScore.value);
		intCost.value = costs[intScore.value];
		updateTotal();
	});

	document.querySelector('#int-plus').addEventListener('click', function(e) {
		intScore.value = Math.min(18, +intScore.value + 1);
		intMod.value = calcModifier(intScore.value);
		intCost.value = costs[intScore.value];
		updateTotal();
	});

	// Wisdom
	document.querySelector('#wis-score').addEventListener('input', function(e) {
		wisMod.value = calcModifier(wisScore.value);
		wisCost.value = costs[wisScore.value];
		updateTotal();
	});

	document.querySelector('#wis-minus').addEventListener('click', function(e) {
		wisScore.value = Math.max(3, +wisScore.value - 1);
		wisMod.value = calcModifier(wisScore.value);
		wisCost.value = costs[wisScore.value];
		updateTotal();
	});

	document.querySelector('#wis-plus').addEventListener('click', function(e) {
		wisScore.value = Math.min(18, +wisScore.value + 1);
		wisMod.value = calcModifier(wisScore.value);
		wisCost.value = costs[wisScore.value];
		updateTotal();
	});

	// Charisma
	document.querySelector('#cha-score').addEventListener('input', function(e) {
		chaMod.value = calcModifier(chaScore.value);
		chaCost.value = costs[chaScore.value];
		updateTotal();
	});

	document.querySelector('#cha-minus').addEventListener('click', function(e) {
		chaScore.value = Math.max(3, +chaScore.value - 1);
		chaMod.value = calcModifier(chaScore.value);
		chaCost.value = costs[chaScore.value];
		updateTotal();
	});

	document.querySelector('#cha-plus').addEventListener('click', function(e) {
		chaScore.value = Math.min(18, +chaScore.value + 1);
		chaMod.value = calcModifier(chaScore.value);
		chaCost.value = costs[chaScore.value];
		updateTotal();
	});
};
