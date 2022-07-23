# Challenge README
In this file, I will explain every shortcut I took in the development of this challenge, as well as notify on some information that may be important to understand the project and its functionalities.

## The API

There are 2 important points to mention regarding the newly added API Endpoint (both disclosed in the OpenAPI https://github.com/MPires97/product-technical-tests/blob/ft-mp-boutiques-nearby/boutique-service/src/httpApi/v1/routes.js#L40).

The new endpoint is a GET endpoint, for this reason, the input that is passed onto it, is on the form of query parameters.

Even though it was requested that the API returned the 5 closest boutiques, I believed it would be interesting to allow the user to select this number. For this reason, the API supports an optional query parameter boutiquesCount.


## Public code usage

The code that is present in the utils folder (boutique-service\src\httpApi\v1\utils), was found online and was not created by me. I tested it for this challenge and take full responsibility for its usage and application, however, the algorithms used were found online and used to facilitate the development of this task.

## "Hacks"

Some mild shortcuts were taken in this task. Such as:

- When the user does not specify the number of boutiques they want, this value is defaulted to 5. This value should have been set in a properties file.
- The checks performed on API parameters are very simple, and the response when either of those fails is just an empty array.
- The utils folder could have been placed in another location
- There are no unit tests, however, there is a manual one, in the resources folder. This is explained in the next section. 

## Test Resource

Due to lack of time, I was not able to develop unit tests. However, I still managed to test if the results were correct, by running the script manualTest.js in the boutique-service/resources.

This script simply returns the distance between the user and every boutique, which allowed me to check if the closest boutiques were correct.