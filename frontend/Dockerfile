FROM node:18.12 AS build

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --force

COPY . .

ARG HTTP_PROTOCOL
ARG PUBLIC_ADDR
ARG MAPBOX_TOKEN
ARG CONTACTS_PHONE
ARG CONTACTS_EMAIL
ARG CONTACTS_TELEGRAM
ARG CONTACTS_GITHUB
ARG OFFICE_COORDS_LAT
ARG OFFICE_COORDS_LON
ARG MAKE_OFFER_FORM_LINK

RUN echo "PUBLIC_MAPBOX_TOKEN=${MAPBOX_TOKEN}" > ./.env && \
    echo "PUBLIC_CONTACTS_PHONE=${CONTACTS_PHONE}" >> ./.env && \
    echo "PUBLIC_CONTACTS_EMAIL=${CONTACTS_EMAIL}" >> ./.env && \
    echo "PUBLIC_CONTACTS_TELEGRAM=${CONTACTS_TELEGRAM}" >> ./.env && \
    echo "PUBLIC_CONTACTS_GITHUB=${CONTACTS_GITHUB}" >> ./.env && \
    echo "PUBLIC_MAKE_OFFER_FORM_LINK=${MAKE_OFFER_FORM_LINK}" >> ./.env && \
    echo "PUBLIC_OFFICE_COORDS_LAT=${OFFICE_COORDS_LAT}" >> ./.env && \
    echo "PUBLIC_OFFICE_COORDS_LON=${OFFICE_COORDS_LON}" >> ./.env

RUN npm run build
RUN npm prune --production

FROM node:19-alpine3.16
WORKDIR /app
COPY --from=build ./app/build/ ./build/
COPY --from=build ./app/node_modules ./node_modules/
COPY --from=build ./app/package.json .

CMD ["node", "build"]