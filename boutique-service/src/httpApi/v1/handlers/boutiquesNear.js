import * as check from '../utils/check.js';
import haversine from '../utils/distance.js';
import sortedIndex from '../utils/sort.js';

export default function boutiques({models}, req, res, next) {
    const Boutique = models.boutique;
    const userLat = req?.query?.lat;
    const userLon = req?.query?.lon;
    var boutiquesCount = req?.query?.boutiquesCount || 5;

    //Very basic checks
    if(check.checkFloat(userLat)
        && check.checkFloat(userLon)
        && check.checkInt(boutiquesCount)) {

            var closestBoutiques = [];

            Boutique.find({})
                .then(boutiques => {
                    //Checks the requested number of boutques is not longer than the actual number of boutiques
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

        //Computes distance between user and boutique
	    var location = boutique.location;
	    var distance = distanceFunction(userLat, userLon, location.lat, location.lon);
        
        /*
        Only adds this boutique to array of closest boutiques if 
        distance of this boutique is lower than the distance of the furthest
        boutique in said array
        */
        if(distance<maxDist){
            var boutiqueObj = new Object();
            boutiqueObj.distance = distance;
            boutiqueObj.boutique = boutique;
            
            /*
            The array of closest boutiques is always sorted,
            thus, we only need to worry about adding a boutique to it
            in the correct index
            */
            var index = sortedIndex(closestBoutiquesObj, distance);
            closestBoutiquesObj.splice(index,0,boutiqueObj);

            if(closestBoutiquesObj.length>boutiquesCount){
                /*
                if the amount of boutiques in the array of closest boutiques
                is bigger than the requested amount (eg 5), 
                then the furthest boutiques of that array is removed
                */
                closestBoutiquesObj.pop();
                maxDist = closestBoutiquesObj[closestBoutiquesObj.length-1].distance;
            }
        }
	});

	return closestBoutiquesObj;
}





