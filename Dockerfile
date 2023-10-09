# FROM node:14.20.0

# WORKDIR /client
# ENV PATH="./node_modules/.bin:$PATH"
# COPY package.json .
# RUN npm install

# COPY . .

# ARG API_BASE_URL=http://localhost:8003/
# ENV API_BASE_URL=$API_BASE_URL
# RUN echo $API_BASE_URL
# RUN echo "API_BASE_URL=$API_BASE_URL" > .env

# RUN npm run build

FROM node:14.20.0

WORKDIR /client
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json .
RUN npm install

COPY . .

# Build args
ARG NODE_ENV
ARG API_URL

# Environment vars
ENV NODE_ENV=$NODE_ENV
ENV API_URL=$API_URL

CMD ["npm", "run", "dev"]