FROM node:18-alpine

ARG APP_MODE

WORKDIR /api-gateway

COPY ./package*.json ./

COPY ./ ./

RUN echo "MODE: ${APP_MODE}"

RUN if [ "${APP_MODE}" = "production" ]; then \
        npm install --production; \
    else \
        npm install; \
    fi

RUN if [ "${APP_MODE}" = "production" ]; then \
        npm run build; \
    fi

CMD if [ "${APP_MODE}" = "production" ]; then \
        npm run start:prod; \
    else \
        npm run dev; \
    fi
