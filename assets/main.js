const themes = ['mikumiku-theme', 'melt-theme', 'loveiswar-theme', 'syousitu-theme', 'worldismine-theme', 'popipo-theme', 'romeoandcinderella-theme', 'ichikyuunigo-theme', 'matryoshika-theme', 'deepseagirl-theme', 'strobelight-theme', 'karakuripierrot-theme', 'senbonzakura-theme', 'tellyourworld-theme', 'oddsandends-theme', 'brainfluidexplosiongirl-theme', 'atgodsmercy-theme', 'taleofthedeepsealily-theme', 'slowmotion-theme', 'lovetrial-theme', 'patchworkstaccato-theme', 'hibikase-theme', 'aishite-theme', 'ghostrule-theme', 'alienalien-theme', 'imperialgirl-theme', 'kimaguremercy-theme', 'whitehappy-theme', 'sandplanet-theme', 'hibana-theme', 'hatedbylifeitself-theme', 'unknownmothergoose-theme', 'shoujorei-theme', 'bitterchocodecoration-theme', 'darlingdance-theme', 'vampire-theme', 'gXodish-theme', 'anonymousm-theme', 'hero-theme']

Array.prototype.next = function (value) {
    return this[(this.indexOf(value) + 1) % this.length] || this[0];
};
Array.prototype.back = function (value) {
    return this[(this.indexOf(value) - 1 + this.length) % this.length] || this[this.length - 1];
};

const setTime = (value) => {
    document.querySelector(".time").style.marginLeft = `calc(${value}% - calc(17.5px / 2))`
    document.querySelector(".timebar").style.background = `linear-gradient(90deg, var(--seekbar-left-color) 0%, var(--seekbar-left-color) ${value}%, var(--seekbar-right-color) ${value}%, var(--seekbar-right-color) 100%)`;
}

const changeTheme = (event) => {
    const player = document.querySelector(".player")
    if (player.classList.contains("change")) return
    else player.classList.add("change")
    const currentTheme = document.body.classList.item(0) ?? themes[0]
    const isNext = event.currentTarget.classList[0] == "button-forward"
    const nextTheme = isNext ? themes.next(currentTheme) : themes.back(currentTheme)
    document.body.classList.value = nextTheme
    setTime(Math.floor(Math.random() * 101))
    setTimeout(() => {
        player.classList.remove("change")
    }, 200)
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-backward").addEventListener("mousedown", changeTheme)
    document.querySelector(".button-forward").addEventListener("mousedown", changeTheme)
})