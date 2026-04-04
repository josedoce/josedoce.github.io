/**
* @author JOSEDOCE
*/

const ORGANICO = {
	id: 1,
	titulo: 'Orgânico',
	link: 'https://www.emporiodocevida.com.br/loja/busca.php?loja=1113620&palavra_busca=organico',
};
const ZEROACUCAR = {
		id: 2,
		titulo: 'Zero Açúcar',
		link: 'https://www.emporiodocevida.com.br/produtos-naturais/zero-acucar',
};

const SEMLACTOSE = {
	id: 3,
	titulo: 'Sem Lactose',
	link: 'hhttps://www.emporiodocevida.com.br/petiscos/sem-lactose',
};
const VEGANO = {
	id: 4,
	titulo: 'Vegano',
	link: 'https://www.emporiodocevida.com.br/loja/busca.php?loja=1113620&palavra_busca=vegano',
};
const NATURAL = {
	id: 5,
	titulo: '100% Natural',
	link: 'https://www.emporiodocevida.com.br/produtos-naturais',
};
const CHOCOLATE = {
	id: 6,
	titulo: 'Chocolate',
	link: 'https://www.emporiodocevida.com.br/chocolates',
};

const SEMGLUTEN = {
	id: 7,
	titulo: 'Sem glúten',
	link: 'https://www.emporiodocevida.com.br/petiscos/sem-gluten'
};
const ZEROSODIO = {
	id: 8,
	titulo: 'Zero Sódio',
	link: 'https://www.emporiodocevida.com.br/loja/busca.php?loja=1113620&palavra_busca=zero+s%F3dio'
};
const INTEGRAL = {
	id: 9,
	titulo: 'Integral',
	link: 'https://www.emporiodocevida.com.br/loja/busca.php?loja=1113620&palavra_busca=integral'
};

//MENSAGENS PARA COMMIT
//Adicionar tag
//Remover tag
const produtos = [
	
	{ id: 2094, tags: [SEMGLUTEN, SEMLACTOSE, VEGANO]},
	
	{ id: 7566, tags: [SEMGLUTEN, SEMLACTOSE, VEGANO]},
	{ id: 7564, tags: [SEMGLUTEN, SEMLACTOSE, VEGANO]},
	{ id: 7748, tags: [SEMGLUTEN, SEMLACTOSE, VEGANO]},
	{ id: 7563, tags: [SEMGLUTEN, SEMLACTOSE, VEGANO]},
	{ id: 7565, tags: [SEMGLUTEN, SEMLACTOSE, VEGANO]},
	 
	{ id: 5062, tags: [SEMGLUTEN]},
	{ id: 5055, tags: [SEMGLUTEN, SEMLACTOSE]},
	{ id: 5264, tags: [SEMGLUTEN, SEMLACTOSE]},
	{ id: 5265, tags: [SEMGLUTEN]},
	
	{ id: 5065, tags: [SEMGLUTEN]},
	{ id: 1100, tags: [SEMGLUTEN]},
	{ id: 5721, tags: [SEMGLUTEN]},
	{ id: 6139, tags: [INTEGRAL, SEMGLUTEN]},
	{ id: 6140, tags: [INTEGRAL, SEMGLUTEN]},
	{ id: 6141, tags: [SEMGLUTEN]},
	{ id: 6142, tags: [SEMGLUTEN]},
	{ id: 7987, tags: [SEMGLUTEN, INTEGRAL]},
	{ id: 7988, tags: [SEMGLUTEN, INTEGRAL]},
	{ id: 7998, tags: [SEMGLUTEN, INTEGRAL]},
	{ id: 1724, tags: [SEMGLUTEN, ZEROACUCAR]},
	{ id: 1723, tags: [SEMGLUTEN, ZEROACUCAR]},
	{ id: 1722, tags: [SEMGLUTEN, ZEROACUCAR]},
	{ id: 1721, tags: [SEMGLUTEN, ZEROACUCAR]},
	{ id: 8007, tags: [SEMGLUTEN, ZEROACUCAR]},	
	
	
    { id: 3251, tags: [SEMGLUTEN]},
	{ id: 3058, tags: [SEMGLUTEN]},
	{ id: 5034, tags: [SEMGLUTEN]},
	{ id: 5054, tags: [SEMGLUTEN]},
	{ id: 5041, tags: [SEMGLUTEN]},
	{ id: 5033, tags: [SEMGLUTEN]},
	{ id: 5027, tags: [SEMGLUTEN]},
	{ id: 5035, tags: [SEMGLUTEN]},
	{ id: 5036, tags: [SEMGLUTEN]},
	{ id: 5269, tags: [SEMGLUTEN]},
	
	{ id: 3234, tags: [SEMGLUTEN]},
	{ id: 3253, tags: [SEMGLUTEN]},
	{ id: 2415, tags:[VEGANO, SEMLACTOSE, SEMGLUTEN]},
	{ id: 1024, tags:[SEMGLUTEN, ZEROACUCAR]},
	{ id: 5559, tags:[SEMGLUTEN, ZEROACUCAR]},
	{ id: 7691, tags:[SEMGLUTEN, ZEROACUCAR]},
	{ id: 5537, tags:[ZEROACUCAR]},

	{ id: 5581, tags:[SEMGLUTEN, ZEROACUCAR]},
	{ id: 6705, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 7387, tags:[ZEROACUCAR]},
	{ id: 1626 , tags:[INTEGRAL, VEGANO, SEMLACTOSE]},
	{ id: 5134 , tags:[INTEGRAL, VEGANO, SEMLACTOSE]},
	{ id: 6267 , tags:[INTEGRAL, VEGANO, SEMLACTOSE]},
	{ id: 7867, tags:[INTEGRAL, VEGANO, SEMLACTOSE]},
	{ id: 1213, tags:[SEMLACTOSE, SEMGLUTEN, ZEROACUCAR]},
	{ id: 1215, tags:[SEMLACTOSE, SEMGLUTEN, ZEROACUCAR]},

	{ id: 7386, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 1764, tags:[ZEROACUCAR]},
	{ id: 2482, tags:[ZEROACUCAR, SEMGLUTEN, SEMLACTOSE]},

	{ id: 2480, tags:[ZEROACUCAR, SEMGLUTEN, SEMLACTOSE]},

	{ id: 2484, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 2597, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 2598, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 2599, tags:[SEMGLUTEN, ZEROACUCAR, ZEROSODIO]},
	{ id: 3177, tags:[SEMGLUTEN]},
	{ id: 1101, tags:[SEMGLUTEN]},
	{ id: 1102, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 1552, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 5535, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 5536, tags:[SEMGLUTEN, ZEROACUCAR]},
	{ id: 6268, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 8907, tags:[SEMGLUTEN]},
	{ id: 9105, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 9108, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 9107, tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id: 3211, tags: [SEMGLUTEN, NATURAL, ZEROACUCAR]},
	{ id: 3212, tags: [SEMGLUTEN, NATURAL, ZEROACUCAR]},
	{ id: 3213, tags: [SEMGLUTEN, NATURAL, ZEROACUCAR]},
	{ id: 5257, tags: [VEGANO]},
	{ id: 5255, tags: [VEGANO]},
	{ id: 5254, tags: [VEGANO]},
	{ id: 5253, tags: [VEGANO]},
	{ id: 5252, tags: [VEGANO]},
	{ id: 5245, tags: [VEGANO]},
	{ id: 5247, tags: [VEGANO]},
	{ id: 5258, tags: [VEGANO]},
	{ id: 5246, tags: [VEGANO]},
	{ id: 2600, tags: [ZEROACUCAR]},
	{ id: 9110, tags: [SEMGLUTEN]},
	{ id: 2483, tags: [SEMGLUTEN]},
	{ id: 3106, tags: [SEMGLUTEN, SEMLACTOSE]},
	{ id: 3107, tags: [SEMGLUTEN, SEMLACTOSE]},
	{ id: 6754, tags: [SEMGLUTEN, SEMLACTOSE]},
	{ id: 5132, tags: [SEMGLUTEN]},
	{ id: 5224, tags: [SEMLACTOSE, ZEROACUCAR]},
	{ id: 5223, tags: [SEMLACTOSE, ZEROACUCAR]},
	{ id: 5222, tags: [SEMLACTOSE, ZEROACUCAR]},
	{ id: 6753, tags: [SEMGLUTEN, ORGANICO]},
	{ id: 3170, tags: [SEMGLUTEN, ORGANICO]},
	{ id: 3169, tags: [SEMGLUTEN, ORGANICO]},
	{ id: 5260, tags: [SEMGLUTEN, ORGANICO]},
	{ id: 5261, tags: [SEMGLUTEN, ORGANICO]},
	{ id: 5083, tags: [ZEROSODIO]},
	{ id: 5081, tags: [ZEROSODIO]},
	{ id: 5080, tags: [ZEROSODIO]},
	{ id: 5079, tags: [ZEROSODIO]},
	{ id: 5078, tags: [ZEROSODIO]},
	{ id: 5077, tags: [ZEROSODIO]},
	{ id: 5084, tags: [ZEROSODIO]},
	{ id: 982, tags: [ZEROSODIO]},
	{ id: 819, tags: [ZEROSODIO]},
	{ id: 141, tags: [ZEROSODIO]},
	{ id: 155, tags: [ZEROSODIO]},
	{ id: 933, tags: [ZEROSODIO]},
	{ id: 983, tags: [ZEROSODIO]},
	{ id: 883, tags: [ZEROSODIO]},
	{ id: 68, tags: [ZEROSODIO]},
	{ id: 19, tags: [ZEROSODIO]},
	{ id: 981, tags: [ZEROSODIO]},
	{ id: 5201, tags: [ZEROACUCAR]},
	{ id: 5188, tags: [ZEROACUCAR]},
	{ id: 5187, tags: [ZEROACUCAR]},
	{ id: 5202, tags: [ZEROACUCAR]},
	{ id: 5203, tags: [ZEROACUCAR]},
	{ id: 5167, tags: [SEMGLUTEN, VEGANO]},
	{ id: 5166, tags: [SEMGLUTEN, VEGANO, ZEROSODIO]},
	{ id: 5165, tags: [SEMGLUTEN, VEGANO, SEMLACTOSE]},
	{ id: 5165, tags: [SEMGLUTEN, VEGANO, SEMLACTOSE]},
	{ id: 5164, tags: [SEMGLUTEN, VEGANO, SEMLACTOSE]},
	{ id: 2624, tags: [SEMGLUTEN, VEGANO]},
	{ id: 3296, tags: [SEMGLUTEN, VEGANO]},
	{ id: 3199, tags: [SEMGLUTEN, VEGANO]},
	{ id: 3205, tags: [SEMGLUTEN, VEGANO]},
	{ id: 3259, tags: [SEMGLUTEN, VEGANO]},
	{ id:1094,tags:[SEMGLUTEN]},
	{ id:8537,tags:[NATURAL]},
	{ id:142,tags:[]},
	{ id:224,tags:[]},
	{ id:802,tags:[NATURAL]},
	{ id:156,tags:[ZEROSODIO]},
	{ id:9988,tags:[NATURAL]},
	{ id:6376,tags:[ORGANICO]},
	{ id:6858,tags:[ORGANICO]},
	{ id:485,tags:[SEMGLUTEN ]},
	{ id:2112,tags:[ SEMLACTOSE, ]},
	{ id:2170,tags:[CHOCOLATE]},
	{ id:2197,tags:[SEMGLUTEN]},
	{ id:2200,tags:[]},
	{ id:5883,tags:[SEMLACTOSE, ZEROSODIO]},
	{ id:2327,tags:[ NATURAL ]},
	{ id:2231,tags:[ SEMLACTOSE, SEMGLUTEN, ZEROACUCAR]},
	{ id:2502,tags:[SEMGLUTEN]},
	{ id:2503,tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id:2542,tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id:2603,tags:[SEMLACTOSE, SEMGLUTEN]},
	{ id:2610,tags:[]},
	{ id:2629,tags:[SEMGLUTEN, SEMLACTOSE]},
	{ id:9106,tags:[ZEROACUCAR, SEMGLUTEN]},
	{ id:1498,tags:[ SEMGLUTEN]},
	{ id:1499,tags:[ SEMGLUTEN]},
	{ id:2054,tags:[ ZEROACUCAR]},
	{ id:2058,tags:[ ZEROACUCAR]},
	{ id:2055,tags:[ ZEROACUCAR]},
	{ id:5137,tags:[ SEMGLUTEN, SEMLACTOSE ]},
	{ id:2169,tags:[ ZEROACUCAR ]},
	{ id:2256,tags:[]},
	{ id:2621,tags:[]},
	{ id:2622,tags:[]},
	{ id:2623,tags:[VEGANO, SEMGLUTEN]},
	{ id:2625,tags:[VEGANO, SEMGLUTEN]},
	{ id:1099,tags:[SEMGLUTEN, INTEGRAL ]},
	{ id:1791,tags:[SEMGLUTEN]},
	{ id:1835,tags:[SEMGLUTEN ]},
	{ id:3045,tags:[SEMGLUTEN ]},
	{ id:3112,tags:[SEMLACTOSE]},
	{ id:3164,tags:[NATURAL]},
	{ id:1500,tags:[ZEROACUCAR, SEMGLUTEN, SEMLACTOSE]},
	{ id:1613, tags:[ZEROACUCAR, SEMLACTOSE, SEMGLUTEN]},
	{ id:1615, tags: [ SEMGLUTEN, SEMLACTOSE ]},
	{ id:1757, tags:[INTEGRAL, SEMGLUTEN]},
	{ id:6026,tags:[INTEGRAL, SEMGLUTEN]},
	{ id: 6159, tags:[INTEGRAL, SEMGLUTEN]},
	{ id:7475,tags:[SEMLACTOSE, SEMGLUTEN]},
	{ id:3172,tags:[ZEROACUCAR, SEMGLUTEN, SEMLACTOSE]},
	{ id:3173,tags:[ZEROACUCAR, SEMGLUTEN, SEMLACTOSE]},
	{ id:1497,tags:[ZEROACUCAR, SEMGLUTEN, SEMLACTOSE]},
	{ id:2613,tags:[ZEROACUCAR]},
	{ id:2223,tags:[]},
	
	{ id:3181,tags:[SEMGLUTEN]},
	{ id:3182,tags:[SEMGLUTEN]},
	{ id:3183,tags:[]},
	{ id:3184,tags:[SEMGLUTEN]},
	{ id:3185,tags:[SEMGLUTEN]},
	{ id:3186,tags:[SEMGLUTEN]},
	{ id:3187,tags:[SEMGLUTEN]},
	{ id:3188,tags:[SEMLACTOSE]},
	
	
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
	{ id:3093,tags:[SEMGLUTEN]},
	{ id:3094,tags:[]},
	{ id:3095,tags:[]},
	{ id:3097,tags:[]},
	{ id:3098,tags:[]},
	{ id:3099,tags:[]},
	{ id:5339,tags:[]},
	{ id:3163,tags:[]},
	{ id:3162,tags:[]},
	{ id:3165,tags:[]},
	{ id: 1797, tags: [ ZEROACUCAR ]},
	{ id: 1796, tags: [ ZEROACUCAR ]},
	{ id: 1808, tags: [ SEMGLUTEN, SEMLACTOSE, VEGANO ]},
	{ id: 5682, tags: [ SEMGLUTEN, INTEGRAL, VEGANO ]},
	{ id: 1807, tags: [ SEMGLUTEN, INTEGRAL, VEGANO ]},
	{ id: 5683, tags: [ SEMGLUTEN, INTEGRAL, VEGANO ]},
	{ id: 3111, tags: [ VEGANO ]},
	{ id: 5971, tags: [ SEMGLUTEN, VEGANO ]},
	{ id: 1902, tags: [ SEMGLUTEN, VEGANO ]},
	{ id: 1806, tags: [ SEMGLUTEN, VEGANO ]},
	{ id: 5681, tags: [ SEMGLUTEN, VEGANO ]},
	{ id: 1909, tags: [ SEMGLUTEN, VEGANO ]},
	{ id: 1811, tags: [ SEMGLUTEN, SEMLACTOSE ]},
	{ id: 1810, tags: [ SEMGLUTEN, SEMLACTOSE ]},
	{ id: 1910, tags: [ SEMGLUTEN, SEMLACTOSE ]},
	{ id: 1911, tags: [ SEMGLUTEN, ZEROACUCAR, VEGANO ]},
	{ id: 5684, tags: [ SEMGLUTEN, ZEROACUCAR, VEGANO ]},
	{ id: 8997, tags: [ ZEROACUCAR ]},
	{ id: 1111, tags: [ ZEROACUCAR, SEMLACTOSE ]},
	{ id: 8996, tags: [ ZEROACUCAR ]},
	{ id: 1520, tags: [ ZEROACUCAR ]},
	{ id: 5180, tags: [ ZEROACUCAR ]},
	{ id: 1494, tags: [ ZEROACUCAR ]},
	{ id: 5179, tags: [ ZEROACUCAR ]},
	{ id: 7252, tags: [ ZEROACUCAR ]},
	{ id: 7254, tags: [ ZEROACUCAR ]},
	{ id: 7255, tags: [ ZEROACUCAR ]},
	{ id: 1665, tags: [ ZEROACUCAR, VEGANO, SEMLACTOSE ]},
	{ id: 2629, tags: [ SEMLACTOSE ]},
	//parei aqui, onde o produto é filtrado por nome
	{ id: 7332, tags: [ SEMGLUTEN, SEMLACTOSE ]},
	{ id: 1930, tags: [ SEMGLUTEN, SEMLACTOSE, ZEROACUCAR ]},
	{ id: 3158, tags: [ZEROSODIO]}
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


