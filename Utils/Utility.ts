export const GetValueByKey = (obj: any, key: string) => {
    for (const prop in obj) {
        if (prop == key) return obj[prop];
    }
};

export const GetValuesByKey = (objs: Array<any>, key: string) => {
    const results = [] as any;

    for (let i = 0; i < objs.length; i++) {
        const p = GetValueByKey(objs[i], key) as any;
        results.push(p);
    }

    return results;
};
