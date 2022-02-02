let questions = [
	{	id: 1,
		text: 'Сколько всего человек сдерживало натиск врага при обороне Брестской крепости?',
		right: 1,
		variants: [
			'3400 человек',
			'3500 человек',
			'3600 человек',
		],
		stro: 'Брест.html',
	},
{		id: 2,
		text: 'Дата освобождение Брестской крепости советскими войсками.',
		right: 2,
		variants: [
			'28 июня 1942',
			'28 июля 1943',
			'28 июля 1944',
		],
		stro: 'Брест.html',
	},
{		id: 3,
		text: 'Кто из художников написал картину «Защитники Брестской крепости»?',
		right: 0,
		variants: [
			'Кривоногов',
			'Симонов',
			'Никто из вышеперечисленных',
		],
		stro: 'Брест.html',
	},
{		id: 4,
		text: 'Дата, когда Киевские аэродромы подверглись налетам авиации противника.',
		right: 0,
		variants: [
			'22 июня 1942 года',
			'12 июня 1941 года',
			'25 июля 1941 года',
		],
		stro: 'Киев.html',
	},
	{		id: 5,
		text: 'Частью чего были Киевский укрепленный район и Коростеньский в Припятской области.',
		right: 0,
		variants: [
			'частью «линии Сталина»',
			'частью Юго-Западного фронта',
			'частью воздушно-десантные корпуса',
		],
		stro: 'Киев.html',
	},
	{		id: 6,
		text: 'Когда была прорвана укрепленная полоса у Киева',
		right: 1,
		variants: [
			'2 августа',
			'6 августа',
			'12 августа',
		
		],
		stro: 'Киев.html',
	},
];

function prov1()
{
var textToFind = localStorage.getItem("key");
if(textToFind == 1)
{
document.getElementById('proddd2').value = "Начать заного";

}
else
{
let x = document.getElementById('proddd');
x.style.display = "none";

}
}


function prov2()
{
localStorage.setItem("key2","1");
}
function prov3()
{
localStorage.removeItem("arrs");
localStorage.removeItem("vopps");
localStorage.removeItem("nows");
localStorage.removeItem("counts");
localStorage.removeItem("key2");
localStorage.removeItem("key");
localStorage.removeItem("rezults");

}