//const bot = new Telegraf('token');
const { Telegraf } = require('telegraf');

const bot = new Telegraf('token');

// Main menu
const mainMenu = {
    reply_markup: {
        keyboard: [
            ['Option 1', 'Option 2', 'Option 3']
        ],
        resize_keyboard: true
    }
};

// Previous menu
const previousMenus = {};

// Sub menus
const subMenus = {
    'Option 1': {
        reply_markup: {
            keyboard: [
                ['Sub Option 1.1', 'Sub Option 1.2', 'Sub Option 1.3'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    },
    'Option 2': {
        reply_markup: {
            keyboard: [
                ['Sub Option 2.1', 'Sub Option 2.2', 'Sub Option 2.3'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    },
    'Option 3': {
        reply_markup: {
            keyboard: [
                ['Sub Option 3.1', 'Sub Option 3.2', 'Sub Option 3.3'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    },
    'Sub Option 1.1': {
        reply_markup: {
            keyboard: [
                ['Sub Sub Option 1.1.1', 'Sub Sub Option 1.1.2'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    },
    'Sub Option 1.2': {
        reply_markup: {
            keyboard: [
                ['Sub Sub Option 1.2.1', 'Sub Sub Option 1.2.2'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    },
    'Sub Option 1.3': {
        reply_markup: {
            keyboard: [
                ['Sub Sub Option 1.3.1', 'Sub Sub Option 1.3.2'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    },
    'Sub Option 2.1': {
        reply_markup: {
            keyboard: [
                ['Sub Sub Option 2.1.1', 'Sub Sub Option 2.1.2'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    },
    'Sub Option 2.2': {
        reply_markup: {
            keyboard: [
                ['Sub Sub Option 2.2.1', 'Sub Sub Option 2.2.2'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    },
    'Sub Option 2.3': {
        reply_markup: {
            keyboard: [
                ['Sub Sub Option 2.3.1', 'Sub Sub Option 2.3.2'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    },
    'Sub Option 3.1': {
        reply_markup: {
            keyboard: [
                ['Sub Sub Option 3.1.1', 'Sub Sub Option 3.1.2'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    },
    'Sub Option 3.2': {
        reply_markup: {
            keyboard: [
                ['Sub Sub Option 3.2.1', 'Sub Sub Option 3.2.2'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    },
    'Sub Option 3.3': {
        reply_markup: {
            keyboard: [
                ['Sub Sub Option 3.3.1', 'Sub Sub Option 3.3.2'],
                ['Back', 'Home']
            ],
            resize_keyboard: true
        }
    }
};

// Command handlers
bot.start((ctx) => {
    ctx.reply('Welcome to the bot!', mainMenu);
});

bot.hears('Option 1', (ctx) => {
    previousMenus[ctx.message.chat.id] = mainMenu;
    ctx.reply('You selected Option 1', subMenus['Option 1']);
});

bot.hears('Option 2', (ctx) => {
    previousMenus[ctx.message.chat.id] = mainMenu;
    ctx.reply('You selected Option 2', subMenus['Option 2']);
});

bot.hears('Option 3', (ctx) => {
    previousMenus[ctx.message.chat.id] = mainMenu;
    ctx.reply('You selected Option 3', subMenus['Option 3']);
});

// Sub option handlers
bot.hears('Sub Option 1.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Option 1'];
    ctx.reply('You selected Sub Option 1.1', subMenus['Sub Option 1.1']);
});

bot.hears('Sub Option 1.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Option 1'];
    ctx.reply('You selected Sub Option 1.2', subMenus['Sub Option 1.2']);
});

bot.hears('Sub Option 1.3', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Option 1'];
    ctx.reply('You selected Sub Option 1.3', subMenus['Sub Option 1.3']);
});

bot.hears('Sub Option 2.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Option 2'];
    ctx.reply('You selected Sub Option 2.1', subMenus['Sub Option 2.1']);
});

bot.hears('Sub Option 2.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Option 2'];
    ctx.reply('You selected Sub Option 2.2', subMenus['Sub Option 2.2']);
});

bot.hears('Sub Option 2.3', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Option 2'];
    ctx.reply('You selected Sub Option 2.3', subMenus['Sub Option 2.3']);
});

bot.hears('Sub Option 3.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Option 3'];
    ctx.reply('You selected Sub Option 3.1', subMenus['Sub Option 3.1']);
});

bot.hears('Sub Option 3.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Option 3'];
    ctx.reply('You selected Sub Option 3.2', subMenus['Sub Option 3.2']);
});

bot.hears('Sub Option 3.3', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Option 3'];
    ctx.reply('You selected Sub Option 3.3', subMenus['Sub Option 3.3']);
});

// Sub sub option handlers
bot.hears('Sub Sub Option 1.1.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 1.1'];
    ctx.reply('You selected Sub Sub Option 1.1.1');
});

bot.hears('Sub Sub Option 1.1.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 1.1'];
    ctx.reply('You selected Sub Sub Option 1.1.2');
});

bot.hears('Sub Sub Option 1.2.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 1.2'];
    ctx.reply('You selected Sub Sub Option 1.2.1');
});

bot.hears('Sub Sub Option 1.2.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 1.2'];
    ctx.reply('You selected Sub Sub Option 1.2.2');
});

bot.hears('Sub Sub Option 1.3.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 1.3'];
    ctx.reply('You selected Sub Sub Option 1.3.1');
});

bot.hears('Sub Sub Option 1.3.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 1.3'];
    ctx.reply('You selected Sub Sub Option 1.3.2');
});

bot.hears('Sub Sub Option 2.1.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 2.1'];
    ctx.reply('You selected Sub Sub Option 2.1.1');
});

bot.hears('Sub Sub Option 2.1.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 2.1'];
    ctx.reply('You selected Sub Sub Option 2.1.2');
});

bot.hears('Sub Sub Option 2.2.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 2.2'];
    ctx.reply('You selected Sub Sub Option 2.2.1');
});

bot.hears('Sub Sub Option 2.2.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 2.2'];
    ctx.reply('You selected Sub Sub Option 2.2.2');
});

bot.hears('Sub Sub Option 2.3.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 2.3'];
    ctx.reply('You selected Sub Sub Option 2.3.1');
});

bot.hears('Sub Sub Option 2.3.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 2.3'];
    ctx.reply('You selected Sub Sub Option 2.3.2');
});

bot.hears('Sub Sub Option 3.1.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 3.1'];
    ctx.reply('You selected Sub Sub Option 3.1.1');
});

bot.hears('Sub Sub Option 3.1.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 3.1'];
    ctx.reply('You selected Sub Sub Option 3.1.2');
});

bot.hears('Sub Sub Option 3.2.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 3.2'];
    ctx.reply('You selected Sub Sub Option 3.2.1');
});

bot.hears('Sub Sub Option 3.2.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 3.2'];
    ctx.reply('You selected Sub Sub Option 3.2.2');
});

bot.hears('Sub Sub Option 3.3.1', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 3.3'];
    ctx.reply('You selected Sub Sub Option 3.3.1');
});

bot.hears('Sub Sub Option 3.3.2', (ctx) => {
    previousMenus[ctx.message.chat.id] = subMenus['Sub Option 3.3'];
    ctx.reply('You selected Sub Sub Option 3.3.2');
});

// Back and Home handlers
bot.hears('Back', (ctx) => {
    const previousMenu = previousMenus[ctx.message.chat.id];
    if (previousMenu) {
        ctx.reply('Going back...', previousMenu);
    } else {
        ctx.reply('There is no previous menu');
    }
});

bot.hears('Home', (ctx) => {
    ctx.reply('Going to home...');
    ctx.reply('Welcome back to the main menu!', mainMenu);
});

bot.launch().then(() => {
    console.log('Bot started');
}).catch((err) => {
    console.error(err);
});
