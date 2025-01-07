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
	}
}

const produtos = [
	{ id:1094,tags:[tags.SEMGLUTEN]},
	{ id:8537,tags:[tags.NATURAL]},
	{ id:142,tags:[]},
	{ id:224,tags:[]},
	{ id:802,tags:[tags.NATURAL]},
	{ id:156,tags:[tags.ZEROSODIO]},
	{ id:9988,tags:[tags.NATURAL]},
	{ id:6376,tags:[]},
	{ id:6858,tags:[]},
	{ id:485,tags:[]},
	{ id:2112,tags:[ tags.SEMLACTOSE, ]},
	{ id:2170,tags:[tags.CHOCOLATE]},
	{ id:2197,tags:[]},
	{ id:2200,tags:[]},
	{ id:5883,tags:[]},
	{ id:2327,tags:[ tags.NATURAL ]},
	{ id:2231,tags:[ tags.SEMLACTOSE, tags.SEMGLUTEN, tags.ZEROACUCAR]},
	{ id:2502,tags:[tags.SEMGLUTEN]},
	{ id:2503,tags:[tags.ZEROACUCAR, tags.SEMGLUTEN]},
	{ id:2542,tags:[tags.ZEROACUCAR]},
	{ id:2603,tags:[tags.SEMLACTOSE, tags.SEMGLUTEN]},
	{ id:2610,tags:[]},
	{ id:2629,tags:[tags.SEMGLUTEN, tags.SEMLACTOSE]},
	{ id:2256,tags:[]},
	{ id:2621,tags:[]},
	{ id:2622,tags:[]},
	{ id:2623,tags:[]},
	{ id:2625,tags:[]},
	{ id:3045,tags:[tags.SEMGLUTEN ]},
	{ id:3112,tags:[]},
	{ id:3164,tags:[tags.NATURAL]},
	{ id:3172,tags:[tags.ZEROACUCAR, tags.SEMGLUTEN, tags.SEMLACTOSE]},
	{ id:3173,tags:[tags.ZEROACUCAR, tags.SEMGLUTEN, tags.SEMLACTOSE]},
	{ id:2223,tags:[]},
	{ id:3177,tags:[]},
	{ id:3181,tags:[tags.SEMGLUTEN]},
	{ id:3182,tags:[tags.SEMGLUTEN]},
	{ id:3183,tags:[]},
	{ id:3184,tags:[tags.SEMGLUTEN]},
	{ id:3185,tags:[tags.SEMGLUTEN]},
	{ id:3186,tags:[tags.SEMGLUTEN]},
	{ id:3187,tags:[tags.SEMGLUTEN]},
	{ id:3188,tags:[]},
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
	{ id: 1797, tags: [ tags.ZEROACUCAR ]}
];

function tagnizar(produto) {

	if(produto.tags.length === 0) {
		return
	}
	const elementoAlvo = document.getElementById(produto.id);
	if(!elementoAlvo){
		return
	}
	
	produto.tags.forEach((p)=>{
		elementoAlvo.innerHTML+=`<a href="${p.link}">${p.titulo}</a>`;
	});
	
}  
	
produtos.forEach((p)=>{
	tagnizar(p);
});


