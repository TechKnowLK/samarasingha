FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TechKnowLK/samarasingha /root/samarasingha 
WORKDIR /root/samarasingha/
RUN git clone https://github.com/Amdapro/Config
RUN git clone
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
 