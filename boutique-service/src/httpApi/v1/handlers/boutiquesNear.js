import * as check from '../utils/check.js';
import haversine from '../utils/distance.js';
import sortedIndex from '../utils/sort.js';

export default function boutiques({models}, req, res, next) {
    const Boutique = models.boutique;
    const userLat = req.query.lat;
    const userLon = req.query.lon;
    var boutiquesCount = req.query.boutiquesCount || 5;

    if(check.checkFloat(userLat)
        && check.checkFloat(userLon)
        && check.checkInt(boutiquesCount)) {
            var closestBoutiques = [];
            Boutique.find({})
                .then(boutiques => {
                    boutiquesCount = boutiquesCount > boutiques.length ? boutiques.length : boutiquesCount;
                    closestBoutiques = getClosestBoutique(boutiques, userLat, userLon, haversine, boutiquesCount);
                    res.send(closestBoutiques);
                })
                .catch(next);
        }
    else {
        res.send([]);
    }

}


function getClosestBoutique(boutiques, userLat, userLon, distanceFunction, boutiquesCount){
	const closestBoutiquesObj = [];
    var maxDist = Number.MAX_SAFE_INTEGER;
	boutiques.forEach(boutique => {
	    var location = boutique.location;
	    var distance = distanceFunction(userLat, userLon, location.lat, location.lon);
        if(distance<maxDist){
            var boutiqueObj = new Object();
            boutiqueObj.distance = distance;
            boutiqueObj.boutique = boutique;
            var index = sortedIndex(closestBoutiquesObj, distance);
            closestBoutiquesObj.splice(index,0,boutiqueObj);
            if(closestBoutiquesObj.length>boutiquesCount){
                closestBoutiquesObj.pop();
                maxDist = closestBoutiquesObj[closestBoutiquesObj.length-1].distance;
            }
        }
	});
    const closestBoutiques = [];
    closestBoutiquesObj.forEach(b=>closestBoutiques.push(b.boutique));
	return closestBoutiques;
}





