const getImagePathArr = (imageName, extension, count) => {
    let arr = [];
    let i;
    for (i = 1; i <= count; i++) {
        arr.push('assets/img/' + imageName + i + '.' + extension);
    }
    return arr;
};

export default getImagePathArr;
