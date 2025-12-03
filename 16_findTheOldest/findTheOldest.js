const findTheOldest = function(people) {
    people.forEach(element => {
        if (!element.yearOfDeath) {
            element.age = 2011 - element.yearOfBirth;
        } else {
            element.age = element.yearOfDeath - element.yearOfBirth;
        }
        
    });

    const peopleAges = people.map((person) => person.age);
    const largestValue = Math.max(...peopleAges);
    const indexOfLargest = peopleAges.indexOf(largestValue);

    return people[indexOfLargest];
};

// Do not edit below this line
module.exports = findTheOldest;
