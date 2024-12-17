API_GATEWAY = api-gateway

copy-env:
	cd ./scripts && sh copy-env.sh

build-dev:
	APP_MODE=development docker compose build --no-cache $(API_GATEWAY) #_dev

build-prod:
	APP_MODE=production docker compose build --no-cache $(API_GATEWAY)

dev:
	APP_MODE=development docker compose up --watch $(API_GATEWAY) #_dev

prod:
	APP_MODE=production docker compose up $(API_GATEWAY)

#ms-build-dev:
#	$env:APP_MODE="development"; docker compose build --no-cache api-gateway
#
#ms-build-prod:
#	$env:APP_MODE="production"; docker compose build --no-cache api-gateway
#
#ms-dev:
#	$env:APP_MODE="development"; docker compose up --watch api-gateway
#
#ms-prod:
#	$env:APP_MODE="production"; docker compose up api-gateway
