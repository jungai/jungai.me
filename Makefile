.PHONY: deploy

patch:
	npx zx ./scripts/deploy.mjs 

minor:
	npx zx ./scripts/deploy.mjs -v minor