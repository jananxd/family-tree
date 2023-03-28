import {beforeAll, it, describe, expect} from '@jest/globals';
import {
    addChild,
    addMarriedCouple,
    getDaughters,
    getSons,
    Person
} from "./index";

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

const ted: Person = {
    name: "Ted",
    gender: 'male'
}

const remus: Person = {
    name: "Remus",
    gender: 'male'
}

const molly: Person = {
    name: "Molly",
    gender: 'female'
}

const lucy: Person = {
    name: 'Lucy',
    gender: 'female'
}

const rose: Person = {
    name: 'Rose',
    gender: 'female'
}

const hugo: Person = {
    name: 'Hugo',
    gender: 'male'
}

const malfoy: Person = {
    name: 'Malfoy',
    gender: 'male'
}

const draco: Person = {
    name: 'Draco',
    gender: 'male'
}

const aster: Person = {
    name: 'Aster',
    gender: 'female'
}

const james: Person = {
    name: 'James',
    gender: 'male'
}

const albus: Person = {
    name: 'Albus',
    gender: 'male'
}

const lily: Person = {
    name: 'Lily',
    gender: 'female'
}

const darcy: Person = {
    name: 'Darcy',
    gender: 'female'
}

const william: Person = {
    name: 'William',
    gender: 'male'
}

const alice: Person = {
    name: 'Alice',
    gender: 'female'
}

const ron: Person = {
    name: 'Ron',
    gender: 'male'
}

const ginny: Person = {
    name: 'Ginny',
    gender: 'female'
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
        // bill and flora have 3 children
        addChild(flora.name, victoire);
        addChild(flora.name, dominique);
        addChild(flora.name, louis);

        addMarriedCouple(percy, audrey);
        // percy and audrey have 2 children
        addChild(audrey.name, molly);
        addChild(audrey.name, lucy);

        addMarriedCouple(ronald, helen);
        // ronald and helen have 2 children
        addChild(helen.name, rose);
        addChild(helen.name, hugo);

        addMarriedCouple(harry, ginerva);
        addChild(ginerva.name, james);
        addChild(ginerva.name, albus);
        addChild(ginerva.name, lily);

        addMarriedCouple(james, darcy)
        addChild(darcy.name, william)

        addMarriedCouple(albus, alice)
        addChild(alice.name, ron)
        addChild(alice.name, ginny)

        // victoire and ted have 1 child
        addMarriedCouple(ted, victoire);
        addChild(victoire.name, remus);

        // fourth branch of the family tree
        addMarriedCouple(malfoy, rose)
        addChild(rose.name, aster)
        addChild(rose.name, draco)
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

    it ('should return the correct siblings', function () {
        const siblings = getSiblings(ginerva).map(person => person.name)
        expect(siblings.length).toBe(4)
        expect(siblings).toEqual(expect.arrayContaining([bill.name, charlie.name, percy.name, ronald.name]))
    })

    it('should return the correct brothers in law', function() {
        // Spouse's brothers
        const darcyBrothersInLaw = getBrothersInLaw(darcy).map(person => person.name)
        expect(darcyBrothersInLaw.length).toBe(1)
        expect(darcyBrothersInLaw).toEqual(expect.arrayContaining([albus.name]))

        // Husbands of sisters
        const billBrothersInLaw = getBrothersInLaw(bill).map(person => person.name)
        expect(billBrothersInLaw.length).toBe(1)
        expect(billBrothersInLaw).toEqual(expect.arrayContaining([harry.name]))
    })

    it('should return the correct sisters in law', function() {
        // Spouse's sisters
        const darcySistersInLaw = getSistersInLaw(darcy).map(person => person.name)
        expect(darcySistersInLaw.length).toBe(1)
        expect(darcySistersInLaw).toEqual(expect.arrayContaining([lily.name]))

        // Wives of brothers
        const billSistersInLaw = getSistersInLaw(bill).map(person => person.name)
        expect(billSistersInLaw.length).toBe(2)
        expect(billSistersInLaw).toEqual(expect.arrayContaining([audrey.name, helen.name]))
    })

    // mother's sisters
    it('should return the correct maternal aunts', function() {
        const remusMaternalAunts = getMaternalAunts(remus).map(person => person.name)
        expect(remusMaternalAunts.length).toBe(1)
        expect(remusMaternalAunts).toEqual(expect.arrayContaining([dominique.name]))
    })

    // father's sisters
    it('should return the correct paternal aunts', function() {
        const dominiquePaternalAunts = getPaternalAunts(dominique).map(person => person.name)
        expect(dominiquePaternalAunts.length).toBe(1)
        expect(dominiquePaternalAunts).toEqual(expect.arrayContaining([ginerva.name]))

        const williamPaternalAunts = getPaternalAunts(william).map(person => person.name)
        expect(williamPaternalAunts.length).toBe(1)
        expect(williamPaternalAunts).toEqual(expect.arrayContaining([lily.name]))
    })

    // mother's brothers
    it('should return the correct maternal uncles', function() {
        const remusMaternalUncles = getMaternalUncles(remus).map(person => person.name)
        expect(remusMaternalUncles.length).toBe(1)
        expect(remusMaternalUncles).toEqual(expect.arrayContaining([louis.name]))

        const jamesMaternalUncles = getMaternalUncles(james).map(person => person.name)
        expect(jamesMaternalUncles.length).toBe(4)
        expect(jamesMaternalUncles).toEqual(expect.arrayContaining([ronald.name, percy.name, charlie.name, bill.name]))
    })

    // father's brothers
    it('should return the correct paternal uncles', function() {
        const victoirePaternalUncles = getPaternalUncles(victoire).map(person => person.name)
        expect(victoirePaternalUncles.length).toBe(3)
        expect(victoirePaternalUncles).toEqual(expect.arrayContaining([charlie.name, percy.name, ronald.name]))

        const williamPaternalUncles = getPaternalUncles(william).map(person => person.name)
        expect(williamPaternalUncles.length).toBe(1)
        expect(williamPaternalUncles).toEqual(expect.arrayContaining([albus.name]))

        const ronPaternalUncles = getPaternalUncles(ron).map(person => person.name)
        expect(ronPaternalUncles.length).toBe(1)
        expect(ronPaternalUncles).toEqual(expect.arrayContaining([james.name]))
    })
});