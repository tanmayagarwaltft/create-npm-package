import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_Op1pla6au1yWj71uAFY7voYQLtkwph5CqgGK7ui9');

export async function convertCurrency(fromCurrency, toCurrency, units){
   const response =  await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = response.data[toCurrency];
    return multiplier*units;
}

// export default {convertCurrency}


