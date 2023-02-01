


const menu = {
    _menu: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string'){
            return this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof  priceToCheck === 'number'){
            return this._price = priceToCheck;
        }
    }
};

menu.meal = 'Pizza';
menu.price = 8;
console.log(menu);