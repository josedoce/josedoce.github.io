/**
* @author JOSEDOCE
*/
const tags = {
	ORGANICO : {
		id: 1,
		titulo: 'Orgânico',
		link: 'https://www.emporiodocevida.com.br/loja/busca.php?loja=1113620&palavra_busca=organico',
	},
	ZEROACUCAR : {
		id: 2,
		titulo: 'Zero Açúcar',
		link: 'https://www.emporiodocevida.com.br/produtos-naturais/zero-acucar',
	},

	SEMLACTOSE : {
		id: 3,
		titulo: 'Sem Lactose',
		link: 'hhttps://www.emporiodocevida.com.br/petiscos/sem-lactose',
	},
	VEGANO: {
		id: 4,
		titulo: 'Vegano',
		link: 'https://www.emporiodocevida.com.br/loja/busca.php?loja=1113620&palavra_busca=vegano',
	},
	NATURAL: {
		id: 5,
		titulo: 'Natural',
		link: 'https://www.emporiodocevida.com.br/produtos-naturais',
	},
	CHOCOLATE: {
		id: 6,
		titulo: 'Chocolate',
		link: 'https://www.emporiodocevida.com.br/chocolates',
	},

	SEMGLUTEN: {
		id: 7,
		titulo: 'Sem glúten',
		link: 'https://www.emporiodocevida.com.br/petiscos/sem-gluten'
	},
	ZEROSODIO: {
		id: 8,
		titulo: 'Zero Sódio',
		link: 'https://www.emporiodocevida.com.br/loja/busca.php?loja=1113620&palavra_busca=zero+s%F3dio'
	},
	INTEGRAL: {
		id: 9,
		titulo: 'Integral',
		link: 'https://www.emporiodocevida.com.br/loja/busca.php?loja=1113620&palavra_busca=integral'
	},
	
}

const produtos = [
	{ id:1094,tags:[tags.SEMGLUTEN]},
	{ id:8537,tags:[tags.NATURAL]},
	{ id:142,tags:[]},
	{ id:224,tags:[]},
	{ id:802,tags:[tags.NATURAL]},
	{ id:156,tags:[tags.ZEROSODIO]},
	{ id:9988,tags:[tags.NATURAL]},
	{ id:6376,tags:[tags.ORGANICO]},
	{ id:6858,tags:[tags.ORGANICO]},
	{ id:485,tags:[tags.SEMGLUTEN ]},
	{ id:2112,tags:[ tags.SEMLACTOSE, ]},
	{ id:2170,tags:[tags.CHOCOLATE]},
	{ id:2197,tags:[tags.SEMGLUTEN]},
	{ id:2200,tags:[tags.SEMGLUTEN]},
	{ id:5883,tags:[tags.SEMLACTOSE, tags.ZEROSODIO]},
	{ id:2327,tags:[ tags.NATURAL ]},
	{ id:2231,tags:[ tags.SEMLACTOSE, tags.SEMGLUTEN, tags.ZEROACUCAR]},
	{ id:2502,tags:[tags.SEMGLUTEN]},
	{ id:2503,tags:[tags.ZEROACUCAR, tags.SEMGLUTEN]},
	{ id:2542,tags:[tags.ZEROACUCAR]},
	{ id:2603,tags:[tags.SEMLACTOSE, tags.SEMGLUTEN]},
	{ id:2610,tags:[]},
	{ id:2629,tags:[tags.SEMGLUTEN, tags.SEMLACTOSE]},
	{ id:9106,tags:[tags.ZEROACUCAR, tags.SEMGLUTEN]},
	{ id:1498,tags:[ tags.SEMGLUTEN]},
	{ id:1499,tags:[ tags.SEMGLUTEN]},
	{ id:2054,tags:[ tags.ZEROACUCAR]},
	{ id:2058,tags:[ tags.ZEROACUCAR]},
	{ id:2055,tags:[ tags.ZEROACUCAR]},
	{ id:5137,tags:[ tags.SEMGLUTEN, tags.SEMLACTOSE ]},
	{ id:2169,tags:[ tags.ZEROACUCAR ]},
	{ id:2256,tags:[]},
	{ id:2621,tags:[]},
	{ id:2622,tags:[]},
	{ id:2623,tags:[tags.VEGANO]},
	{ id:2625,tags:[tags.VEGANO]},
	{ id:1099,tags:[tags.SEMGLUTEN, tags.INTEGRAL ]},
	{ id:1791,tags:[tags.SEMGLUTEN]},
	{ id:1835,tags:[tags.SEMGLUTEN ]},
	{ id:3045,tags:[tags.SEMGLUTEN ]},
	{ id:3112,tags:[tags.SEMLACTOSE]},
	{ id:3164,tags:[tags.NATURAL]},
	{ id:1500,tags:[tags.ZEROACUCAR, tags.SEMGLUTEN, tags.SEMLACTOSE]},
	{ id:1613, tags:[tags.INTEGRAL, tags.SEMGLUTEN]},
	{ id:1615, tags: [ tags.SEMGLUTEN, tags.SEMLACTOSE ]},
	{ id:1757, tags:[tags.INTEGRAL, tags.SEMGLUTEN]},
	{ id:6026,tags:[tags.INTEGRAL, tags.SEMGLUTEN]},
	{ id: 6159, tags:[tags.INTEGRAL, tags.SEMGLUTEN]},
	{ id:7475,tags:[tags.INTEGRAL, tags.SEMGLUTEN]},
	{ id:3172,tags:[tags.ZEROACUCAR, tags.SEMGLUTEN, tags.SEMLACTOSE]},
	{ id:3173,tags:[tags.ZEROACUCAR, tags.SEMGLUTEN, tags.SEMLACTOSE]},
	{ id:1497,tags:[tags.ZEROACUCAR, tags.SEMGLUTEN, tags.SEMLACTOSE]},
	{ id:2613,tags:[tags.ZEROACUCAR]},
	{ id:2223,tags:[]},
	{ id:3177,tags:[]},
	{ id:3181,tags:[tags.SEMGLUTEN]},
	{ id:3182,tags:[tags.SEMGLUTEN]},
	{ id:3183,tags:[]},
	{ id:3184,tags:[tags.SEMGLUTEN]},
	{ id:3185,tags:[tags.SEMGLUTEN]},
	{ id:3186,tags:[tags.SEMGLUTEN]},
	{ id:3187,tags:[tags.SEMGLUTEN]},
	{ id:3188,tags:[tags.SEMLACTOSE]},
	{ id:2325,tags:[]},
	{ id:2336,tags:[]},
	{ id:2456,tags:[]},
	{ id:2461,tags:[]},
	{ id:2467,tags:[]},
	{ id:2468,tags:[]},
	{ id:2545,tags:[]},
	{ id:2546,tags:[]},
	{ id:2551,tags:[]},
	{ id:2553,tags:[]},
	{ id:2572,tags:[]},
	{ id:3048,tags:[]},
	{ id:3049,tags:[]},
	{ id:3056,tags:[]},
	{ id:3059,tags:[]},
	{ id:3057,tags:[]},
	{ id:3060,tags:[]},
	{ id:3062,tags:[]},
	{ id:3063,tags:[]},
	{ id:3064,tags:[]},
	{ id:3065,tags:[]},
	{ id:3066,tags:[]},
	{ id:3067,tags:[]},
	{ id:3077,tags:[]},
	{ id:3080,tags:[]},
	{ id:3081,tags:[]},
	{ id:3085,tags:[]},
	{ id:3087,tags:[]},
	{ id:3092,tags:[]},
	{ id:3093,tags:[]},
	{ id:3094,tags:[]},
	{ id:3095,tags:[]},
	{ id:3097,tags:[]},
	{ id:3098,tags:[]},
	{ id:3099,tags:[]},
	{ id:5339,tags:[]},
	{ id:3163,tags:[]},
	{ id:3162,tags:[]},
	{ id:3165,tags:[]},
	{ id: 1797, tags: [ tags.ZEROACUCAR ]},
	{ id: 1796, tags: [ tags.ZEROACUCAR ]},
	{ id: 1808, tags: [ tags.SEMGLUTEN, tags.SEMLACTOSE, tags.VEGANO ]},
	{ id: 5682, tags: [ tags.SEMGLUTEN, tags.INTEGRAL, tags.VEGANO ]},
	{ id: 1807, tags: [ tags.SEMGLUTEN, tags.INTEGRAL, tags.VEGANO ]},
	{ id: 5683, tags: [ tags.SEMGLUTEN, tags.INTEGRAL, tags.VEGANO ]},
	{ id: 3111, tags: [ tags.VEGANO ]},
	{ id: 5971, tags: [ tags.SEMGLUTEN, tags.VEGANO ]},
	{ id: 1902, tags: [ tags.SEMGLUTEN, tags.VEGANO ]},
	{ id: 1806, tags: [ tags.SEMGLUTEN, tags.VEGANO ]},
	{ id: 5681, tags: [ tags.SEMGLUTEN, tags.VEGANO ]},
	{ id: 1909, tags: [ tags.SEMGLUTEN, tags.VEGANO ]},
	{ id: 1811, tags: [ tags.SEMGLUTEN, tags.SEMLACTOSE ]},
	{ id: 1810, tags: [ tags.SEMGLUTEN, tags.SEMLACTOSE ]},
	
	{ id: 1910, tags: [ tags.SEMGLUTEN, tags.SEMLACTOSE ]},
	{ id: 1911, tags: [ tags.SEMGLUTEN, tags.ZEROACUCAR, tags.VEGANO ]},
	{ id: 5684, tags: [ tags.SEMGLUTEN, tags.ZEROACUCAR, tags.VEGANO ]},
	{ id: 8997, tags: [ tags.ZEROACUCAR ]},
	{ id: 1111. tags: [ tags.ZEROACUCAR, tags.SEMLACTOSE ]},
	{ id: 8996, tags: [ tags.ZEROACUCAR ]},
	{ id: 1520, tags: [ tags.ZEROACUCAR ]},
	{ id: 5180, tags: [ tags.ZEROACUCAR ]},
	{ id: 1494, tags: [ tags.ZEROACUCAR ]},
	{ id: 5179, tags: [ tags.ZEROACUCAR ]},
	{ id: 7252, tags: [ tags.ZEROACUCAR ]},
	{ id: 7254, tags: [ tags.ZEROACUCAR ]},
	{ id: 7255, tags: [ tags.ZEROACUCAR ]},
	{ id: 1665, tags: [ tags.ZEROACUCAR, tags.VEGANO, tags.SEMLACTOSE ]},
	{ id: 2629, tags: [ tags.SEMLACTOSE ]},
	//parei aqui, onde o produto é filtrado por nome
	{ id: 7332, tags: [ tags.SEMGLUTEN, tags.SEMLACTOSE ]}
];

function tagnizar(produto) {

	if(produto.tags.length === 0) {
		return
	}
	const elementoAlvo = document.querySelectorAll(`.tag-${produto.id}`);
	if(!elementoAlvo.length === 0){
		return
	}

	elementoAlvo.forEach((ea)=>{
		produto.tags.forEach((p)=>{
			ea.innerHTML+=`<a href="${p.link}">${p.titulo}</a>`;
		});
	});
	
}  
	
produtos.forEach((p)=>{
	tagnizar(p);
});


