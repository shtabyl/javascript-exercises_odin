const findTheOldest = function(people) {
    people.forEach(person => {
        if (person.yearOfDeath) {
            person['age'] = person.yearOfDeath - person.yearOfBirth;
        } else {
            let currentTime = new Date();
            person['age'] = currentTime.getFullYear() - person.yearOfBirth;
        }
    });

    const ages = people.map(person => person.age);
    const oldest = ages.reduce((a, b) => Math.max(a, b), -Infinity);
    return people.find(person => person.age === oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
