export const HelpResponse = {
    setupHandlers: function (bot: any) {
        bot.command("/help", help);
        bot.start(help);
    }
};

export function help(ctx) {
    const helpText = `
        Let me tell you what you can do with me
        /help - I'll send this again
        /image - I'll spam a lot of birthday pics for now...
        /suprise - I'll say happy birthdays...
        /guessmyage - I'll guess your age`;
		
    ctx.reply(helpText);
}