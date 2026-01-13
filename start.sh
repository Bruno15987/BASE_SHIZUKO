#!/bin/bash

clear

# ========= CORES =========
BLACK="\033[30m"
RED="\033[31m"
GREEN="\033[32m"
YELLOW="\033[33m"
BLUE="\033[34m"
MAGENTA="\033[35m"
CYAN="\033[36m"
WHITE="\033[37m"
RESET="\033[0m"

BOLD="\033[1m"
DIM="\033[2m"

# ========= LOGO NATALINA =========
echo -e "
${RED}${BOLD}███████╗██╗  ██╗██╗███████╗██╗   ██╗██╗  ██╗██╗   ██╗
${RED}${BOLD}██╔════╝██║  ██║██║╚══███╔╝██║   ██║██║ ██╔╝██║   ██║
${MAGENTA}${BOLD}███████╗███████║██║  ███╔╝ ██║   ██║█████╔╝ ██║   ██║
${MAGENTA}${BOLD}╚════██║██╔══██║██║ ███╔╝  ██║   ██║██╔═██╗ ██║   ██║
${GREEN}${BOLD}███████║██║  ██║██║███████╗╚██████╔╝██║  ██╗╚██████╔╝
${GREEN}${BOLD}╚══════╝╚═╝  ╚═╝╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ 
${RESET}
"

echo -e "${CYAN}                 ❄️ SHIZUKU BASE — NATALINA ❄️${RESET}"
echo -e "${MAGENTA}            🎄 Sistema mágico inicializando... 🎄${RESET}"
echo -e "${WHITE}                  Criado por ${BOLD}JPZINH${RESET}"
echo ""

sleep 0.8

# ========= LOADING =========
printf "${CYAN}${BOLD}"
for i in {1..30}; do
  bar=$(printf "%-${i}s" "❄" | tr ' ' '❄')
  printf "\r🎁 Preparando sistema: [%-30s]" "$bar"
  sleep 0.05
done
printf "${RESET}"

echo -e "\n\n${GREEN}${BOLD}✨ SISTEMA PRONTO — FELIZ NATAL 🎄 ✨${RESET}\n"
sleep 1

# ========= LOOP DO BOT =========
while true
do
    echo -e "${WHITE}[🎄 SHIZUKU 🎄]${RESET} ${GREEN}Aplicação iniciada com sucesso...${RESET}"
    node connect.js

    echo -e "\n${WHITE}[🎄 SHIZUKU 🎄]${RESET} ${RED}O bot foi encerrado ou caiu.${RESET}"
    echo -e "${WHITE}[🎄 SHIZUKU 🎄]${RESET} ${YELLOW}Reiniciando em 3 segundos...${RESET}\n"
    sleep 3
done