export const CustomResponsea = {
    setupHandlers: function (bot: any): void {
        bot.command('/lowy', simpleTrigger);
    }
};

function simpleTrigger(ctx: any): void {
    ctx.reply('Lowy is the name of my masters master. Even though I am yet to meet him personaly I had heard many great things about him. Thanks to this I have a lot of respect for him.');
}