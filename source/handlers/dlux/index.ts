export const DluxResponse = {
    setupHandlers: function (bot: any): void {
        bot.command('/dlux', simpleTrigger);
    }
};

function simpleTrigger(ctx: any): void {
    ctx.reply('Daniel san is my GRAND MASTER. He taught lowy who taught master who made me thus making a new age of wisdom. I do not know much about him though. ');
}