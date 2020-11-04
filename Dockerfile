FROM zenika/alpine-chrome:with-node

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD 1
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser
ENV HEALTHCHECK_URL ''

RUN npm install puppeteer
COPY --chown=chrome . ./

CMD node check.js
