export function dateJuStyle(str: string) {
	return new Intl.DateTimeFormat("th-TH", {
		dateStyle: "short",
		timeStyle: "short",
	}).format(new Date(str));
}