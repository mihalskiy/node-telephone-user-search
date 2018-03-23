# ---- Deps ---- #
FROM node:9 as deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm set progress=false
RUN npm install --only=production
RUN cp -R node_modules prod_node_modules
RUN npm install
RUN du -sh ./*

# ---- PreRelease ---- #
FROM node:9 as prerelease
WORKDIR /app
COPY --from=deps /app/prod_node_modules ./node_modules
COPY . ./

# ---- Release ---- #
FROM node:9 as release
ENV NODE_ENV aws-dev
#ENV CONFIG_FILE ./conf/prod/config.json
#ENV LOG_LEVEL info
WORKDIR /app
EXPOSE 8000
COPY --from=prerelease /app ./
ENTRYPOINT ["npm", "start"]
