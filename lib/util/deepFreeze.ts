function deepFreeze(obj: any): any {
    // Nesne türünde olmayan veriler için bir işlem yapmıyoruz
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Nesnenin özelliklerini dondur
    Object.freeze(obj);

    // Nesnenin her özelliğini kontrol et ve eğer nesne ise, recursive olarak dondur
    Object.getOwnPropertyNames(obj).forEach((prop) => {
        deepFreeze(obj[prop]);
    });

    return obj;
}

export default deepFreeze;