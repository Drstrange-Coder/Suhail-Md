const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349152454895";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_38_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDc4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNCxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUwLFxuICAgICAgICA1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICA3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTExLFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NixcbiAgICAgICAgMTgzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk5LFxuICAgICAgICA1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9nMGNhN0g3eGZueGJWY3VsWVVDSTJpMGlNcjY3TVlPbXozT29ibXdpd1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRCSkFRbkdVU0h5RjRJVXVqX1VrRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzJkZjU4MTgtMmJkNi00NTQ1LWJhZDQtYzc4NjljZGEzMDlmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDE0MixcbiAgICAgIDk2LFxuICAgICAgMjUsXG4gICAgICAyMzksXG4gICAgICA4NSxcbiAgICAgIDEyOSxcbiAgICAgIDIzMSxcbiAgICAgIDEzNyxcbiAgICAgIDEsXG4gICAgICA4MCxcbiAgICAgIDE5OCxcbiAgICAgIDIxMCxcbiAgICAgIDEzMixcbiAgICAgIDIzNCxcbiAgICAgIDIyNyxcbiAgICAgIDUyLFxuICAgICAgOTEsXG4gICAgICAxMTIsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgODgsXG4gICAgICAxMyxcbiAgICAgIDEwNyxcbiAgICAgIDE2NixcbiAgICAgIDM5LFxuICAgICAgMTE3LFxuICAgICAgMTA3LFxuICAgICAgMTMsXG4gICAgICA5NixcbiAgICAgIDEwNCxcbiAgICAgIDg0LFxuICAgICAgODAsXG4gICAgICAwLFxuICAgICAgOCxcbiAgICAgIDIzMixcbiAgICAgIDM4LFxuICAgICAgMzksXG4gICAgICA2NSxcbiAgICAgIDIzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2UlJXQTVUV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1MjQ1NDg5NTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRHIuU3RyYW5nRSBGWFRyYWRlclwiLFxuICAgIFwibGlkXCI6IFwiMTIzNDg0OTkwNjY0NzA3OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmJrbFI4US80aktzZ1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1YzErcFJGOXlJR0xXUmNhVEpTM3B1aXMvUTlpZ1VHWlpFd2hxUUwwemxVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlExUm54MUdJaGpxdEk3NXRWdXNEalRQMVhFcmNzd2hLeVJscnZhek5XdnNiU0tLcnB2QzdOVHFtaVRrdjRaTUd0R084Sno1VTR5bXBnUmlNZWhiNUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImIwVFYwcDlqTkhZUmN5Y2ZUbTVOUnZWdElKUjlEQ3V5anlMcjArZktBOUNCNTRsMm1LcStKcWdNZ0dlTDJvMGlua1d0UTlEMXR3QzRiVE12cjJyc0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTI0NTQ4OTU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NjgzOTA2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1FnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUWcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6QzR4TkR0c3RidW52aVQ5M2xQREJYN29GaXFodWZRcnR4TnhPMVI5VERVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1MzY4NjYxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
