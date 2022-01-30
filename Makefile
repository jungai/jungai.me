.PHONY: patch minor

patch:
	npx zx ./scripts/deploy.mjs 

minor:
	npx zx ./scripts/deploy.mjs -v minor