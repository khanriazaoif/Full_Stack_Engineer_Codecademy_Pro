// let fasterShip = {
//     'Fuel Type': 'Turbo Fuel',
//     color: 'silver'
// };

// let spaceship = {
//     homePlanet: 'Earth',
//     color: 'silver',
//     'Fuel Type': 'Turbo Fuel',
//     numCrew: 5,
//     flightPath: ['Venus', 'Mars', 'Saturn']
// };
//
// // Write your code below
// let crewCount = spaceship.numCrew;
// let planetArray = spaceship.flightPath;

// let spaceship = {
//     'Fuel Type' : 'Turbo Fuel',
//     'Active Mission' : true,
//     homePlanet : 'Earth',
//     numCrew: 5
// };
//
// let propName =  'Active Mission';
//
// // Write your code below
// let isActive = spaceship['Active Mission'];
// console.log(spaceship['Active Mission']);

// let spaceship = {
//     'Fuel Type' : 'Turbo Fuel',
//     homePlanet : 'Earth',
//     color: 'silver',
//     'Secret Mission' : 'Discover life outside of Earth.'
// };
//
// // Write your code below
// spaceship.color = 'glorious gold';
// spaceship.numEngines = 7;
// delete spaceship['Secret Mission'];

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
alienShip = {
    retreat () {
        console.log(retreatMessage);
    },
    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!');
    }
}

alienShip.retreat();
alienShip.takeOff();