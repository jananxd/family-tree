const personMap = new Map<string, Person>();

export interface Person {
    name: string;
    gender: 'male' | 'female'
    mother?: Person; // there is a mother, but it might not be known
    father?: Person; // there is a father, but it might not be known
    spouse?: Person;
}

export function addChild(mothersName: string, child: Person) {
    personMap.set(child.name, child);

    const mother = personMap.get(mothersName);
    if (!mother) {
        throw new Error(`Mother ${mothersName} not found`);
    }

    child.mother = mother;
    child.father = mother.spouse;
}

export function addMarriedCouple(husband: Person, wife: Person) {
    personMap.set(husband.name, husband);
    personMap.set(wife.name, wife);

    husband.spouse = wife;
    wife.spouse = husband;
}

// get children

export function getSons(parent: Person): Person[] {
    const peopleCopy: Person[] = Array.from(personMap.values()).filter(person => person.gender === 'male');

    if (parent.gender === 'male') {
        return peopleCopy.filter(person => person.father === parent)
    } else {
        return peopleCopy.filter(person => person.mother === parent)
    }
}

export function getDaughters(parent: Person): Person[] {
    const peopleCopy: Person[] = Array.from(personMap.values()).filter(person => person.gender === 'female');

    if (parent.gender === 'male') {
        return peopleCopy.filter(person => person.father === parent)
    } else {
        return peopleCopy.filter(person => person.mother === parent)
    }
}
