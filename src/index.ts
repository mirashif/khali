export default function isEmpty<T>(data: T): boolean {
	if (Array.isArray(data)) return !data.length;

	if (typeof data === "object" && data !== null)
		return !Object.keys(data).length;

	return !data;
}
