const isKhali = (data: any): boolean => {
  if (Array.isArray(data)) return !data.length;
  else if (typeof data === "object" && data !== null)
    return !Object.keys(data).length;
  else return !data;
};

export default isKhali;
