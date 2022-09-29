const addToDb = (min) => {
    let breakTimes = getStoredCart();
    localStorage.setItem('breaks', JSON.stringify(min));
}
const getStoredCart = () => {
    let breakTimes = '0m';
    const storedTimes = localStorage.getItem('breaks');
    if (storedTimes) {
        breakTimes = JSON.parse(storedTimes);
    }
    return breakTimes;
}
export { addToDb,getStoredCart };