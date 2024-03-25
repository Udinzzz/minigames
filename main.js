console.log("testing")
class Start {
    constructor() {
        this.PlayerName = "Kamu";
        this.botName = "Bot"
        this.playerOption;
        this.botOption;
        this.winner = ""
    }
    get getBotOPtion() {
        return this.botOption
    }
    set setBotOPtion(option) {
        this.botOption = option
    }
    get getPlayerOption() {
        return this.playerOption
    }
    set setPlayerOption(option) {
        this.playerOption = option;

    }

    botBrain() {
        const option = ["🤚", "✌", "✊"]
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }
    winCalculation() {
        if (this.botOption == "🤚" && this.playerOption == "✌") {
            return this.winner = this.PlayerName
        }
        else if (this.botOption == "✌" && this.playerOption == "✊") {
            return this.winner = this.PlayerName
        }
        else if (this.botOption == "✊" && this.playerOption == "🤚") {
            return this.winner = this.PlayerName
        }
        else if (this.botOption == "✌" && this.playerOption == "🤚") {
            return this.winner = this.botName
        }
        else if (this.botOption == "✊" && this.playerOption == "✌") {
            return this.winner = this.botName
        }
        else if (this.botOption == "🤚" && this.playerOption == "✊") {
            return this.winner = this.botName
        }
        else {
            return this.winner = "SERI"
        }
    }
    matchResult() {
        if (this.winner != "SERI") {
            return `${this.winner} MENANG!!`
        }
        else {
            return `${this.winner} nih`

        }
    }
}

function pick(params) {
    const start = new Start();
    start.playerOption = params;
    start.botOption = start.botBrain();
    start.winCalculation();

    console.log("bot", start.getBotOPtion)
    console.log("player", start.getPlayerOption)
    console.log(start.matchResult())

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");
    inGame.textContent = "...."
    result.textContent = "...."

    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOPtion}`
        result.textContent = start.matchResult()
    }, 1000)
}