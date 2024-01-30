export default function isEmpty(data: unknown): boolean {
	if (Array.isArray(data)) return !data.length;

	if (typeof data === "object" && data !== null)
		return !Object.keys(data).length;

	return !data;
}
