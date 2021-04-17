/* eslint-disable import/prefer-default-export */
export function isString(s: unknown): s is string {
	return typeof s === "string";
}
