copy-env:
	cd ./scripts && sh copy-env.sh

build-dev:
	APP_MODE=development docker compose build --no-cache api-gateway

build-prod:
	APP_MODE=production docker compose build --no-cache api-gateway

dev:
	APP_MODE=production docker compose up --watch api-gateway

prod:
	APP_MODE=production docker compose up api-gateway
