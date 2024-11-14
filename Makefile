build:
	docker compose up

copy-env:
	cd ./scripts && sh copy-env.sh
