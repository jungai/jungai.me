.PHONY:	default
default:
	pnpm i -f

.PHONY:	dev-doc
dev-doc:
	pnpm run --filter="docs" dev