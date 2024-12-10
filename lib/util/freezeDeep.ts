function freezeDeep(obj: any){
    // Nesne türünde olmayan veriler için bir işlem yapmıyoruz
    if (obj === null || typeof obj !== 'object') {
        return;
    }

    // Nesnenin özelliklerini dondur
    Object.freeze(obj);

    // Nesnenin her özelliğini kontrol et ve eğer nesne ise, recursive olarak dondur
    Object.getOwnPropertyNames(obj).forEach((prop) => {
        freezeDeep(obj[prop]);
    });
}

export default freezeDeep;