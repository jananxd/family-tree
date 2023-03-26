import {beforeAll, it, describe, expect} from '@jest/globals';
import {addChild, addMarriedCouple, getDaughters, getSons, Person} from "./index";

const kingArthur: Person = {
    name: "King Arthur",
    gender: 'male'
}

const queenMargaret: Person = {
    name: "Queen Margaret",
    gender: 'female'
}

// King Arthur and Queen Margaret have 5 children
// 4 Sons and 1 Daughter
const bill: Person = {
    name: "Bill",
    gender: 'male',
}

const charlie: Person = {
    name: "Charlie",
    gender: 'male'
}

const percy: Person = {
    name: "Percy",
    gender: 'male'
}

const ronald: Person = {
    name: "Ronald",
    gender: 'male'
}

const ginerva: Person = {
    name: "Ginerva",
    gender: 'female'
}

const flora: Person = {
    name: "Flora",
    gender: 'female'
}

const audrey: Person = {
    name: "Audrey",
    gender: 'female'
}

const helen: Person = {
    name: "Helen",
    gender: 'female'
}

const harry: Person = {
    name: "Harry",
    gender: 'male'
}

const victoire: Person = {
    name: "Victoire",
    gender: 'female'
}

const dominique: Person = {
    name: "Dominique",
    gender: 'female'
}

const louis: Person = {
    name: "Louis",
    gender: 'male'
}

describe('family tree', function () {

    beforeAll(function () {
        console.log('beforeAll');

        // first branch of family tree
        addMarriedCouple(kingArthur, queenMargaret);

        // king arthur and queen margaret have 5 children
        addChild(queenMargaret.name, bill);
        addChild(queenMargaret.name, charlie);
        addChild(queenMargaret.name, percy);
        addChild(queenMargaret.name, ronald);
        addChild(queenMargaret.name, ginerva);

        // second branch of family tree
        addMarriedCouple(bill, flora);
        addMarriedCouple(percy, audrey);
        addMarriedCouple(ronald, helen);
        addMarriedCouple(harry, ginerva);

        // bill and flora have 3 children
        addChild(flora.name, victoire);
        addChild(flora.name, dominique);
        addChild(flora.name, louis);
    })

    it('should return correct sons for both parent', function () {
        const firstBranchParents = [kingArthur, queenMargaret]
        firstBranchParents.forEach(parent => {
            const sons = getSons(parent).map(person => person.name)

            expect(sons.length).toBe(4)
            expect(sons).toEqual(expect.arrayContaining([charlie.name, bill.name, percy.name, ronald.name]))
        })

        const secondBranchParents = [bill, flora]
        secondBranchParents.forEach(parent => {
            const sons = getSons(parent).map(person => person.name)

            expect(sons.length).toBe(1)
            expect(sons).toEqual(expect.arrayContaining([louis.name]))
        })
    })

    it ('should return correct daughters for both parent', function () {
        const firstBranchParents = [kingArthur, queenMargaret]
        firstBranchParents.forEach(parent => {
            const daughters = getDaughters(parent).map(person => person.name)

            expect(daughters.length).toBe(1)
            expect(daughters).toEqual(expect.arrayContaining([ginerva.name]))
        })
    })
});