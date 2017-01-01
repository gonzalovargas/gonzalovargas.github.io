

//npm install transantiago-client --save
var tsapi = require("transantiago-client");



fs = require('fs');


//var paraderos = ["pc907", "pc908", "pc909", "pc910", "pc769", "pc1078", "pc1075", "pc100"];

//var paraderos = ["pc100"];

var paraderos = ["PC926","PC617","PC927","PC928","PC181","PC180","PC929","PC620","PC951","PC930","PC950","PC931","PC932","PC949","PC103","PC98","PC933","PC97","PC99","PC102","PC100","PC1035","PC934","PC1021","PC935","PC946","PC945","PC936","PC944","PC938","PC1074","PC1077","PC1075","PC1076","PC1078","PC1071","PC1063","PC1040","PC943","PC939","PC942","PC769","PC371","PC1094","PC772","PC792","PC771","PC770","PC793","PC941","PC774","PC790","PC773","PC791","PC911","PC910","PC909","PC912","PC1110","PC908","PC913","PC907","PC914"]

//paradero 216

//var paraderos = ["PG1757","PG1761","PG1756","PG1281","PG888","PG889","PG1280","PG232","PG231","PG230","PG1746","PG229","PG239","PG228","PG240","PG227","PG245","PG246","PG247","PG196","PG241","PG226","PG1684","PG243","PG225","PG242","PG244","PG257","PG224","PG256","PG255","PG1700","PG143","PG1721","PG142","PG1127","PG1659","PG141","PG1665","PG120","PG136","PG1667","PG1657","PG1664","PG138","PG139","PG99","PE63","PG97","PE71","PE1294","PE112","PG254","PE1295","PE187","PG95","PE120","PE173","PE1404","PE170","PE169","PE168","PE167","PE166","PD177","PD188","PD218","PD219","PD231","PD230","PD220","PD187","PD178","PD229","PD221","PD186","PD227","PD223","PD228","PD222","PD180","PD179","PD226","PD1116","PD183","PD1375","PD182","PD185","PD184","PD181","PD224","PC112","PC111","PC89","PC90","PC110","PC109","PC91"];






function info(stopcode){
	tsapi(stopcode).then( r => {
		disponibles = r["avail"];
		for (var k = 0; k < disponibles.length; k++) {
			buses_recorridos(stopcode, disponibles[k]["service"], disponibles[k]["buses"])
		}
	}).catch(err => {
		console.log(err)
	});
}

function buses_recorridos(stopcode, recorrido, buses){
	var n = Date();
	for (var j = 0; j < buses.length; j++){
		if (recorrido == "C14"){
		patente = buses[j]["bus"];
		distancia = buses[j]["dist"];
		console.log(n + "," + recorrido + "," + stopcode + ","+ patente + "," + distancia.substring(0, distancia.length-6));
		}
	}
}

function ciclo_de_informacion(){
	for (var i = 0; i < paraderos.length; i++) {
		info(paraderos[i]);
	}
}

ciclo_de_informacion();

/*for (var w = 0; w < 6*60; w++) {
	console.log(w);
	setTimeout(ciclo_de_informacion, w*10000);
}*/

