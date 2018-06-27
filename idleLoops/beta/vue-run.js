var app = new Vue({
    el: '#app',
    data: data = {
        message: 'Hello Vue!',
        mana: 100,
        manaMax: 200,
        skills: {
            Combat: {
                level: 123,
                exp: 123,
                expToLevel: 256,
            },
            Magic: {
                level: 123,
                exp: 123,
                expToLevel: 256,
            },
            Practical: {
                level: 123,
                exp: 123,
                expToLevel: 256,
            },
            Alchemy: {
                level: 123,
                exp: 123,
                expToLevel: 256,
            },
        },
        resources: {
            gold: 123,
            reputation: 11,
            supplies: 123,
            herbs: 123,
            hide: 123,
            potions: 123,
            glasses: 123,
        },
        visible: {
            gold: true,
            reputation: true,
        },
        options: {
            audioCueToggle: false,
            pauseBeforeRestart: false,
            currentListActive: false,
            repeatLastAction: false,
            addActionTop: false,
        },
        desc: {
            skillName: {
                Combat: "Combat",
                Magic: "Magic",
                Practical: "Practical Magic",
                Alchemy: "Alchemy",
            },
            skill: {
                Combat: "Fight for your lives.",
                Magic: "Control the aether to cast and conjure.",
                Practical: "Mage Hand, Prestidigitation, Detect Magic, and other useful tricks to help out.",
                Alchemy: "Brewing potions is hard work! It's a good thing you found a teacher.",                
            },
            skillEffect: {
                Practical: `Smash Pots and Gather Wild Mana have 1% reduced mana cost per level (rounded up).
Pick Locks get 1% more gold per level from 1-200 (rounded down).
Short Quests get 1% more gold per level from 101-300 (rounded down).
Long Quests get 1% more gold per level from 201-400 (rounded down).`,
                Alchemy: "The Magic teacher in Beginnersville adores alchemists. +1% to Mage Lessons (rounded down) per level.",                
            }
        },
        intToString:intToString,
        mouseoverAction:view.mouseoverAction.bind(view),
        camelize:camelize,
        capAmount: capAmount,
        hasCap: hasCap,
        translateClassNames: translateClassNames,
        getTravelNum: getTravelNum,
        addLoop: addLoop,
        removeLoop: removeLoop,
        split: split,
        moveUp: moveUp,
        moveDown: moveDown,
        removeAction: removeAction,
        actions:actions,

    },
    computed: {
        manaTimer() {
            return intToString(this.mana, 1) + " | " + intToString(this.mana / 50, 2) + "s";
        },
        n(){
            return this.a.s;
        }
    }
})
