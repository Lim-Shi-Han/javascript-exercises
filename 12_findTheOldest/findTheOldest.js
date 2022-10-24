const findTheOldest = function(array) {
    // return array.sort((a, b) => (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) ? -1 : 1)[0]
    // return array.sort(person => person.yearOfDeath - person.yearOfBirth)[array.length - 1] DOESN'T WORK YET
    return array.reduce((oldest, current) => (getAge(oldest.yearOfBirth, oldest.yearOfDeath) > getAge(current.yearOfBirth, current.yearOfDeath)) ? oldest : current);
};

const getAge = function(yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {
        yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
