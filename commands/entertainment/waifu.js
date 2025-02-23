const {
    quote
} = require("@mengkodingan/ckptw");
const axios = require("axios");
const mime = require("mime-types");

module.exports = {
    name: "waifu",
    category: "divertissement",  
    handler: {
        coin: 10
    },
    code: async (ctx) => {
        if (await handler(ctx, module.exports.handler)) return;

        const apiUrl = tools.api.createUrl("https://api.waifu.pics", `/sfw/waifu`);

        try {
            const {
                data
            } = await axios.get(apiUrl);

            return await ctx.reply({
                image: {
                    url: data.url
                },
                mimetype: mime.lookup("png")
            });
        } catch (error) {
            consolefy.error(`Erreur : ${error}`);  // traduction de "Error"
            if (error.status !== 200) return await ctx.reply(config.msg.notFound);
            return await ctx.reply(quote(`⚠️ Une erreur s'est produite : ${error.message}`));   
        }
    }
};
