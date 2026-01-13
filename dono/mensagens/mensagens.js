

const mensagensSoAdm = [
    "⛔❄️ **Acesso Negado.** Você não está na minha lista de Administradores. Sem presentes para você! 🤍🕷️",
    "✨👑 **Somente Elite.** O Papai Noel só confia o comando aos Administradores do grupo. Tente novamente no próximo ano. 🎄🕸️",
    "⚔️📜 **Regras Claras.** Precisa de poder de Admin para isso. Sem exceções! 🤍🔔"
];

const mensagensSoDono = [
    "🔥🚫 **Poder Supremo.** Este é um comando que só meu criador pode tocar. Mantenha distância! 👑🕷️",
    "✨🧑‍💻 **Apenas Meu Mestre.** Só o Dono absoluto pode usar. Não se iluda com presentes pequenos. 🤍🕸️",
    "⚔️🔑 **Chave Exclusiva.** A chave deste comando está na posse do meu Dono. Não se atreva a tentar! 🎄🕷️"
];

const mensagensSoEmGrupos = [
    "⛔🏘️ **Apenas na Comunidade.** Este comando só faz sentido se usado dentro do grupo. Reúna-se! 🤍🕸️",
    "✨🔔 **Exclusivo para o Grupo.** Não faça isso no privado, quero todos os Elfos vendo. 🎄🕷️",
    "👁️‍🗨️✉️ **Só em Grupos.** Para este comando, o palco é o grupo. Sem testemunhas no privado. 🤍🕸️"
];

const mensagensBotAdmin = [
    "⚠️🛠️ **Me Dê Poder.** Eu preciso ser Administradora aqui. Sem poder, não há presentes. 🤍🕷️",
    "✨👑 **Exijo Respeito.** Preciso da função Admin para realizar esta tarefa. Ajude-me a ajudar você. 🎄🕸️",
    "📜🔔 **Minhas Regras.** Para este comando funcionar, devo ser uma Administradora do grupo. Cumpra! 🤍🕷️"
];


const mensagensAguarde = [
    "⏳🕯️ **Aguarde...** Estou tecendo os resultados com cuidado. Não se mova! 🤍🕷️",
    "❄️⌛ **Processando...** Enquanto isso, aprecie a neve caindo. A pressa estraga o Natal. 🎄🕸️",
    "✨🎁 **Quase pronto.** Estou finalizando a entrega do seu pedido. Prometo que vale a espera. 🤍🔔"
];

const mensagensDownload = [
    "📥🎶 **Baixando Presente...** Um pacote especial de dados só para você. Mantenha a calma. 🤍🕷️",
    "⏱️🔗 **Realizando Download.** Estou puxando os dados da minha rede. Quase na hora da entrega. 🎄🕸️",
    "⚡📦 **Transferindo!** Estou enviando o arquivo. Mais rápido que um piscar de olhos. Não perca! 🤍🔔"
];

const mensagensNaoVipp = [
    "⛔👑 **Acesso Negado.** Este comando é apenas para a realeza (Usuários VIP). Seus privilégios ainda não chegaram. 🎁🕷️",
    "✨🚫 **Exclusivo Premium.** Você ainda não está na minha lista de convidados especiais. Compre seu ticket para o Natal! 🤍🕸️",
    "💎🔑 **Privilégios!** A porta está fechada para você. Este é um presente só para quem é VIP. Volte mais tarde. 🎄🤍"
];

const mensagensBnOff = [
    "🤡❌ **Modo Brincadeiras OFF.** Desculpe, a brincadeira acabou. Volte para as tarefas sérias. Precisa de permissão para ativar. 🎄🕸️",
    "👑🎭 **BN Desativado!** A rainha não está com vontade de jogos. Peça educadamente ao meu Dono para ativar o modo brincadeiras. 🤍🕷️",
    "✨📢 **Atenção!** As travessuras estão suspensas. Ative o modo BN primeiro para ter acesso a isso. Não insista. 🔔🤍"
];

const msg = {
    SoAdm: mensagensSoAdm[Math.floor(Math.random() * mensagensSoAdm.length)],
    SoDono: mensagensSoDono[Math.floor(Math.random() * mensagensSoDono.length)],
    BotAdmin: mensagensBotAdmin[Math.floor(Math.random() * mensagensBotAdmin.length)],
    SoEmGrupos: mensagensSoEmGrupos[Math.floor(Math.random() * mensagensSoEmGrupos.length)],
    Download: mensagensDownload[Math.floor(Math.random() * mensagensDownload.length)],
    Aguarde: mensagensAguarde[Math.floor(Math.random() * mensagensAguarde.length)],
    Modobn: mensagensBnOff[Math.floor(Math.random() * mensagensBnOff.length)], 
    IsVipp: mensagensNaoVipp[Math.floor(Math.random() * mensagensNaoVipp.length)] 
};



// TRANSFORMA EM FUNÇÃO
const Cmd = (command, NomeGrupo, prefix) => ({
    Ativado: `
╔═════ • 🟢 ᴀᴛɪᴠᴀᴅᴏ 🟢 • ═════╗
╟ ✨ **Sᴜᴄᴇssᴏ!**
╟ 📜 ʀᴇᴄᴜʀsᴏ:  *『 ${command} 』*
╟ 🏘️ ɢʀᴜᴘᴏ:  *『 ${NomeGrupo} 』*
╟
╟ ⚙️ ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ, ᴜsᴇ:
╟ ✍️ **${prefix}${command} 0**
╚═══════════════════════════╝
`,
    Desativado: `
╔═════ • 🔴 ᴅᴇsᴀᴛɪᴠᴀᴅᴏ 🔴 • ═════╗
╟ ❗ **ᴀᴛᴇɴçãᴏ!**
╟ 📜 ʀᴇᴄᴜʀsᴏ:  *『 ${command} 』*
╟ 🏘️ ɢʀᴜᴘᴏ:  *『 ${NomeGrupo} 』*
╟
╟ ⚙️ ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ ɴᴏᴠᴀᴍᴇɴᴛᴇ, ᴜsᴇ:
╟ ✍️ **${prefix}${command} 1**
╚═══════════════════════════╝
`
});


module.exports = { msg, Cmd };
