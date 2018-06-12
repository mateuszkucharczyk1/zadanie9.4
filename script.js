var heighttree = prompt("wysokosc drzewa");
function drawTree(heighttree){
	for(var i = heighttree; i >= 1; i--){
		var star = "";
		for(var j=i; j <= heighttree; j++ ){
			star += '*';

		}
		console.log(star);
		console.log("\n");

	}
}
drawTree(heighttree);
