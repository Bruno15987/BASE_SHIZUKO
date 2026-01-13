
const baileys = require("@whiskeysockets/baileys");
const ytSearch = require('yt-search');
const chalk = require('chalk');
const { version } = require("./package");
const Conselhos = require("./DADOS/CONSELHOS/conselhos");
const CONSELHOS = Conselhos.conselhos;
const CONSELHO = CONSELHOS[Math.floor(Math.random() * CONSELHOS.length)];
const { 
fetchJson, 
colors, 
hora, 
data, 
getBuffer,
 fs, 
SimilarComandos, 
ListaComandos, 
getGroupAdmins, 
getMembros, 
moment, 
msg,
axios,
kyun,
infoSystem,
os,
menu,
menus, 
FotoMenu,
Config,
Config2,
linkfy,
util,
exec,
jpzinhhomi,
Shizukuu,
sleep,
ShizukuStile,
Cmd,
BuscarNogpt,
BaixarNoYt,
ttkdl,
instadl,
METADINHAS,
ttksearch,
ANT_LTR_MD_EMJ,
sendImageAsSticker2,
 sendVideoAsSticker2,
 getFileBuffer,
 downloadContentFromMessage,
 prepareWAMessageMedia,
 jidNormalizedUser,
 ContarMessages,
 addVIP,
    isVIP,
    getExpire,
    removeVIP,
YoutubeDl ,
beijocmd,
upload 
} = require("./consts");

async function iniciarBot() {
	
module.exports = async function (conn, upsert) {
  try {
const info = upsert?.messages && upsert?.messages[0];
if (!info) return;
const from = info?.key?.remoteJid;
const isGroup = from.endsWith('@g.us');
const isStatus = from.endsWith('@broadcast');
const pushname = info?.pushName || await conn?.user?.name || "Usuário";
const content = JSON.stringify(info.message);
const quoted = info.quoted ? info.quoted : info
const sender = jidNormalizedUser(isGroup ? info?.key?.participantAlt || 
await conn?.user?.id || 
info?.key?.participant : info?.key?.remoteJidAlt || info?.key?.remoteJid
);

//CONSTS IMPORTANTES 
const { NumberDono, prefix, NickDono, NomeBot, SHIZUKU_KEY, SHIZUKU_SITE } = Config;
const KEY_KEY = Config.SHIZUKU_KEY
const { dono1, dono2, dono3, dono4, dono5, dono6 , isSoDono } = Config2;
const isVerificado = Config2.verificado;
const BotOff = Config2.botoff;
const isVisualizar = Config2.visualizar;
const isButtons = Config2.buttons
const botNumber = jidNormalizedUser(await conn.user.id || await conn.user.lid);
const Numero1 = jidNormalizedUser(`${dono1}@s.whatsapp.net`);
const Numero2 = jidNormalizedUser(`${dono2}@s.whatsapp.net`);
const Numero3 = jidNormalizedUser(`${dono3}@s.whatsapp.net`);
const Numero4 = jidNormalizedUser(`${dono4}@s.whatsapp.net`);
const Numero5 = jidNormalizedUser(`${dono5}@s.whatsapp.net`);
const Numero6 = jidNormalizedUser(`${dono6}@s.whatsapp.net`);
const MeuNumero = jidNormalizedUser(`${NumberDono}@s.whatsapp.net`);
const IsCreator = jpzinhhomi?.includes(sender);
const SoCriador = Shizukuu?.includes(sender);
const SoBot = botNumber?.includes(sender)
const So_Dono = MeuNumero?.includes(sender) || 
Numero1?.includes(sender) ||
Numero2?.includes(sender) || 
Numero3?.includes(sender) ||
Numero4?.includes(sender) ||
Numero5?.includes(sender) ||
Numero6?.includes(sender) ||
SoBot || 
SoCriador ||
IsCreator;

const type = baileys.getContentType(info?.message);
let body =
  info?.message?.conversation ||
  info?.message?.extendedTextMessage?.text ||
  info?.message?.imageMessage?.caption ||
  info?.message?.videoMessage?.caption ||
  info?.message?.documentWithCaptionMessage?.message?.documentMessage?.caption ||
  info?.message?.buttonsResponseMessage?.selectedButtonId ||
  info?.message?.templateButtonReplyMessage?.selectedId ||
  info?.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
  info?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson ||
  info?.text ||
  "";
  
if (info?.message?.listResponseMessage) {
body = info?.message?.listResponseMessage?.singleSelectReply?.selectedRowId;
}
if (info?.message?.interactiveResponseMessage) {
try {const botn = JSON.parse(info?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson);
if (botn?.id) body = botn?.id;
} catch {}
}

//CONSTS IMPORTANTES
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

///{ constantes muito importantes}\\
const budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';
const Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""
const PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const args = body.trim().split(/ +/).slice(1);
const arg = body.trim().split(/ +/).slice(1);
const q = args.join(' ');
const CamileGostosa = (budy2 || budy || body || q || "").trim()
const testando = CamileGostosa.split(/\s+/)[0].toLowerCase()
const isCmd = body.trim().startsWith(prefix);
const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase() : testando || null;
const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';

//INFO DE GRUPOS!!
const Infos_Do_Grupo = isGroup ? await conn.groupMetadata(from) : {} || '';
const NomeGrupo = Infos_Do_Grupo?.subject || '';
const DescGp = Infos_Do_Grupo?.desc || '';
const MembrosGP = Infos_Do_Grupo?.participants || [];
const TotalAdmins = MembrosGP[0]?.admin || '';
const TotalMembros = MembrosGP.length || 0;
const Dono_Do_Grupo = Infos_Do_Grupo?.subjectOwnerJid || '';

const So_Admins = isGroup ? getGroupAdmins(MembrosGP) : ''
const somembros = isGroup ? getMembros(MembrosGP) : ''

const dirGroup = `./DATABASE2/GRUPOS/ATIVACOES/${from}.json`

if(isGroup && !fs.existsSync(dirGroup)){
var dataGp2 = [{
name: NomeGrupo,
groupId: from, 
antilinkhard: false, 
So_Admins: false,
modobn: false,
autorepo: false,
bangp: false,
antimencao: false,
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo(a) ao Grupo: *#nomedogp#*, Shizuku lhe deseja as boas vindas 🕸️",
legendasaiu: "Adeus, #numerodele#, espero que não se arrependa pela sua decisão. "
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo(a) ao Grupo: *#nomedogp#*, Shizuku lhe deseja as boas vindas 🕸️",
legendasaiu: "Adeus, #numerodele#, espero que não se arrependa pela sua decisão. "
}],
}]
fs.writeFileSync(dirGroup, JSON.stringify(dataGp2, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

const isBemvindo = isGroup ? dataGp[0]?.wellcome[0]?.bemvindo1 : undefined 
const isBemvindo2 = isGroup ? dataGp[0]?.wellcome[1]?.bemvindo2 : undefined
const isAntiLinkHard = isGroup ? dataGp[0]?.antilinkhard : undefined
const SoAdmins = isGroup ? dataGp[0]?.So_Admins : undefined 
const isBanGrupo = isGroup ? dataGp[0]?.bangp : undefined 
const SoAutoRepo = isGroup ? dataGp[0]?.autorepo : undefined 
const isModobn = isGroup ? dataGp[0]?.modobn : undefined 
const isAntiMencionar = isGroup ? dataGp[0].antimencao : undefined 
const isVip = isVIP(sender);

//DEFINIÇÕES UTEIS
const selo = Config2.verificado ? {key: {fromMe: false, remoteJid: from, id: "META",
participant: "13135550002@s.whatsapp.net"
}, message: { contactMessage: { displayName: pushname,
 vcard: `BEGIN:VCARD
VERSION:3.0
N:Meta AI;;;;
FN:Meta AI
TEL;waid=13135550002:+1 313 555 0002
END:VCARD`
}
}
} : info


async function reply(texto){
try {
return conn.sendMessage(from, {text: texto, mentions: [sender, info?.key?.remoteJid]}, {quoted: selo})
} catch (E) {
return reply("Erro ao enviar msg");
};
};

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
conn.sendMessage(idgp, reactionMessage)
}

var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
conn.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const hora2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(hora2 > "00:00:00" && hora2 < "05:00:00"){
var tempo = 'Boa noite'
} if(hora2 > "05:00:00" && hora2 < "12:00:00"){
var tempo = 'Bom dia'
} if(hora2 > "12:00:00" && hora2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(hora2 > "18:00:00"){
var tempo = 'Boa noite'
}


const isBotGroupAdmins = So_Admins?.includes(botNumber) || false;
const isGroupAdmins = So_Admins.includes(sender) || false || So_Dono ||SoBot || IsCreator || SoCriador

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\
//FUNÇÃO BY: NKZIN-DEV, NÃO TIRA OS CRÉDITOS DESGRAÇA!!
let menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant || '';
if (menc_prt.includes('@lid') && Infos_Do_Grupo?.participants) {
menc_prt = Infos_Do_Grupo.participants.find(v => v.id === menc_prt)?.phoneNumber || '';
}
const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (menc_jid2?.[0]?.includes('@lid') && Infos_Do_Grupo?.participants) {
menc_jid2[0] = Infos_Do_Grupo.participants.find(v => v.id === menc_jid2[0])?.phoneNumber || '';
}
const menc_os2 = q.includes("@") ? (Array.isArray(menc_jid2) && menc_jid2.length > 0 ? menc_jid2[0] : null) : menc_prt;
const menc_jid = jidNormalizedUser(menc_os2 || sender);
const sender_ou_n = q.includes("@") ? menc_jid2?.[0] : (menc_prt || sender);
const normalizar = alvo => {
if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
return Infos_Do_Grupo.participants.find(v => v.id === alvo)?.phoneNumber || alvo;
}
return alvo;
};//FUNÇÃO BY: NKZIN-DEV, NÃO TIRA OS CRÉDITOS DESGRAÇA!!
const numClean = txt => txt.replace(/[()+\-\/\s]/g, '') + '@s.whatsapp.net';
const mrc_ou_numero  = q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const marc_tds       = q.includes('@')                 ? normalizar(menc_jid) : q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt_nmr   = q.length > 12 && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt3 = info.message?.extendedTextMessage?.contextInfo?.participant
const menc_jid3 = args?.join(" ").replace("@", "") + "@s.whatsapp.net"
const menc_jid23 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid
const sender_ou_n3 = q.includes("@") ? menc_jid : sender
const mrc_ou_numero3 = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os23 = q.includes("@") ? menc_jid : menc_prt 
const marc_tds3 = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_prt_nmr3 = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt
//============================//

if(info.key.fromMe) return;
if(BotOff && !So_Dono) return;
if(isGroup && isCmd && SoAdmins && !So_Dono && !isGroupAdmins) return;
if(isGroup && isCmd && isBanGrupo && !So_Dono) return
if(isCmd && isSoDono && !So_Dono) return;

let tipoMsg = "Texto";

if (info?.message?.imageMessage) tipoMsg = "📸 Imagem";
else if (info?.message?.videoMessage) tipoMsg = "🎥 Vídeo";
else if (info?.message?.audioMessage) tipoMsg = "🎧 Áudio";
else if (info?.message?.stickerMessage) tipoMsg = "🧩 Figurinha";
else if (info?.message?.documentMessage) tipoMsg = "📄 Documento";
else if (info?.message?.buttonsResponseMessage) tipoMsg = "🔘 Botão";
else if (info?.message?.listResponseMessage) tipoMsg = "📋 Lista";
else if (info?.message?.reactionMessage) tipoMsg = "😂 Reação";

function linha(icon, label, value, color = "#ffffff") {
  return `${chalk.hex("#64748b")("┃")} ${icon} ${chalk.hex(color)(label)} ${chalk.white(value)}`;
}

function separador(txt, color) {
  console.log(
    chalk.hex(color)(`\n╔════ 🎄 ${txt} 🎄 ════╗`)
  );
}

if (!isGroup && isCmd) {
  separador("COMANDO PRIVADO", "#22c55e");

  console.log(linha("🧠", "Comando:", command, "#f87171"));
  console.log(linha("👤", "Usuário:", pushname, "#60a5fa"));
  console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399"));
  console.log(linha("🕒", "Hora:", hora2, "#facc15"));
  console.log(linha("📆", "Data:", data, "#f472b6"));
  console.log(linha("👑", "Dono:", So_Dono ? "SIM" : "NÃO", "#a78bfa"));

  console.log(
    chalk.hex("#22c55e")("╚═════════════════════════════════╝\n")
  );
}

// ===== COMANDO EM GRUPO =====
if (isGroup && isCmd) {
  separador("COMANDO EM GRUPO", "#ef4444");

  console.log(linha("🧠", "Comando:", command, "#f87171"));
  console.log(linha("👤", "Usuário:", pushname, "#60a5fa"));
  console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399"));
  console.log(linha("👥", "Grupo:", NomeGrupo, "#22d3ee"));
  console.log(linha("🕒", "Hora:", hora2, "#facc15"));
  console.log(linha("👑", "Dono:", So_Dono ? "SIM" : "NÃO", "#a78bfa"));

  console.log(
    chalk.hex("#ef4444")("╚═════════════════════════════════╝\n")
  );
}

// ===== MENSAGEM EM GRUPO =====
if (isGroup && !isCmd && !info.key.fromMe) {
  separador("MENSAGEM NO GRUPO", "#a855f7");

  console.log(linha("👤", "Usuário:", pushname, "#60a5fa"));
  console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399"));
  console.log(linha("👥", "Grupo:", NomeGrupo, "#22d3ee"));
  console.log(linha("📦", "Tipo:", tipoMsg, "#f97316"));
  console.log(linha("🕒", "Hora:", hora2, "#facc15"));
  console.log(linha("💬", "Texto:", body?.slice(0, 60) || "—", "#e5e7eb"));

  console.log(
    chalk.hex("#a855f7")("╚═════════════════════════════════╝\n")
  );
}

// ===== REAÇÃO =====
if (info?.message?.reactionMessage) {
  separador("REAÇÃO DETECTADA", "#f59e0b");

  console.log(linha("👤", "Usuário:", pushname, "#60a5fa"));
  console.log(linha("📱", "Número:", sender.split("@")[0], "#34d399"));
  if (isGroup) console.log(linha("👥", "Grupo:", NomeGrupo, "#22d3ee"));
  console.log(linha("😂", "Emoji:", info.message.reactionMessage.text, "#facc15"));

  console.log(
    chalk.hex("#f59e0b")("╚═════════════════════════════════╝\n")
  );
}

if(isVisualizar) {
await conn.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

if (isStatus && isVisualizar) {
let statusContent = '';
if (info.message.conversation) {
statusContent = info.message.conversation; 
} else if (info.message.imageMessage) {
statusContent = '[Imagem]'; 
} else if (info.message.videoMessage) {
statusContent = '[Vídeo]'; 
}

await conn.sendMessage(
from,
{ react: { key: info.key, text: '💖' } },
{ statusJidList: [info.key.participant, botNumber] }
 );
}
//==={ANTI LINK} ===\\
let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await conn.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return reply("o Erro ta aq")
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1200);
conn.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
conn.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(MembrosGP).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}//FIM

// ===== SISTEMA DE DIGITANDO AUTOMÁTICO =====
let digitandoGrupos = new Map()

async function iniciarDigitando(jid) {
 digitandoGrupos.set(jid, true)
const intervalo = setInterval(async () => {
if (!digitandoGrupos.get(jid)) {
 clearInterval(intervalo)
 return
}
await conn.sendPresenceUpdate('composing', jid)
}, 4000)
setTimeout(() => pararDigitando(jid), 10000)
}

async function pararDigitando(jid) {
digitandoGrupos.delete(jid)
await conn.sendPresenceUpdate('paused', jid)
}

//ANTI MENCIONAR 
if (info.message?.groupStatusMentionMessage && isGroup && isAntiMencionar && !isGroupAdmins && !So_Dono) {
 try {
 await conn.sendMessage(from, { delete: info.key})
 } catch (e) {
 console.log("Não consegui apagar o aviso do status")
 }
await conn.groupParticipantsUpdate(from, [ sender ],  "remove")
 await conn.sendMessage(from, { text: `🚫 @${sender.split("@")[0]} foi removido por mencionar o grupo em status.`, mentions: [sender] })
}



//FUNÇÃO PARA CONTAR MENSAGENS 

const groupIdscount = [];
for(let obj of ContarMessages) {
groupIdscount.push(obj.groupId);
}

var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of ContarMessages[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = ContarMessages[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./DADOS/MEDIA/contador.json', JSON.stringify(ContarMessages, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
ContarMessages[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./DADOS/MEDIA/contador.json', JSON.stringify(ContarMessages, null, 2) + '\n')
}
} else if(isGroup) {
ContarMessages.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./DADOS/MEDIA/contador.json', JSON.stringify(ContarMessages, null, 2) + '\n')
}

const MSG = Cmd(command, NomeGrupo, prefix);
const SoLink = q?.includes("http:") || q?.includes("https:");

const readMore = String.fromCharCode(8206).repeat(4000);

//CONSTANTES IMPORTANTES
async function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


//EVAL E EXECUÇÕES 
if(body.startsWith('π')){
try {
if(info.key.fromMe) return 
if(!So_Dono) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return conn.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(body.startsWith(':)')){
try {
if(info.key.fromMe) return   
if(!So_Dono) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return conn.sendMessage(from, {text: bang}, {quoted: info})
}

conn.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', hora, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}

//EXECUÇÕES EVAL
if(body.startsWith('¥')) {
if(info.key.fromMe) return 
if(!So_Dono) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}//FIM

//==COMANDOS COM PREFIXO ABAIXO

switch (command) {
//COMANDOS DE ADMIN'S!!
case 'rebaixar':  case 'promover':
if (!isGroupAdmins) return reply(msg.SoAdmin);
if (!isBotGroupAdmins) return reply(msg.BotAdmin)
if (!menc_os2 || menc_jid2.length > 1) return reply("Marque a mensagem do usuário ou mencione apenas um @.");
 if (!JSON.stringify(MembrosGP).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar.");
if(command === 'rebaixar') {
await conn.sendMessage(from, {react: {text: "😥", key: info?.key}});
if (botNumber.includes(menc_os2)) return reply('Não sou besta de rebaixar eu mesmo né 🙁, mas estou decepcionado com você.');
await conn.groupParticipantsUpdate(from, [menc_os2], "demote");
await conn.sendMessage(from, { 
 text: `@${menc_os2.split("@")[0]} foi rebaixado para *"MEMBRO COMUM"*`,
mentions: [menc_os2] 
});
} else if(command === 'promover') {
await conn.sendMessage(from, {react: {text: "🔥", key: info?.key}});
if(So_Admins?.includes(menc_os2)) return reply("o usuário mencionado já e um admin do grupo chefe!");
if (botNumber.includes(menc_os2)) return reply("Eu ja sou administradora do grupo chefe!");
await conn.groupParticipantsUpdate(from, [menc_os2], "promote");
await conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi promovido(a) para o cargo de administrador`,
mentions: [menc_os2]
});
}
break;

case 'd':
case 'del':
case 'apagar': {
if(!isGroupAdmins && !So_Dono && !isVip) return reply(msg.SoAdm);
await reagir(from, "🚮");
const ctx = info.message?.extendedTextMessage?.contextInfo
if(!ctx?.stanzaId) return reply("❌ Marque a mensagem que deseja apagar.")
 const keyToDelete = { remoteJid: from, fromMe: false, id: ctx.stanzaId, participant: ctx.participant }
await conn.sendMessage(from, { delete: keyToDelete })
}
break

case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdmin);
if (!isBotGroupAdmins) return reply(msg.BotAdmin);
try {
await conn.sendMessage(from, {react: {text: "😥", key: info?.key}});
if (!menc_os2 || menc_jid2[1]) 
return reply("Marque a mensagem do usuário ou mencione o @ dele. Apenas um usuário por vez.");
if (!JSON.stringify(MembrosGP).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar.");
 
if (botNumber.includes(menc_os2)) {
await conn.groupParticipantsUpdate(from, [sender], "demote");
return reply("Você tentou me banir! Agora perdeu o cargo de administrador.");
}

if (MeuNumero?.includes(menc_os2)) {
await conn.groupParticipantsUpdate(from, [sender], "demote");
return reply("Você tentou banir meu dono,  Agora perdeu o cargo de administrador.");
}

await conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi removido(a) com sucesso.`, mentions: [menc_os2] });
await conn.groupParticipantsUpdate(from, [menc_os2], "remove");  
 } catch (e) {
console.error(e);
reply("Ocorreu um erro ao tentar remover o usuário.");
 }
break; // by: shizukuh

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('O recurso de antilink hardcore já está ativado.')
conn.sendMessage(from, {react: {text: "☠️", key: info?.key}});
dataGp[0].antilinkhard = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('O recurso de antilink hardcore já está desativado.')
conn.sendMessage(from, {react: {text: "👀", key: info?.key}});
dataGp[0].antilinkhard = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autorepo': 
case 'autoresposta': 
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length <1) return reply("1 para ativar, 0 para desativar!");
if(Number(args[0]) === 1) {
if(SoAutoRepo) return reply("Este recuso já está ativado neste grupo!")
dataGp[0].autorepo = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!SoAutoRepo) return reply("*_Este recurso já está desativado neste grupo!_*");
dataGp[0].autorepo = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply("Use 1 para ativar, 0 para desativar!");
}
break;

case 'modogamer': 
case 'modobrincadeiras': 
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length <1) return reply("1 para ativar, 0 para desativar!");
if(Number(args[0]) === 1) {
if(isModobn) return reply("Este recuso já está ativado neste grupo!")
dataGp[0].modobn = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply("*_Este recurso já está desativado neste grupo!_*");
dataGp[0].modobn = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply("Use 1 para ativar, 0 para desativar!");
}
break;

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins && !SoDono) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isBemvindo) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isBemvindo) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'legendabv':  
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isBemvindo) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isBemvindo) {
dataGp[0].wellcome[0].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`
)
}
break

case 'welcome2':
case 'bemvindo2':  
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins && !So_Dono) return reply(msg.SoDono)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isBemvindo2) return reply('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isBemvindo2) return reply('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'legendabv2':  
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isBemvindo2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isBemvindo2) {
dataGp[0].wellcome[1].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`
)
}
break

case 'so_adm':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdm)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(SoAdmins) return reply('Ja esta ativo')
dataGp[0].So_Admins = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!SoAdmins) return reply('Ja esta Desativado')
dataGp[0].So_Admins = false
setGp(dataGp)
reply('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anti-mencao':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdm)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiMencionar) return reply('Ja esta ativo')
dataGp[0].antimencao = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti menção neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiMencionar) return reply('Ja esta Desativado')
dataGp[0].antimencao = false
setGp(dataGp)
reply('Desativou o recurso de anti menção de status neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'linkgp': {
try {
if (!isGroup) return reply(msg.SoEmGrupos);
if (!isGroupAdmins) return reply(msg.SoAdm);
if (!isBotGroupAdmins) return reply(msg.BotAdmin);
await conn.sendMessage(from, {react: {text: "🔗", key: info?.key}});

let foto;
try {
foto = await conn.profilePictureUrl(from, 'image');
} catch {
foto = "https://files.catbox.moe/ygsirs.jpg";
}

const link = `https://chat.whatsapp.com/${await conn.groupInviteCode(from)}`;

const txt = `
🔗 *LINK OFICIAL DO GRUPO — ${NomeGrupo}*

🔗 link: ${link}

Clique no botão abaixo para copiar o link:\n
`.trim();

const media = await prepareWAMessageMedia(
 { image: { url: foto } },
 { upload: conn.waUploadToServer }
);

const botoes = [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📋 COPIAR LINK DO GRUPO",
copy_code: link
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "📂 ABRIR MENU",
id: `${prefix}menu`
})
}
];

const card = {
header: {
hasMediaAttachment: true,
imageMessage: media.imageMessage
},
headerType: "IMAGE",
body: { text: txt },
nativeFlowMessage: { buttons: botoes },
footer: { text: "Shizuku Base — v1.0" }
};

await conn.relayMessage(
from,
{
interactiveMessage: {
contextInfo: {
participant: sender,
quotedMessage: {
extendedTextMessage: { text: "Gerando link do grupo..." }
}
},
carouselMessage: { cards: [card] }
}
},
{}
);

} catch (e) {
console.log("Erro no linkgp:", e);
reply("Erro ao gerar o link do grupo.");
}
}
break;


case 'totag':
case 'cita':
case 'hidetag': {
  if (!isGroup) return reply(enviar.msg.grupo)
  if (!isGroupAdmins) return reply(enviar.msg.adm)

  let DFC = ""
  const rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
  const MRC_TD = MembrosGP.map(i => i.id)
  const comandoRegex = new RegExp(`^\\s*\\${prefix}${command}\\s*`, "i")
  const pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage
  const blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage
  const purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage
  const yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage
  const aud_d = isQuotedAudio ? rsm?.audioMessage : ""
  const figu_d = isQuotedSticker ? rsm?.stickerMessage : ""
  const red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? rsm?.conversation : info.message?.conversation || "";
  const green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text

  if (pink && !aud_d && !purple) {
    pink.caption = q.length > 1 ? q.trim() : (pink.caption || '').replace(comandoRegex, '').trim()
    pink.image = { url: pink.url }
    pink.mentions = MRC_TD
    DFC = pink
  }

  else if (blue && !aud_d && !purple) {
    blue.caption = q.length > 1 ? q.trim() : (blue.caption || '').replace(comandoRegex, '').trim()
    blue.video = { url: blue.url }
    blue.mentions = MRC_TD
    DFC = blue
  }

else if (red && !aud_d && !purple) {  
  const cu = red.replace(comandoRegex, "").trim()

  const black = {  
    text: cu || '',  
    mentions: MRC_TD  
  }  

  DFC = black  
}

  else if (!aud_d && !figu_d && green && !purple) {  
  const kuh = green.replace(comandoRegex, "").trim()

  const brown = {  
    text: kuh || '',  
    mentions: MRC_TD  
  }  

  DFC = brown  
}

  else if (purple) {
    purple.document = { url: purple.url }
    purple.mentions = MRC_TD
    DFC = purple
  }

  else if (yellow && !aud_d) {
    yellow.caption = q.length > 1 ? q.trim() : (yellow.caption || '').replace(comandoRegex, '').trim()
    yellow.document = { url: yellow.url }
    yellow.mentions = MRC_TD
    DFC = yellow
  }

  else if (figu_d && !aud_d) {
    figu_d.sticker = { url: figu_d.url }
    figu_d.mentions = MRC_TD
    DFC = figu_d
  }

  else if (aud_d) {
    aud_d.audio = { url: aud_d.url }
    aud_d.mentions = MRC_TD
    aud_d.ptt = false
    DFC = aud_d
  }

  if (DFC) {
    await conn.sendMessage(from, DFC).catch(e => console.log(e))
  } else {
    reply("⚠️ Nenhuma mensagem válida encontrada para citar ou marcar todos.")
  }
}
break 

case 'marcar':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isGroupAdmins) return reply(msg.SoAdm)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
async function marcac() {
bla = []
blad = `- ${NomeBot} 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐧𝐝𝐨 𝐓𝐨𝐝𝐨𝐬 𝐨𝐬 𝐦𝐞𝐦𝐛𝐫𝐨𝐬 𝐜𝐨𝐦𝐮𝐧𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨/𝐜𝐨𝐦𝐮𝐧𝐢𝐝𝐚𝐝𝐞. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break
//COMANDOS PARA GRUPOS
case 'dono':
case 'bot':{
if(command === 'bot') {
await reagir(from, "💖");
await reply(`Bot: ${NomeBot}\n\nContato: wa.me/${botNumber.split("@")[0]}`);
} else if(command === 'dono') {
await reagir(from, "👑");
await reply(`Dono: ${NickDono}\n\nContato: wa.me/${NumberDono}`);
}
}
break;

case 'menu': case 'm': {
  try {
    await reagir(from, "💖");

    const media = await prepareWAMessageMedia(
      { image: FotoMenu },
      { upload: conn.waUploadToServer }
    );

    const txtt = `
╔═══❄️🎄 𝗕𝗘𝗠-𝗩𝗜𝗡𝗗𝗢(𝗔) 🎄❄️═══╗
        🖤 ${NomeBot} 🩸
╚═══════🕷️❅🕯️❅🕷️═══════╝

❄️⛓️━━━━━━━━━━━━━━━⛓️❄️
      🕸️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖̧𝗢̃𝗘𝗦 🕸️
❄️⛓️━━━━━━━━━━━━━━━⛓️❄️

🎄 ▸ 🤍 𝘽𝙤𝙩: ${NomeBot}  
❄️ ▸ 🌙 𝙑𝙚𝙧𝙨𝙖̃𝙤: 1.0  
🩸 ▸ 🔮 𝙋𝙧𝙚𝙛𝙞𝙭𝙤: ${prefix}  

❄️⛓️━━━━━━━━━━━━━━━⛓️❄️
       🖤 𝗣𝗘𝗦𝗦𝗢𝗔𝗟 🖤
❄️⛓️━━━━━━━━━━━━━━━⛓️❄️

🎅 ▸ 🖤 𝙐𝙨𝙪𝙖́𝙧𝙞𝙤: ${pushname}  
🩸 ▸ 🔪 𝘿𝙤𝙣𝙤: ${NickDono}  
🎁 ▸ ☎️ 𝘾𝙤𝙣𝙩𝙖𝙩𝙤: wa.me/${NumberDono}  

╔═🎄🩸 𝗕𝗢𝗔𝗦 𝗙𝗘𝗦𝗧𝗔𝗦 🩸🎄═╗
      ❄️ Use com carinho... ou não 😈
╚════════════════════════╝
`.trim();

const botoes = [
  {
    name: "single_select",
    buttonParamsJson: JSON.stringify({
      title: "❄️🎄 MENU SHIZUKU 🎄❄️",
      sections: [
        {
          title: "🕷️ Escolha seu destino, amor...",
          rows: [
            { header: "🩸 Menu Principal", title: "❄️ Abrir Menu Principal", id: `${prefix}Menu_menu` },
            { header: "📥 Downloads", title: "🎄 Menu de Downloads", id: `${prefix}menudown` },
            { header: "👑 Dono", title: "🩸 Painel do Dono", id: `${prefix}Menudono` },
            { header: "🛡️ Admins", title: "❄️ Área dos Admins", id: `${prefix}Menuadm` },
            { header: "🎨 Stickers", title: "🎁 Figurinhas", id: `${prefix}Menufig` },
            { header: "🔞 Adulto", title: "🖤 Menu Secreto +18", id: `${prefix}Menu18` },
            { header: "🤑 Vip", title: "💎 Menu Vip", id: `${prefix}Menuvip` },
            { header: "😺 Brincadeiras", title: "😸 Menu Diversão", id: `${prefix}Brincadeiras` },
            { header: "🤓 Inteligências", title: "🧠 Menu IAS", id: `${prefix}Menu-ia` }
          ]
        }
      ]
    })
  }
];
    
    const carouselMessage = {
      cards: [
        {
          header: {
            hasMediaAttachment: true,
            imageMessage: media.imageMessage
          },
          headerType: "IMAGE",

          body: { 
            text: txtt
          }, mentions: [sender, info?.key?.remoteJid],

          footer: { text: "Selecione abaixo:" },
          nativeFlowMessage: { buttons: botoes }
        }
      ]
    };

if(isButtons) {
    await conn.relayMessage(
      from,
      {
        interactiveMessage: {
          contextInfo: {
            participant: sender,
            quotedMessage: {
              extendedTextMessage: { text: prefix + command }
            },
            mentions: [sender, info?.key?.remoteJid]
          },
          body: { 
            text: "✨ Clique abaixo para abrir a lista!",
            mentions: [sender, info?.key?.remoteJid] 
          },
          carouselMessage
        },mentions: [sender]
      }, 
      {quoted: selo}
    );

} else {
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menu(prefix, sender, NickDono, NomeBot, data, hora, NumberDono, version), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
}
  } catch (e) {
    console.log(e);
    reply("Erro ao enviar.");
  }
}
break;

case 'menu_menu': { await reagir(from, "❤️‍🔥")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menu(prefix, sender, NickDono, NomeBot, data, hora, NumberDono, version), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
}break;

case 'menufigurinhas': case 'menufig': { await reagir(from, "💖");
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menuStickers(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break 

case 'menuadm':{ await reagir(from, "👑")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menuadm(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break;

case 'menu18':{ await reagir(from, "🔞")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menu18(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break;

case 'menudono':{ await reagir(from, "🤴")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menuDono(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break;

case 'menudown':{ await reagir(from, "🎶")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menuDown(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break;

case 'menu-ia': {await reagir(from, "🤓")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menuIa(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break;

case 'menuvip': { await reagir(from, "🤑")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menuVip(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break;

case 'brincadeiras': { await reagir(from, "😺")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menuBn(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break;

//COMAMDOS DE IA
case 'chatgpt': case 'gpt':{
if(!q.trim()) return reply("Falta a question!");
await reagir(from, "👀");
let resposta = await BuscarNogpt(q, SHIZUKU_SITE, SHIZUKU_KEY);
await reply(resposta);
}
break;

case 'perplexity':
case 'pxt':
if(!q?.trim()) return reply('insira um título ');
try { 
await reply(msg.Aguarde);
const { eaiquery } = require("./DATABASE2/SCRAPERS/perplexity");
const resposta = await eaiquery(q?.trim());
await reply(resposta.msg);
} catch (e) {
reply("Erro ao buscar resposta");
console.log(e);
} 
break;


case 'play': {
try {if (!q) return reply("Digite o nome da música.");
await reagir(from, "🎵");
const pesquisa = await ytSearch(q?.trim());
const i = pesquisa?.videos?.[0];
if (!i?.url) return reply("Não encontrei resultados.");
const imgbuffer = await getBuffer(i?.thumbnail);
const textoMusica = `
𖦹҉ 🎼 *𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒*╰៚݈݇

⸵░⃟💿̸꙰ 𝐓𝐢́𝐭𝐮𝐥𝐨: ${i?.title}
⸵░⃟👤̸꙰ 𝐀𝐮𝐭𝐨𝐫: ${i?.author?.name}
⸵░⃟⏱̸꙰ 𝐓𝐞𝐦𝐩𝐨: ${i?.timestamp}
⸵░⃟👁̸꙰ 𝐕𝐢𝐞𝐰𝐬: ${i?.views}
⸵░⃟📅̸꙰ 𝐀𝐠𝐨: ${i?.ago}

░⃟⃛🔗༘݊➮ ${i?.url}

${isButtons ? " 𖨮𖡎｡ *𝐄𝐒𝐂𝐎𝐋𝐇𝐀 𝐔𝐌𝐀 𝐎𝐏𝐂̧𝐀̃𝐎*" : "enviando sua música, aguarde..."}
`;

const media = await prepareWAMessageMedia(
      { image: imgbuffer },
      { upload: conn.waUploadToServer }
    );

    const botoes = [
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "🎧 𝐁𝐀𝐈𝐗𝐀𝐑 𝐀𝐔𝐃𝐈𝐎",
          id: `${prefix}ytaudio ${i?.url}`
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "🎬 𝐁𝐀𝐈𝐗𝐀𝐑.𝐕𝐈𝐃𝐄𝐎",
          id: `${prefix}ytvideo ${i?.url}`
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "📤 𝐁𝐀𝐈𝐗𝐀𝐑 𝐄𝐌 𝐃𝐎𝐂",
          id: `${prefix}pdoc ${i?.url}`
        })
      }
      
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: textoMusica },
      footer: { text: "Shizuku Base — v1.0" },
      nativeFlowMessage: { buttons: botoes }
    };

if(isButtons) {
    await conn.relayMessage(
      from,
      {
        interactiveMessage: {
          contextInfo: {
            participant: sender,
            quotedMessage: {
              documentMessage: { contactVcard: true, quoted: info }
            }
          },
          carouselMessage: { cards: [card] }
        }
      },
      {quoted: selo}
    );

} else {
await conn.sendMessage(from, { image: imgbuffer, caption: textoMusica}, {quoted: info});
const musica = await YoutubeDl(i?.url, SHIZUKU_SITE, SHIZUKU_KEY, tipo = 'mp3');
await conn.sendMessage(from, { audio: { url: musica?.url }, mimetype: "audio/mpeg", fileName: musica?.filename || "audio.mp3"}, { quoted: info })
}
	
  } catch (e) {
    console.log("Erro no playteste:", e);
    reply("Erro ao buscar música.");
  }
}
break;

case 'pdoc':
try {
if(!q?.trim()) return reply("Por favor adicione um link do YouTube!")
await reagir(from, "📤");
const audiobct = await getBuffer(`${SHIZUKU_SITE}/download/ytmp3?&link=${encodeURIComponent(q?.trim())}&apitoken=${SHIZUKU_KEY}`)
await conn.sendMessage(from, {document: audiobct,
mimetype: "audio/mpeg", fileName: "audio.mp3", ptt: false, contextInfo: ShizukuStile}, {quoted: info});
} catch (e) {
reply("Error...") 
} break 

case 'ytaudio': case 'ytvideo':{
try {
if(!q?.trim()) return reply("Falta o link do vídeo ");
conn.sendMessage(from, { react: { text: "⌛", key: info.key}})
const tipo = command === 'ytvideo' ? 'mp4' : 'mp3';
const result = await YoutubeDl(q, SHIZUKU_SITE, SHIZUKU_KEY, tipo) 
const { url, filename } = result;
if(command === 'ytvideo') {
await conn.sendMessage(from, { video: { url: url }, mimetype: "video/mp4", fileName: filename}, {quoted: info});
} else if(command === 'ytaudio') {
await conn.sendMessage(from, { audio: { url: url }, mimetype: "audio/mpeg", fileName: filename}, {quoted: info});
} 
} catch (e) {
reply('Erro ao buscar resultados!');
console.log('erro', e);
}
}
break;


//DOWNLOADS
case 'play_video':
if(!q?.trim()) return reply("insira  o título do vídeo");
await conn.sendMessage(from, { react: { text: "⌛", key: info?.key }});
await conn.sendMessage(from, { text: msg.Aguarde }, { quoted: selo })
try {const pesquisa = await ytSearch(q?.trim());
const dados = pesquisa?.videos?.[0];
if(!dados.url) return conn.sendMessage(from, { text: "Erro ao buscar por resultados, tente novamente!" }, { quoted: selo });
const Resultados = await YoutubeDl(dados?.url, SHIZUKU_SITE, SHIZUKU_KEY,  tipo = 'mp4');
const { url, filename } = Resultados;
await conn.sendMessage(from, { video: { url: url }, mimetype: "video/mp4", fileName: filename }, { quoted: selo });
await conn.sendMessage(from, { react: { text: "✅", key: info?.key }});
} catch (Error) {
conn.sendMessage(from, { text: "Erro ao buscar por vídeo, por favor tente novamente mais tarde!" }, { quoted: info });
conn.sendMessage(from, { react: { text: "❌", key: info?.key }});
console.log("Erro no play_video", Error);
}
break;//


case 'ttksearch': {
if(!q?.trim()) return reply("adicione o parâmetro título do vídeo");
try { await reagir(from, "✅");
const ttks = await ttksearch(q, conn, from, quoted, selo, SHIZUKU_SITE, SHIZUKU_KEY);
const { title, urls, mime, audio }  = ttks;
await conn.sendMessage(from, {video: {url: urls }, mimetype: mime, caption: `✏️  *Título: ${title}`}, {quoted: info});
setTimeout(() => {
conn.sendMessage(from, {audio: {url: audio}, mimetype: "audio/mpeg"}, {quoted: info});
}, 1200);
} catch (e) {
reply("Erro ao buscar resultados");
}
} break;

case 'ttkdl': case 'tiktokdl': {
try {
if(!q?.trim()) { 
return reply("*_Cade o url do video?_*") 
}
if(!SoLink)  return reply("*_Apenas links_*") 
await reply(msg.Download)
const ttk = await ttkdl(q, conn, from, info, quoted, ShizukuStile, SHIZUKU_SITE, SHIZUKU_KEY);
await reagir(from, "✅");
const { txt, thumb, audioMp3, videoMp4 }  = ttk
 await conn.sendMessage(from, { image: { url: thumb }, caption: txt}, {quoted: info});

setTimeout(() => {
conn.sendMessage(from, {video: {url: videoMp4 }, mimetype: "video/mp4"}, {quoted: info});
}, 1200);
setTimeout(() => {
conn.sendMessage(from, {audio: {url: audioMp3 }, mimetype: "audio/mpeg"}, {quoted: info});
}, 1200);
} catch (e) {
reply("Erro") 
console.log("erro:", e)
}
}break;

case 'instadl': {
try {
if(!q.trim()) {
return reply("*_Cade o link do vídeo do Instagram?_*")
} 
if(!SoLink) return reply("*_Apenas links_*");
await reply(msg.Download);
const ig = await instadl(q, conn, from, info, quoted, ShizukuStile, SHIZUKU_SITE, SHIZUKU_KEY) 
const { thumb, url } = ig
await conn.sendMessage(from, {image: {url: thumb }, caption: "AGUARDE, ja estou enviando o vídeo!"}, {quoted: info});
setTimeout(() => {
conn.sendMessage(from, {video: {url: url }, mimetype: "video/mp4"}, {quited: info});
}, 1200);

await reagir(from, "✅");
} catch (e) {
await reply("Erro ao buscar resultados!");
console.log("erro:", e)
}
}
break;

//METADINHAS
case 'metadinhas': {await reagir(from, "🧑‍🤝‍🧑");
try {const met = await METADINHAS(conn, from, info,quoted, SHIZUKU_KEY, SHIZUKU_SITE);
const { feminino, masculino } = met;
await conn.sendMessage(from, {image: {url: feminino}, caption: "*🫅| Perfil feminino"}, {quoted: info});
setTimeout(() => {
conn.sendMessage(from, {image: {url: masculino}, caption: "*🫅| Perfil feminino"}, {quoted: info});
}, 1200);
} catch (e) {reply("Error..") }
} break 


//COMANDOS DE DONO!!
case 'setprefix':
if (!So_Dono) return reply(msg.SoDono);
if (!q) return reply("Digite o novo prefixo. Ex: *!setprefix .*");
const novoPrefix = q.trim();
Config.prefix = novoPrefix;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Prefixo alterado para: *${novoPrefix}*`);
break;

case 'nick-dono':
if (!So_Dono) return reply(msg.SoDono);
const novaNick = q.trim();
Config.NickDono = novaNick;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Nick do dono alterado para: *${novaNick}*`);
break;

case 'nome-bot':
if (!So_Dono) return reply(msg.SoDono);
const novoNome = q.trim();
Config.NomeBot = novoNome;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Nome do bot alterado para: *${novoNome}*`);
break;

case 'novo-dono':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!setdono 551199999999*");
const novoDn = q.split("@")[0] || menc_os2.split("@")[0];
const novoDono = novoDn;
Config.NumberDono = novoDono;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ *Número do dono atualizado!*\nNovo dono: wa.me/${novoDono}`);
break;

case 'dono1':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono1 551199999999*");
const novodn1 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono1 = novodn1;
Config2.dono1 = Dono1;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Pronto mestre!*\n${NomeBot} agora tem um novo dono!\n\n👑 Dono 1: wa.me/${Dono1}`);
break;


case 'dono2':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono2 551199999999*");
const novodn2 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono2 = novodn2;
Config2.dono2 = Dono2;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 2: wa.me/${Dono2}`);
break;


case 'dono3':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono3 551199999999*");
const novodn3 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono3 = novodn3;
Config2.dono3 = Dono3;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 3: wa.me/${Dono3}`);
break;


case 'dono4':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono4 551199999999*");
const novodn4 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono4 = novodn4;
Config2.dono4 = Dono4;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 4: wa.me/${Dono4}`);
break;


case 'dono5':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono5 551199999999*");
const novodn5 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono5 = novodn5;
Config2.dono5 = Dono5;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 5: wa.me/${Dono5}`);
break;


case 'dono6':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono6 551199999999*");
const novodn6 = q.split("@")[0] || menc_os2.split("@")[0];
const Dono6 = novodn6;
Config2.dono6 = Dono6;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 6: wa.me/${Dono6}`);
break;

case 'botoff':
case 'boton': {
if(!So_Dono) return reply(msg.SoDono);
if(command === 'botoff') {
if (BotOff === true) return reply(`❌ *${NomeBot} já está DESLIGADO, mestre...*`);
Config2.botoff = true;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
return reply(
`⛔ *SISTEMA DESATIVADO*

✅ Somente você poderá usar meus comandos agora.
🕸️ *Shizuku entrou no modo silencioso...*`);
}
if(command === 'boton') {
if(BotOff === false) return reply(`⚠️ *${NomeBot} já está ATIVO, mestre!*`);
Config2.botoff = false;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
return reply(
`✅ *SISTEMA REATIVADO*

💖 Todos os usuários agora podem usar meus comandos novamente.
🔥 *Shizuku voltou ao combate!*`);
}
}
break;

case 'so_dono': {
 if (!So_Dono) return reply(msg.SoDono)
Config2.isSoDono = !Config2.isSoDono
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4))
if (Config2.isSoDono) {
reply("✅ Sucesso mestre! Agora apenas os *donos* podem usar meus comandos.")
} else {
 reply("✅ Sucesso mestre! Todos os comandos foram reativados, qualquer um pode usar novamente.")
 }
 break
}

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!So_Dono) return reply(msg.SoDono)
if(command == 'bangp'){
if(isBanGrupo) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso`)
} else {
if(!isBanGrupo) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'reiniciar': case 'r':{
if(!So_Dono) return reply(msg.SoDono)
setTimeout(async () => {
reply("Reiniciando...")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
}
break

case 'donos':
case 'listadonos': {conn.sendMessage(from, { react: { text: "🎉", key: info.key }});
let texto = `🎄 *LISTA OFICIAL DE DONOS — ${NomeBot}* ❄️

🎅 *Dono Principal*
👑 ${NickDono}
📞 wa.me/${NumberDono}

━━━━━━━━━━━━━━━━━━

🤶 *Donos Adicionais:*`;

let donos = [
  Config2?.dono1,
  Config2?.dono2,
  Config2?.dono3,
  Config2?.dono4,
  Config2?.dono5,
  Config2?.dono6
];

donos.forEach((dono, i) => {
  if(dono && dono !== "undefined" && dono !== "") {
    texto += `\n🎁 Dono ${i+1}: wa.me/${dono}`;
  }
});

texto += `

━━━━━━━━━━━━━━━━━━
✨ *${NomeBot} deseja um Feliz Natal!* 🎄
🎆 Que sua jornada com o bot seja mágica!
`;

conn?.sendMessage(from, {image: FotoMenu, caption: texto, contextInfo: ShizukuStile}, {quoted: info});
}
break;

case 'verificado':
if(!So_Dono) return reply(msg.SoDono)
if(!isVerificado) {
Config2.verificado = true
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`O verificado foi Ativado`)
} else if(isVerificado) {
Config2.verificado = false
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`O verificado foi Desativado`)
}
break

case 'botoes':
if(!So_Dono) return reply(msg.SoDono)
if(!isButtons) {
Config2.buttons = true
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`Buttons foi Ativado`)
} else if(isButtons) {
Config2.buttons = false
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`Buttons foi Desativado`)
}
break

case 'totalcases':
try {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
const cont = caseNames.length;
await reply(`${cont}`)
} catch (error) {
console.log(error)
reply("Erro ao obter o total de comandos");
}
break;

case 'cases':
if(!So_Dono) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
conn.sendMessage(from, { text: listCases() }, { quoted: info });
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao obter as cases.') }
break

case 'visumsg':
case 'visualizarmsg':
if(!So_Dono) return reply(msg.SoDono)
if(!isVisualizar) {
Config2.visualizar = true
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(" Ativou com sucesso, agora o bot irá visualizar todas as mensagens recebidas nos grupos/chats")
} else if(isVisualizar) {
Config2.visualizar = false
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply("Desativou com sucesso, agora o bot não irá mais visualizar nenhuma mensagem recebida")
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bio-bot':
if(!So_Dono) return reply(msg.SoDono);
const BioBot = args.join(" ");
await conn.updateProfileStatus(`${BioBot}`);
reply(`Sucesso, meu recado foi alterado para: *${BioBot.trim()}*`);
break;

case 'name-perfil-bot':
if(!So_Dono) return reply(msg.SoDono);
const NameBot = args.join(" ");
await conn.updateProfileName(`${NameBot}`)
reply(`Sucesso, meu recado foi alterado para: *${NameBot.trim()}*`);
break;

case 'fotomenu':
case 'fundomenu': {
if (!So_Dono) return reply(msg.SoDono);
let img = null;
if (isQuotedImage) {
img = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
} else if (isImage) {
img = info.message.imageMessage
} else {
return reply(`❌ Marque uma imagem ou envie uma imagem com o comando:\n\n${prefix + command}`)
}
await reply(`- Calma aí, já estou trocando a foto do menu pra você... 🔪💖`);
let stream = await downloadContentFromMessage(img, 'image')
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

fs.writeFileSync('./dono/menus/Foto-menu/img-menu.jpg', buffer);
reply(`✅ *Foto do menu atualizada com sucesso!*`);
}
break;

case 'setperfil': {
if(!So_Dono) return reply(msg.SoDono);
let img = null

if (isQuotedImage) {
img = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
} else if (isImage) {
img = info.message.imageMessage
} else {
return reply(`❌ Marque uma imagem ou envie uma imagem com o comando:\n\n${prefix + command}`)
}
await reply("Atualizando foto do meu perfil...")
let stream = await downloadContentFromMessage(img, 'image')
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

await conn.updateProfilePicture(botNumber, buffer)
reply("✅ Foto do meu perfil atualizada com sucesso!")
await pararDigitando(from)
}
break

case 'rm-fotobot':
case 'rmfotobot':{
if(!So_Dono) return reply(msg.SoDono);
await reply("Removendo a foto do meu perfil, aguarde....");
await conn.removeProfilePicture(botNumber);
setTimeout(() =>{
reply("Sucesso, agora meu perfil não possui mais foto");
}, 1200);
} break;


//OUTROS COMANDOS INFORMATIVOS 
case 'ping': {
  try {
conn.sendMessage(from, { react: { text: "🏃‍♀️", key: info.key }});
    const uptime = process.uptime();
    const r = (Date.now() / 1000) - info.messageTimestamp;

    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const usedPercent = (usedMem / totalMem) * 100;

    const totalRamGB = (totalMem / 1024 / 1024 / 1024).toFixed(2);
    const freeRamGB = (freeMem / 1024 / 1024 / 1024).toFixed(2);
    const usedRamGB = (usedMem / 1024 / 1024 / 1024).toFixed(2);

    const texto = `- *🏓 | STATUS PING - SHIZUKU BASE*
> ${tempo}, ${pushname}!!
•
- *⏳ | ${NomeBot} está ativa por:* 
- → ${kyun(uptime)}
- *⚡ | velocidade:* → ${r.toFixed(3)}s
- *📊 | Ram Total:* → ${totalRamGB}GB
- *📉 | Ram usada:* → ${usedRamGB}GB
- *📈 | Ram Disponível:* → ${freeRamGB}GB
- *🧾 | processo:* → ${usedPercent.toFixed(1)}%`;

    // === FOTO LOCAL ===
    const media = await prepareWAMessageMedia(
      { image: FotoMenu },
      { upload: conn.waUploadToServer }
    );

    // === BOTÕES ===
    const botoes = [
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "🔁 Atualizar",
          id: `${prefix}ping`
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "📋 Menu",
          id: `${prefix}menu`
        })
      }
    ];

    // === CARD ===
    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      footer: { text: "Shizuku Base — v1.0" },
      nativeFlowMessage: { buttons: botoes }
    };

    // === ENVIO ===
if(isButtons) {
    await conn.relayMessage(
      from,
      {
        interactiveMessage: {
          contextInfo: {
            participant: sender,
            quotedMessage: {
              extendedTextMessage: { text: "STATUS ATUAL" }
            }
          },
          body: { text: "🏓 Status do bot" },
          carouselMessage: { cards: [card] }
        }
      },
      {quoted: selo}
    );
} else {
await reply(texto);
}
  } catch (e) {
    console.log(e);
    reply("Erro ao mostrar ping.");
  }
}
break;

//PLAQUINHAS 
case 'plaq1':
case 'plaq2':
case 'plaq3':
case 'plaq4':
case 'plaq5':
case 'plaq6':
case 'plaq7':
case 'plaq8':
case 'plaq9':
case 'plaq10':
case 'plaq11':
try {
if(!isVip) return reply(msg.IsVipp)
if(!q.trim()) return reply(`ex: ${prefix+command} Jpzinh`);
await reply(isGroup ? "*_Enviando plaquinha no seu pv_*." : "*_Enviando.._*")

const Imagem = await getBuffer(`${SHIZUKU_SITE}/api/${command}?query=${encodeURIComponent(q.trim())}&apitoken=${SHIZUKU_KEY}`)

await conn.sendMessage(sender, {image: Imagem, caption: "Plaquinha criada com sucesso!"}, {quoted: info});
} catch (e) {
reply("Erro ao criar plaquinha")
} break;

//FIGURINHAS 
case 'figu_raiva': case 'figu_roblox': case 'figu_engracada':
case 'figu_memes': case 'figu_anime': case 'figu_coreana': case 'figu_bebe': case 'figu_desenho': case 'figu_animais':
case 'figu_flork': case 'figu_emoji':{
if(!isVip) return reply(msg.IsVipp);
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
await reply(isGroup ? `⌛ | *_Estou enviando ${q} figurinhas no seu PV, águarde..._*` : `⌛ | *_Enviando..._*`)
await conn.sendMessage(from, {react: {text: "💖", key: info?.key}})         
async function figu_figura() {
const figura = await getBuffer(`${SHIZUKU_SITE}/sticker/${command}?apitoken=${SHIZUKU_KEY}`)
conn.sendMessage(sender, {sticker: figura, contextInfo: ShizukuStile}, {quoted: info})
}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_figura()
}
break
}

case 'figurinhas': case 'figuale':{
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
await reply(isGroup ? `⌛ | *_Estou enviando ${q} figurinhas no seu PV, águarde..._*` : `⌛ | *_Enviando..._*`)
await conn.sendMessage(from, {react: {text: "💖", key: info?.key}})         
async function figu_Jpzinh() {
var rnd = Math.floor(Math.random() * 8051)
const figura = await getBuffer(`${SHIZUKU_SITE}/sticker/aleatorio?apitoken=${SHIZUKU_KEY}`);
conn.sendMessage(sender, {sticker: figura, contextInfo: ShizukuStile}, {quoted: info})
}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_Jpzinh()
}
break
};

case 'gerarnick':
case 'fazernick': {
try {
const nick = args.join(" ");
if (!nick) return reply(`✍️ Escreva um nome para gerar nicks.\n\nEx: ${prefix + command} jpzinh`);
if(ANT_LTR_MD_EMJ(nick))
return reply("⚠️ Use apenas letras normais, sem emojis ou caracteres modificados!");
await reply("*_GERANDO NICKS, AGUARDE..._*");
const { data } = await axios.get(`${SHIZUKU_SITE}/geradores/fazernick?nome=${encodeURIComponent(nick)}&apitoken=${SHIZUKU_KEY}`);
const resultados = data.result || data || [];

if(!Array.isArray(resultados) || resultados.length === 0) return reply("❌ Não consegui gerar nicks. Tente outro nome!");

const txt = `
💈 *NICKS GERADOS — ${NomeBot}* 💈

Escolha um Nick abaixo para copiar:
`.trim();

const media = await prepareWAMessageMedia(
 { image: { url: "https://files.catbox.moe/jw3rx5.jpg" } },
 { upload: conn.waUploadToServer }
 );

const botoes = resultados.slice(0, 25).map((r, i) => ({
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: `${r?.result || r}`,
copy_code: r.result || r
})
}));

const card = {
header: {
hasMediaAttachment: true,
imageMessage: media.imageMessage
},
headerType: "IMAGE",
body: {
text: txt
  },

nativeFlowMessage: {
buttons: botoes
},

footer: {
text: "Shizuku Base — v1.0"
}
};

if(isButtons) {
 await conn.relayMessage(from,
      {
        interactiveMessage: {
          contextInfo: {
            participant: from,
            quotedMessage: {
              extendedTextMessage: { text: "Gerando Nick…" }
            }
          },
          carouselMessage: { cards: [card] }
        }
      },
      {}
    );

} else {

const nicks = data || data[0]?.result || []

if (!nicks.length) {
  return reply('❌ Nenhum nick foi gerado.')
}

let txtNicks = `• Nicks gerados com sucesso:\n–\n`

for (let i = 0; i < nicks.length; i++) {
  txtNicks += `*${i + 1}.* ${nicks[i]?.result}\n–\n`
}

reply(txtNicks.trim())
}
  } catch (err) {
    console.error("Erro no gerarnick:", err);
    reply("❌ Ocorreu um erro ao gerar os nicks.");
  }
}
break;


case 'ativar': {
if(!isGroupAdmins && !So_Dono) return reply(msg.SoAdm);
let fotogp;
  try {await reagir(from, "👑");
 fotogp = await conn.profilePictureUrl(from, 'image').catch(_ => fotogp = "https://files.catbox.moe/mxlixe.jpg")

 const media = await prepareWAMessageMedia(
      { image: { url: fotogp } },
      { upload: conn.waUploadToServer }
    );

    const texto = `*SISTEMAS DO GRUPO*

Selecione o sistema que deseja ativar:`

    const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "Gerenciar Sistemas",
          sections: [
            {
              title: "Funções",
              rows: [
                { title: "Anti - link", id: `${prefix}antilink 1` },
                { title: "Bem - vindo 1", id: `${prefix}bemvindo 1` },
                { title: "Bem - vindo 2", id: `${prefix}bemvindo2 1`},
                { title: "So Admins", id: `${prefix}so_adm 1`},
                { title: "Auto resposta", id: `${prefix}autorepo 1`},
                { title: "Anti menção", id: `${prefix}anti-mencao 1`}
              ]
            }
          ]
        })
      }
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      footer: { text: "Shizuku - Base" },
      nativeFlowMessage: { buttons: botoes }
    };

    await conn.relayMessage(from, {
      interactiveMessage: {
        carouselMessage: { cards: [card] },
        body: { text: "Escolha um sistema 👇" }
      }
    }, {})

  } catch (e) {
    console.log(e)
    reply("Erro ao mostrar sistemas.")
  }
}
break;

case 'desativar': {
if(!isGroupAdmins && !So_Dono) return reply(msg.SoAdm);
let fotogp2;
  try {await reagir(from, "💔");
 fotogp2 = await conn.profilePictureUrl(from, 'image').catch(_ => fotogp2 = "https://files.catbox.moe/mxlixe.jpg")

 const media = await prepareWAMessageMedia(
      { image: { url: fotogp2 } },
      { upload: conn.waUploadToServer }
    );

    const texto = `*SISTEMAS DO GRUPO*

Selecione o sistema que deseja desativar:`

    const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "Gerenciar Sistemas",
          sections: [
            {
              title: "Funções",
              rows: [
                { title: "Anti - link", id: `${prefix}antilink 0` },
                { title: "Bem - vindo 1", id: `${prefix}bemvindo 0` },
                { title: "Bem - vindo 2", id: `${prefix}bemvindo2 0`},
                { title: "So Admins", id: `${prefix}so_adm 0`},
                { title: "Auto resposta", id: `${prefix}autorepo 0`},
                { title: "Anti menção", id: `${prefix}anti-mencao 0`}
              ]
            }
          ]
        })
      }
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      footer: { text: "Shizuku - Base" },
      nativeFlowMessage: { buttons: botoes }
    };

    await conn.relayMessage(from, {
      interactiveMessage: {
        carouselMessage: { cards: [card] },
        body: { text: "Escolha um sistema 👇" }
      }
    }, {})

  } catch (e) {
    console.log(e)
    reply("Erro ao mostrar sistemas.")
  }
}
break;

case 'st':
case 'stk':
case 'sticker':
case 's':
await conn.sendMessage(from, {react: {text: `⌛`, key: info.key}})
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = ` ➲ ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ  ➠\n ➲ ɴᴏᴍᴇ ᴅᴏ ʙᴏᴛ ➠\n ➲ ɴɪᴄᴋ ᴅᴏɴᴏ ➠`
var author2 = ` 「 ${pushname} 」 \n「 ${NomeBot} 」\n「 ${NickDono} 」`
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(conn, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `➲ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ➠`
var author2 = ` ${pushname}`
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(conn, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${prefix+command}`)
}
break

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(msg.Download)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
conn.sendMessage(from, {image: buff}, {quoted: selo}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply("Erro, tente mais tarde!")
}
break

case 'grupo': {
if(!isGroup) return reply(msg.SoEmGrupos);
if(!So_Dono && !isGroupAdmins) return reply("❌ Apenas admins ou dono podem usar este comando.");
if(!isBotGroupAdmins) return reply(msg.BotAdmin);
 if (!args[0]) return reply(`
Use:
!grupo a → fechar mensagens
!grupo f → abrir mensagens
!grupo lock → travar config do grupo
!grupo unlock → liberar config
  `.trim());

if(args[0] === 'f') {
await conn.groupSettingUpdate(from, 'announcement');
reply("🔒 Grupo fechado (mensagens só admins).");
} else if (args[0] === 'a') {
await conn.groupSettingUpdate(from, 'not_announcement');
reply("🔓 Grupo aberto (todos falam).");
} else if (args[0] === 'lock') {
await conn.groupSettingUpdate(from, 'locked');
reply("🛑 Configurações travadas (só admins).");
} else if (args[0] === 'unlock') {
 await conn.groupSettingUpdate(from, 'unlocked');
reply("✅ Configurações liberadas (todos podem editar).");
} else {
reply("❌ Opção inválida.");
}
}
break;

case 'novolink':
case 'redefinirlink': {
if (!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdm)
if (!isBotGroupAdmins) return reply(msg.BotAdmin)
await reply("🔄 Redefinindo o link do grupo...")
await conn.groupRevokeInvite(from)
let novoLink = await conn.groupInviteCode(from)
reply(`✅ *Link do grupo redefinido com sucesso!*\n\n🔗 Novo link:\nhttps://chat.whatsapp.com/${novoLink}`)
await pararDigitando(from)
}
break

case 'rm-fotogp':
case 'rmfotogp': {
if (!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdm)
if (!isBotGroupAdmins) return reply(msg.BotAdmin)
await reply("🗑️ Apagando foto do grupo...")
await conn.removeProfilePicture(from)
reply("✅ Foto do grupo removida com sucesso!")
await pararDigitando(from)
}
break

case 'fotogp':
case 'novafotogp': {
if (!isGroup) return reply(msg.SoEmGrupos)
if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdm)
if (!isBotGroupAdmins) return reply(msg.BotAdmin)

let img = null

if (isQuotedImage) {
img = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
} else if (isImage) {
img = info.message.imageMessage
} else {
return reply(`❌ Marque uma imagem ou envie uma imagem com o comando:\n\n${prefix + command}`)
}
await reply("🖼️ Atualizando foto do grupo...")
let stream = await downloadContentFromMessage(img, 'image')
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

await conn.updateProfilePicture(from, buffer)
reply("✅ Foto do grupo atualizada com sucesso!")
await pararDigitando(from)
}
break

case 'checkme':
case 'meustats':{if (!isGroup) return reply('❌ Esse comando só funciona em grupos!')
var ind = groupIdscount.indexOf(from)
if (ind < 0) return reply('⚠️ Nenhuma atividade sua foi registrada nesse grupo ainda.')
 let membro = ContarMessages[ind].numbers.find(obj => obj.id === sender)
if (!membro) return reply('⚠️ Nenhuma atividade sua foi registrada ainda.')
let texto = `📊 *SUAS ESTATÍSTICAS NO GRUPO*\n\n`
  texto += `🆔 Número: @${sender.split('@')[0]}\n`
  texto += `💬 Mensagens: *${membro.messages}*\n`
  texto += `⚙️ Comandos usados: *${membro.cmd_messages}*\n`
  texto += `🧷 Figurinhas: *${membro.figus}*\n`
  texto += `📱 Aparelho: *${membro.aparelho || 'Desconhecido'}*\n`
  texto += `\n🔥 *Atividade:* ${
    membro.messages > 300 ? 'Super ativo'
    : membro.messages > 100 ? 'Moderado'
    : 'Sumido'
  }`

await conn.sendMessage(from, { text: texto, mentions: [sender], contextInfo: ShizukuStile}, { quoted: selo})
}
break


case 'check':
case 'stats':{if (!isGroup) return reply('❌ Esse comando só funciona em grupos!')
 if (!menc_os2) return reply('❌ Marque um membro para ver as estatísticas.')
 var ind = groupIdscount.indexOf(from)
 if(ind < 0) return reply('⚠️ Nenhuma atividade registrada no grupo ainda.')
let membro = ContarMessages[ind].numbers.find(obj => obj.id === menc_os2)
if (!membro) return reply('⚠️ Nenhuma atividade registrada desse membro.')

  let texto = `📊 *ESTATÍSTICAS DE @${menc_os2.split('@')[0]}*\n\n`
  texto += `💬 Mensagens: *${membro.messages}*\n`
  texto += `⚙️ Comandos usados: *${membro.cmd_messages}*\n`
  texto += `🧷 Figurinhas: *${membro.figus}*\n`
  texto += `📱 Aparelho: *${membro.aparelho || 'Desconhecido'}*\n`
  texto += `\n🔥 *Atividade:* ${
    membro.messages > 300 ? 'Super ativo'
    : membro.messages > 100 ? 'Moderado'
    : 'Sumido'
  }`

 await conn.sendMessage(from, { text: texto, mentions: [menc_os2], contextInfo: ShizukuStile }, { quoted: selo })
}
break

case 'perfil': {if(!isGroup) return reply(msg.SoEmGrupos);
let perfil;
try {await conn.sendMessage(from, {react: {text: "❤️‍🔥", key: info.key}});
perfil = await conn.profilePictureUrl(sender_ou_n, 'image').catch(_ => perfil = "https://files.catbox.moe/yet8m8.jpg")
const bio = await conn.fetchStatus(sender_ou_n)
const recado = bio[0]?.status?.status || "privado, ou sem recado!!";
var levelgado = [Math.floor(Math.random() * 102)];
var levelgostosura = [Math.floor(Math.random() * 103)];
var valor = [Math.floor(Math.random() * 10000)];
var gay = [Math.floor(Math.random() * 102)]
var puta = [Math.floor(Math.random() * 100)]
var user = sender_ou_n?.split("@")[0];

const Foto_Perfil = await getBuffer(perfil);
let TXT_Perfil = `╭───〔 𝙿𝙴𝚁𝙵𝙸𝙻 / 𝚄𝚂𝚄𝙰́𝚁𝙸𝙾 〕───╮
│
│ 👤 *𝚄𝚜𝚞𝚊́𝚛𝚒𝚘:*
│ ➤ @${user}
│
│ 📞 *𝙽𝚞́𝚖𝚎𝚛𝚘:*
│ ➤ ${user}
│
│ 💬 *𝚁𝚎𝚌𝚊𝚍𝚘:*
│ ➤ ${recado || "Privado"}
│
│ 📱 *𝙳𝚒𝚜𝚙𝚘𝚜𝚒𝚝𝚒𝚟𝚘:*
│ ➤ ${adivinha}
│
│ 👥 *𝙶𝚛𝚞𝚙𝚘:*
│ ➤ ${NomeGrupo}
│
│ 🗓️ ${data}  ⏰ ${hora}
│
├──────────────
│
│ 🐂 *𝙻𝚎𝚟𝚎𝚕 𝙶𝚊𝚍𝚘:* ${levelgado}%
│ 🏳️‍🌈 *𝙻𝚎𝚟𝚎𝚕 𝙶𝚊𝚢:* ${gay}%
│ 🍑 *𝙻𝚎𝚟𝚎𝚕 𝙿𝚞𝚝𝚊:* ${puta}%
│ 🔥 *𝙻𝚟𝚎𝚕 𝙶𝚘𝚜𝚝𝚘𝚜𝚞𝚛𝚊:* ${levelgostosura}%
│ 🍼 *𝚅𝚊𝚕𝚘𝚛 𝚍𝚘 𝚙𝚛𝚘𝚐𝚛𝚊𝚖𝚊:* R$${valor}
│
├──────────────
│
│ ❝ 𝙲𝚘𝚗𝚜𝚎𝚕𝚑𝚘:
│ *_${CONSELHO || "Ainda vai piorar… então acostuma 😌" }_*
│
╰────────────────╯`;
await conn.sendMessage(from, {image: Foto_Perfil, caption: TXT_Perfil, mentions: [sender_ou_n]}, {quoted: selo});
} catch (Err) {
reply("Erro ao tentar enviar perfil");
console.log("Erro em:", Err);
}
}
break;

case 'addvip': {
if (!So_Dono) return reply(msg.SoDono);
let tempovip = q.split("/")[1];
if (!menc_os2  || !tempovip) 
return reply(`✳ Exemplo:
${prefix}addvip @user/4d
${prefix}addvip @user/2h
${prefix}addvip @user/10min`);

let result = addVIP(menc_os2, tempovip);
if (!result) return reply("❌ Formato inválido. Use d, h ou min.");

reply(`✅ VIP ATIVADO!

👤 Usuário: @${menc_os2.split("@")[0]}
⏰ Expira em: ${new Date(result).toLocaleString("pt-BR")}`);
}
break;

case 'ver-vip': {
if (!isVIP(sender)) return reply(msg.IsVipp)
let exp = getExpire(sender);
reply(`🌟 SEU VIP

✅ Status: ATIVO
⏳ Expira: ${new Date(exp).toLocaleString("pt-BR")}`);
}
break;

case 'delvip': {
if (!So_Dono) return reply(msg.SoDono);
if(!menc_os2) return reply("cade o user?")
if(!isVIP(menc_os2)) return reply("o usuário mencionado não é vip");
removeVIP(menc_os2);
reply("✅ VIP removido.");
}
break;

case 'gethtml': {
try {
if(!isVip) return reply(msg.IsVipp);
if(!q?.trim()) return reply("adicione um link do site que deseja puxar o HTML");
if(!SoLink) return reply("apenas links");
await reply(msg.Aguarde);
const { data } = await axios.get(q.trim());
await reply(data);
} catch (e) {
reply("Error....");
}break;
}

//BRINCADEIRAS
case 'beijo': case 'beijar':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isModobn && !So_Dono) return reply(msg.Modobn)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
conn.sendMessage(from, {video: {url: beijocmd },  gifPlayback: true, caption: `@${sender.split("@")[0]} deu um beijo gostoso na(o) @${menc_os2.split('@')[0]} ??👉👈❤` , mentions: [sender, menc_os2]}, {quoted: selo})
break

case 'abraco': case 'abracar':
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isModobn && !So_Dono) return reply(msg.Modobn)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer abraçar, a mensagem ou o @')
abraco1 = ["https://files.catbox.moe/ty52a2.mp4", "https://files.catbox.moe/rxuhxi.mp4"];
abracoc = abraco1[Math.floor(Math.random() * abraco1.length)]
linkVideo = await getBuffer(abracoc)
conn.sendMessage(from, {video:  linkVideo, gifPlayback: true, caption: `@${sender.split("@")[0]} deu um abraço gostoso na(o) @${menc_os2.split('@')[0]} 🫂❤` , mentions: [sender, menc_os2]}, {quoted: selo})
break

//COMANDOS INFORMATIVOS!!
case 'gerarlink':
try {
 if (isMedia && info.message?.imageMessage || isQuotedImage) {
 reply(msg.Aguarde);
 let img = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
 let buffer = await getFileBuffer(img, 'image')
 let url = await upload(buffer)
 reply(`✅ Link gerado com sucesso: ${url}`)

 } else if ((isMedia && info.message?.videoMessage?.seconds < 30) || (isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30)) {
 reply(msg.Aguarde);
 let vid = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
 let buffer = await getFileBuffer(vid, 'video')
 let url = await upload(buffer)
 reply(`✅ Link gerado com sucesso: ${url}`)

} else if (isQuotedAudio) {
 reply(msg.Aguarde);
 let aud = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
 let buffer = await getFileBuffer(aud, 'audio')
 let url = await upload(buffer)
 reply(`✅ Link gerado com sucesso: ${url}`)

 } else if (isQuotedSticker) {
 reply('⏳ Processando...')
 let stick = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
const stream = await downloadContentFromMessage(stick, 'sticker')
let buffer = Buffer.from([])
for await (const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk])
  }
  if (!buffer.length) return reply('❎ Erro ao baixar a figurinha.')
  let url = await upload(buffer)
 reply(`✅ Link gerado com sucesso: ${url}`)
 } else {
 reply("Você deve marcar uma imagem, vídeo (até 30s), áudio ou figurinha.")
 }
} catch (e) {
 console.log("Erro ao gerar link:", e)
 reply("❎ Ocorreu um erro ao gerar o link.")
}
break

case 'status': {
if(!isGroupAdmins && !So_Dono) { reply(msg.SoAdm)
await reagir(from, "😼");
return;
}
await reagir(from, "📌")
const statusGp = `
*STATUS DE ATIVAÇÕES - SHIZUKU-BASE*

▸ 🎭 *Modo Brincadeiras*  
   ┗ ${isModobn ? "🟢 Ativo" : "🔴 Desativado"}

▸ 🔗 *Anti-Link*  
   ┗ ${isAntiLinkHard ? "🟢 Ativo" : "🔴 Desativado"}

▸ 👋 *Bem-Vindo*  
   ┗ ${isBemvindo ? "🟢 Ativo" : "🔴 Desativado"}

▸ 👋 *Bem-Vindo 2*  
   ┗ ${isBemvindo2 ? "🟢 Ativo" : "🔴 Desativado"}

▸ 🛡️ *Somente Admins*  
   ┗ ${SoAdmins ? "🟢 Ativo" : "🔴 Desativado"}

▸ 🤖 *Auto-Resposta*  
   ┗ ${SoAutoRepo ? "🟢 Ativo" : "🔴 Desativado"}

▸ 🚫 *Anti-Menção de Status*  
   ┗ ${isAntiMencionar ? "🟢 Ativo" : "🔴 Desativado"}`;


await conn.sendMessage(from, { text: statusGp, mentions: [ sender ]}, {quoted: selo});
} break;


//FINAL DE COMANDOS 
default:

if(budy2 === "prefixo" || budy2 === "prefix"){
await reply(`*_Aqui esta o meu prefixo: ${prefix}_*`);
}

if(SoAutoRepo) {// SO SEGUIR A MSM LÓGICA E FAZER DO JEITO QUE VCS QUISER!!

if(budy2 === "bot" || budy2 === "Bot") {
const gg = await getBuffer("https://files.catbox.moe/26flje.mp3");
conn.sendMessage(from, {audio: gg, mimetype: "audio/mpeg", fileName: `${NomeBot}.mp3`, ptt: false, contextInfo: ShizukuStile, mentions: [sender]}, {quoted: selo});
await reagir(from, "🤬");
};

if(budy.includes(tempo) || budy.includes('bom dia') || budy.includes('boa tarde') ||budy.includes('boa noite ') || budy.includes('boa madrugada')) {
await reply(`Ola, ${tempo} ${pushname}, Como você está? 😄`);
}


}//FINAL É AQUII

if(isCmd) {
await conn.sendMessage(from, {react: {text: "❓", key: info?.key}});
const CmdSimilar = ListaComandos(command);
const txt = CmdSimilar.similarity > 0 
    ? `${prefix + CmdSimilar.command}`
    : `Nenhum!`;

const sem = `${(CmdSimilar.similarity || 0).toFixed(1)}%`;

const ErrorComando = ` ⚠️ *COMANDO INVÁLIDO!* ⚠️\n
*🛠️ | Comando:* [ ${prefix + command} ]
- --------------------
*⚖️ | Semelhante:* 「 ${txt} 」
- --------------------
*🪫 | Porcentagem:*[ ${sem} ]
- --------------------
> ⚙️ → Use: *"${prefix}Menu"* pra ver meus comandos.`;

await reply(ErrorComando)
break;
}

}
}catch (e) {
console.log("Erro geral no index:", e);

if (String(e).includes("data")) {
console.log("A API caiu ou não foi possível executar esta ação.");
}

 if (String(e).includes("aborted")) {
let file = require.resolve("./connect");
delete require.cache[file];
require(file);
}
}
};
}

let file2 = require.resolve(__filename)
fs.watchFile(file2, () => {
fs.unwatchFile(file2)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file2]
require(file2)
})

iniciarBot().catch(async(e) => {
console.log(colors.red("Erro apresentado no arquivo: './index' - Error: "+e))
})
