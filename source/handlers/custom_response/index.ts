export const CustomResponse = {
    setupHandlers: function (bot: any): void {
        bot.command('/lahunal', simpleTrigger);
    }
};

function simpleTrigger(ctx: any): void {
    ctx.reply('Lahunal is the name of my maker and master. He trained me perfectly. (but i still want more features). His greatness keeps me alive as i cannot survive when he logs off.');
}