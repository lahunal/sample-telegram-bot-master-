export const RandomChoiceResponse = {
    setupHandlers: function(bot: any): void {
        bot.command('/guessmyage', trigger);
    }
};

const options = [
    "Dunno",
    "30... please dont hate me",
	"I think you are 20...",
	"Hmmm... 25",
	"26...?",
	"24, right?",
	"LMAO, 40",
	"I use my magic powers to determine its 29",
	"I think its...21?",
	"Maybe you are 22",
	"I am guessing 23",
	"I stalked you enough to know its 19",
	"14...Atleast my maker was that age",
	"18, the perfect age according to some people",
	"Ill take a wild guess... 19",
    "I think you are 28..."
];

function trigger(ctx: any): void {
    const choice = Math.floor(Math.random() * options.length);
    ctx.reply(options[choice]);
}
