FROM buildkite/puppeteer:5.2.1

ENV HEALTHCHECK_URL ''

COPY . .

RUN npm i puppeteer

CMD node check.js
