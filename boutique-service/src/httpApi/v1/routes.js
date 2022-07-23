export default function attachRoutes({ models, router, handlers }) {
    /**
     * @api {get} /v1/boutiques Return a list of all boutiques
     * @apiName BoutiqueList
     * @apiGroup Boutiques
     * @apiVersion 1.0.0
     *
     * @apiDescription Returns the complete list of boutiques
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     [{
     *       "location": {
     *         "lon": -0.0757307,
     *         "lat": 51.52338109999999
     *       },
     *       "_id": "5234d2b244e937489c00011c",
     *       "logo": {
     *         "url": "https://res.cloudinary.com/streethub/image/upload/brand/530df3dc6aa953000000014d/nqHF2T7qTjsKq8lE3ugn"
     *       },
     *       "founder_quote": "\"Our mission at Maiden is simple: to make fun, quality gifts accessible to everyone.\"",
     *       "description": "First established in 2009 by Noah Crutchfield, Maiden has become a legendary fixture in Shoreditch's creative independent community. Noah's empire has since expanded to two wonderful shops at Boxpark Shoreditch; THE GIFT BOX & THE PLAY BOX both stocking the different and ever updated bright, eclectic range of gifts that Maiden has become renowned for. A destination for those seeking an original gift, Maiden also plays host to design-led homewares with a humorous twist. ",
     *       "slug": "maiden-in-e16hu",
     *       "name": "MAIDEN"
     *     }]
     *
     */
    router.get('/boutiques', handlers.boutiques.bind(undefined, {models}));

    /**
     * @api {get} /v1/boutiques/near Return the boutiques closest to provided coordinates
     * @apiName BoutiquesNear
     * @apiGroup Boutiques
     * @apiVersion 1.0.0
     *
     * @apiDescription Return the boutiques closest to provided coordinates
     *
     * @apiParam {Number} latitude          Latitude component of coordinate
     * @apiParam {Number} longitude         Longitude component of coordinate
     * @apiParam {Number} boutiquesCount    Number of boutiques to return
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
        [{
            "distance":1296.6768829126947,
            "boutique":{
                "location":{
                    "lon":-5.536554499999999,
                    "lat":50.11808689999999
                },
                "_id":"598c871ec537f00400849982",
                "name":"Fishboy PZ",
                "slug":"fishboy-pz-in-tr184ad",
                "logo":{
                    "url":"https://res.cloudinary.com/streethub/image/upload/v1502381843/brand/no_brand/gjcd3befzterccstz6st.png"
                },
                "description":"Penzance based Fishboy PZ is run by Izzy Philips and Mat McIvor who curate a considered collection of fashion for the contemporary wardrobe. They source their products from an exciting collection of brands alongside their own range. Inspired by the Cornish traditions of farming, fishing and mining, the Fishboy PZ collection is screen-printed on site by Mat. ",
                "founder_quote":"“We feel that whilst shopping habits have changed with the advances in technology, there seems to be a surge in independent boutiques coming onto the high street.”"
            }
        },
        {
            "distance":1309.3930960856424,
            "boutique":{
                "location":{
                    "lon":-5.0713871,
                    "lat":50.15683139999999
                },
                "_id":"5a5e27f71b063e04007b2205",
                "name":"Blink",
                "slug":"blink-in-tr112ab",
                "description":"Located in Falmouth, Blink offers an ever-evolving showcase of design and fashion, curated by founders Norbert and Sarah. The boutique celebrates lesser-known designers and places them alongside classic brands that have stood the test of time, creating a truly unique edit. The pair hope to inspire and delight customers through their range of products and invest in pieces that are both accessible and affordable.",
                "founder_quote":"“Despite the growing trend towards online retail, we believe that there will always be a desire for bricks and mortar shops where people can have a quality shopping experience that offers community as well as indulgence.”\n"
            }
        },
        {
            "distance":1321.315079775292,
            "boutique":{
                "location":{
                    "lon":-5.0499848,
                    "lat":50.2643736
                },
                "_id":"592403b2fe57dd040021683a",
                "name":"The Clementine",
                "slug":"the-clementine-in-pl231az",
                "description":"The Clementine is a lifestyle boutique based in Cornwall inspired by coastal landscapes and nature. They have a passion for great design and many products are designed and made in Britain. Their range includes a beautiful collection of elemental prints, candles in citrus and fruity notes and luxury women's clothing.",
                "logo":{
                    "url":""
                },
                "founder_quote":"“In the future, I think that more and more of us will seek original and distinctive products for our homes and to give as gifts and I believe that’s where the small independent shops can truly shine.”   "
            }
        },
        {
            "distance":1336.594923461554,
            "boutique":{
                "location":{
                    "lon":-5.0858928,
                    "lat":50.4134188
                },
                "_id":"5a85c182f02ea7040075445c",
                "name":"Watershed",
                "slug":"watershed-in-tr71ep",
                "description":"Following several years' experience in the surf and lifestyle industries, James and Jake decided to found Watershed as a space to stock their favourite ocean-inspired classics. Over the past seven years, Watershed has become a stand-alone brand, renowned for its laid-back style. The Cornwall-based concept store stocks a handpicked range of casual essentials, from clothing and accessories to homewares.",
                "founder_quote":"Retail needs to evolve to survive. This evolution will include a more experience-led concept whereby physical stores will need to offer multiple services and product offerings."
            }
        },
        {
            "distance":1350.3892589353736,
            "boutique":{
                "location":{
                    "lon":-4.8835825,
                    "lat":50.5060293
                },
                "_id":"57b2ee5b1f7cf40300184a11",
                "name":"Jo & Co Home",
                "slug":"jo-and-co-home-in-pl277lr",
                "logo":{
                    "url":"https://res.cloudinary.com/streethub/image/upload/v1471344206/brand/no_brand/dcj9xudtw7bzaqu39hwr.png"
                },
                "description":"Jo & Co Home is a family run lifestyle store located in North Cornwall dedicated to thoughtfully sourcing products from suppliers all over the world. The result is a curated, contemporary offering from emerging designers and more established homeware and beauty brands. With a wide range of products and a growing list of suppliers from Cornwall and beyond, Jo & Co Home offers the discerning design-fan an irresistible selection to fill their home with.",
                "founder_quote":"\"Most people that visit our store say how good it smells! But really - its the eclectic mix of brands from across the world that make us who we are. We love sourcing and discovering new brands both in the UK and internationally.\"\n"
            }
        }]
     *
     */
    router.get('/boutiques/near', handlers.boutiquesNear.bind(undefined, {models}));
}
