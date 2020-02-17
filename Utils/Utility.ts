export const GetMappedValue = (obj: any, key: string) => {
  for (let prop in obj) {
    if (prop == key) return obj[prop];
  }
};

export const GetMappedValuesFromArray = (objs, key) => {
  let results = [];
  for (let i = 0; i < objs.length; i++) {
    let p = GetMappedValue(objs[i], key);
    results.push(p);
  }
  return results;
};
