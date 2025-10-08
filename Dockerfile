FROM cypress/included:13.3.0

WORKDIR /e2e

COPY . .

RUN npm install

CMD ["npx", "cypress", "run", "--spec", "cypress/e2e/EX04-pom.cy.js"]
