const fetch = require('node-fetch');
const axios = require("axios");

async function BuscarNogpt(query, SHIZUKU_SITE, SHIZUKU_KEY) {
try {const { data } = await axios.get(`${SHIZUKU_SITE}/api/ias/gpt-2?query=${encodeURIComponent(query?.trim())}&apitoken=${SHIZUKU_KEY}`);
const { resposta } = data
if(!resposta) return reply("Erro");
return resposta;
} catch (e) {
return "Erro em :" +e;
}
}

async function BaixarNoYt(query, tipo) {
try {const { data } = await axios.get(`https://shizuku-ia.0.obrh.uno/api/download/youtube?query=${encodeURIComponent(query.trim())}&tipo=${tipo}`)
const { download } = data?.resultado;
return download 
} catch (e) {
return "Erro ao buscar resultados";
}
};

async function YoutubeDl(link, SHIZUKU_SITE, SHIZUKU_KEY, tipo) {
try {
const { data } = await axios.get(`${SHIZUKU_SITE}/api/download/youtube-dl`, { params: { link: link, tipo: tipo, apitoken: SHIZUKU_KEY}});
const { url, filename } = data?.resultado?.download;
return { url, filename };
} catch (e) {
console.log("Erro", e);
return "Erro no download";
};
}

async function ttkdl(url, conn, from, info, quoted, ShizukuStile, SHIZUKU_SITE, SHIZUKU_KEY) {
if(!url?.includes("tiktok")) return conn.sendMessage(from, {text: "Apenas links do tiktok"}, {quoted: info})
try {const { data } = await axios.get(`${SHIZUKU_SITE}/download/tiktokdl-2?url=${encodeURIComponent(url.trim())}&apitoken=${SHIZUKU_KEY}`)
const { title, title_audio, thumb, videoMp4, audioMp3 } = data?.resultado?.data[0];
if(!thumb) return conn.sendMessage(from, {text: "Erro ao buscar por resultados"}, {quoted: info})
const txt = `*Titulo:* ${title}
*Sub Titulo:* ${title_audio}

*DOWNLOAD VIA SHIZUKU API'S*`;
return { txt, thumb, audioMp3, videoMp4 };
} catch (e) {
return conn.sendMessage(from, {text: "Erro ao buscar por resultados!"});
console.log("erro", e)
}
};

async function instadl(link, conn, from, info, quoted, ShizukuStile, SHIZUKU_SITE, SHIZUKU_KEY) {
if(!link?.includes("instagram")) return conn.sendMessage(from, {text: "Apenas links do Instagram"}, {quoted: info})
try {const { data } = await axios.get(`${SHIZUKU_SITE}/download/igdl?url=${encodeURIComponent(link?.trim())}&apitoken=${SHIZUKU_KEY}`);
const { thumb, url } = data?.resultado[0];
if(!url) return conn.sendMessage(from, {text: "Erro ao obter informações do vídeo"}, {quoted: info});
return { thumb, url };
} catch (e) {
conn.sendMessage(from, {text: "Erro ao buscar resultados"});
console.log("erro", e)
return;
}
}

async function METADINHAS(conn, from, info,quoted, SHIZUKU_KEY, SHIZUKU_SITE) {
try {const { data } = await axios.get(`${SHIZUKU_SITE}/api/metadinha?&apitoken=${SHIZUKU_KEY}`);
const { masculino, feminino } = data?.resultado
return { masculino, feminino } 
} catch (e) {
return conn.sendMessage(from, {text: "Erro no comando"}, {quoted: info});
}
}

async function ttksearch(query, conn, from, quoted, selo, SHIZUKU_SITE, SHIZUKU_KEY) {
try { const { data } = await axios.get(`${SHIZUKU_SITE}/api/tiktoksearch?query=${encodeURIComponent(query?.trim())}&apitoken=${SHIZUKU_KEY}`);
const { title, urls, mime, audio } = data?.resultado;
return { title, urls, mime, audio };
} catch {
return "Erro ao buscar resultados";
}
}

module.exports = { BuscarNogpt, BaixarNoYt, ttkdl, instadl, METADINHAS, ttksearch, YoutubeDl }