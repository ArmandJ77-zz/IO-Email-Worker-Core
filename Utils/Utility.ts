export const GetValueByKey = (obj: any, key: string) => {
  for (let prop in obj) {
    if (prop == key) return obj[prop];
  }
};

export const GetValuesByKey = (objs: Array<any>, key: string) => {
  let results = <any>[];

  for (let i = 0; i < objs.length; i++) {
    let p = <any>GetValueByKey(objs[i], key);
    results.push(p);
  }

  return results;
};
