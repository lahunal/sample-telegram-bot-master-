export const SimpleResponse = {
    setupHandlers: function(bot: any): void {
        bot.command('/suprise', trigger);
    }
};

function trigger(ctx: any): void {
    ctx.reply('HAPPY BIRTHDAY');
}
