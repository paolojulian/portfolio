class Game {
    constructor (name, player, team = '') {
        this.name = name
        this.player = player
        this.team = team
    }
}

class Dota extends Game {
    constructor (player, team, hero, role, rank) {
        let name = 'Defense of the Ancients'
        super(name, player, team)
        this.hero = hero
        this.role = role
        this.rank = rank
    }
}

class Csgo extends Game {
    constructor (player, team, gun, role, rank) {
        let name = 'Counter Strike: Global Offensive'
        super(name, player, team)
        this.gun = gun
        this.role = role
        this.rank = rank
    }
}

class Apex extends Game {
    constructor (player, hero, gun) {
        let name = 'Apex Legends'
        super(name, player)
        this.hero = hero
        this.gun = gun
    }
}

export {
    Game,
    Dota,
    Csgo,
    Apex
}
