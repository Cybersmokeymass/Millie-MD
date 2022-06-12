global.util = require('util')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.chalk = require('chalk')
global.os = require('os')
global.moment = require('moment-timezone')
global.axios = require('axios')
global.cheerio = require('cheerio')
global.scrape = require('./lib/scrape')
global.xfr = require('xfarr-api')
global.yzu = require('yuzzu-api')
global.dhn = require('dhn-api')
global.hxz = require('hxz-api')
global.bochil = require('@bochilteam/scraper')
global.baileys = require('@adiwajshing/baileys')

global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Moderator
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium users

global.devx = 'false'

global.owner = ["918547584245"]
global.APIs = { // API Prefix
//======= name: 'https://website' ========//
  nrtm: 'https://nurutomo.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me' 
}
global.APIKeys = { // APIKey Here
//======= 'https://website': 'apikey' =======//
  'https://api.lolhuman.xyz': '7ecba1cc37eca2e93d6a983b',
  'https://hardianto.xyx': 'hardianto',
  'https://api.neoxr.eu.org': 'yourkey',
  'https://api.xteam.xyz': 'benniismaelapikey',
  'https://api.zeks.me': 'apivinz'
}




 
global.ucpn = ''
global.linkgc = '╭───────────➤ 
│  𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝘼𝙇𝙇

˃ˋ*🌸ᙖᘜᙏ♡ᙅOᖇᑎᙓᖇシ︎*♡ ㅤ    

*Thallppariyam ullavarkk keram 🙌*

*⭕⚡️ഗ്രൂപ്പ് ഫꪶൾ ആക്റ്റꪻവ്  ആയ᭄ര᭄ക്കꪶ๏*

*⭕🐓ക᭡ട്ടꪶ കോഴ᭄കളꪶടെ ꪶപϐത്യക ꪶശദ്ധൿ ꪶഗ്രꪆപ്പ᭄ൽ പെൺകꪶട്ട᭄കꪶട്ട᭄കളꪶണ്ട്  ഉണ്ട് ആരꪶ๏*

*(PM) ഇൽ പോയ᭄ മെസ്സേജ് അയക്കരുത്*

*𝘍𝘈𝘒𝘌 𝘕𝘜𝘔𝘉𝘌𝘙 𝘕𝘖𝘛 𝘈𝘓𝘓𝘖𝘞𝘌𝘋..🚫*

𝙂𝙧𝙤𝙪𝙥 𝙡𝙞𝙣𝙠  ♡    ⎙ㅤ     ⌲ 

https://chat.whatsapp.com/IKgHpTDKOrLHRwr6tnfz9L'
global.linkig = 'https://www.instagram.com/najad__nxz  '
global.linkyt = 'https://www.youtube.com/channel/'
global.linkfb = 'https://fb.watch/a'
global.git = 'https://github.com/cybesmokeymass'
global.web1 = 'https://neeraj-x0.github/'
global.url = 'https://chat.whatsapp.com/IKgHpTDKOrLHRwr6tnfz9L'

//HEROKU  VARS
global.thumburl = process.env.IMAGE || 'https://i.pinimg.com/474x/de/bd/b2/debdb24645169bf95eecd49f3144315f.jpg'
global.packname = process.env.PACKNAME ||'𝑵𝒂𝒋𝒂𝒎𝒘𝒐𝒍'
global.author = process.env.AUTHOR ||'ɴᴀᴊad-x0'
global.name = 'Millie MULTI-DEVICE'
global.session = process.env.SESSION_ID|| ''
global.wm = process.env.WATERMARK|| '𝑵𝒂𝒋𝒂𝒎𝒘𝒐𝒍...♥️🌺'
global.owner_name = process.env.OWNER_NAME || 'Najad-x0'
global.logsmsg = convertToBool(process.env.LOGS)|| false

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}





global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'najad_nxz'
global.wait = '_Please Wait_'
global.eror = '_Something went wrong please try again later_'
global.dtu = 'BOT HELP GROUP'
 



global.version = '2.0.1(ʙᴇᴛᴀ)'

global.multiplier = 69 // The higher, The harder levelup
global.nolink = 'No URL Found'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})


