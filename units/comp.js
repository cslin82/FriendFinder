const friendsList = require('../app/data/friends');

// inclusive
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (1 + max - min));
}

function compatScore(scoresA, scoresB) {
    if (scoresA.length !== scoresB.length) return false;
    else {
        // var diffArr = new Array(scoresA.length);
        var score = 0;
        for (let i = 0; i < scoresA.length; i++) {
            // diffArr[i] = Math.abs(scoresA[i] - scoresB[i]);
            score += Math.abs(scoresA[i] - scoresB[i])
        }

    }
    // return diffArr;
    return score;
}

// var myFriend;

// myFriend = friendsList[0].scores;

var myScores = new Array(10);

for (let i = 0; i < myScores.length; i++) {
    myScores[i] = randomInt(1, 5);

}
console.log('myScores', myScores);
// console.log('myFriend', myFriend);

// console.log('compat', compatScore(myScores, myFriend));

var compats = [];

for (let j = 0; j < friendsList.length; j++) {
    const element = friendsList[j];
    compats.push(compatScore(myScores, element.scores))
    friendsList[j].compat = compatScore(myScores, element.scores);
}

console.log('compats', compats);
console.log('compats', compats.sort());

console.log(Math.min(...compats));

console.log(friendsList.find(friend => friend.compat === Math.min(...compats)));






