export function dateJuStyle(str: string) {
	return new Intl.DateTimeFormat("th-TH", {
		dateStyle: "short",
	}).format(new Date(str));
}