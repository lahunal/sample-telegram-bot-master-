export const ImageResponse = {
    setupHandlers: function(bot: any): void {
        bot.command('/image', trigger);
    }
};


function trigger(ctx: any): void {
    ctx.replyWithPhoto('https://www.birthdaywishes.expert/wp-content/uploads/2017/04/Birthday-wish-with-cute-background-with-cup-cake-and-garlands.jpg');
	ctx.replyWithPhoto('http://www.lovethispic.com/uploaded_images/148577-Happy-Birthday-Im.jpg');
}