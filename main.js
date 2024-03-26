class Start {
    constructor() {
        this.PlayerName = "Kamu";
        this.botName = "Bot"
        this.playerOption;
        this.botOption;
        this.winner = ""
        this.playerScore = parseInt(localStorage.getItem("playerScore")) || 0; // Tambahkan skor pemain
        this.botScore = parseInt(localStorage.getItem("botScore")) || 0; // Tambahkan skor bot
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
            this.winner = this.PlayerName
            this.playerScore++;
        }
        else if (this.botOption == "✌" && this.playerOption == "✊") {
            this.winner = this.PlayerName
            this.playerScore++;
        }
        else if (this.botOption == "✊" && this.playerOption == "🤚") {
            this.winner = this.PlayerName
            this.playerScore++;
        }
        else if (this.botOption == "✌" && this.playerOption == "🤚") {
            this.winner = this.botName
            this.botScore++
        }
        else if (this.botOption == "✊" && this.playerOption == "✌") {
            this.winner = this.botName
            this.botScore++
        }
        else if (this.botOption == "🤚" && this.playerOption == "✊") {
            this.winner = this.botName
            this.botScore++
        }
        else {
            return this.winner = "SERI"
        }
        localStorage.setItem("playerScore", this.playerScore);
        localStorage.setItem("botScore", this.botScore);
    }
    matchResult() {
        if (this.winner != "SERI") {
            return `${this.winner} MENANG!!`;
        }
        else {
            return `${this.winner} nih`;

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
    const userScore = document.getElementById("user");
    const botScore = document.getElementById("bot");

    inGame.textContent = "...."
    result.textContent = "...."
    
    setTimeout(() => {
        botScore.textContent = `bot : ${start.botScore}`
        userScore.textContent = `Kamu : ${start.playerScore}`
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOPtion}`
        result.textContent = start.matchResult()
    }, 1000)
}