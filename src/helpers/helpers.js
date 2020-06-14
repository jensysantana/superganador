export default class GlobalHelper {
    localStorageSync(key, type, data, codeType){
        // console.log('====================================');
        try {

            if (type === 'save' && data !== null) {
                if (codeType ==='encode') {
                    localStorage.setItem(key, btoa(data));
                    return true;
                }
                localStorage.setItem(key, data);
                return true;
            }

            if (type === 'get') {
                if (codeType === 'decode') {
                    return localStorage.getItem(key) ? atob(localStorage.getItem(key)) :  null;
                }
                return localStorage.getItem(key);
            }
            if (type === 'remove') {
                localStorage.removeItem(key);
                return true;
            }
            return null;
            
        } catch (error) {
            console.log('=====errrooooooo===============');
            console.log(error);
            console.log('=====errrooooooo===============');
            return null;
        }
    }

    GRegExp(){
        // /^[\w._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/
        // email: /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
        return {
            // eslint-disable-next-line
            email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            // eslint-disable-next-line
            password: /^(?=.*[a-z\_\.\-])(?=.*[A-Z\_\.\-])(?=.*[0-9])[a-zA-Z0-9\_\.\-]+$/,
            alpha: '^[a-zA-Z]+$',
            // eslint-disable-next-line
            alphaNum: '^[a-zA-Z\d]+$',
            // eslint-disable-next-line
            alphaNumProdCodes: /^[a-zA-Z\d\-]+$/,
            // eslint-disable-next-line
            productName: /^[a-zA-Z\d\-\(\)\,\.\#\%\+\s\/\&]+$/,
            // eslint-disable-next-line
            productDesc: /^[a-zA-Z\d\-\(\)\,\.\#\%\+\s\:\&\/]+$/,
            // eslint-disable-next-line
            alphaSpace: /^[a-zA-Z\s]+$/,
            // eslint-disable-next-line
            alphaNumSpace: /^[a-zA-Z\d\s]+$/,
            gender:'^[F|M]+$',
            // eslint-disable-next-line
            phoneSpecialChars:'^[0-9\-\(\)]+$',
            phoneSpecialCharsFull:/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/,
            phoneNoSpecialChars:'^[0-9]+$',
            // eslint-disable-next-line
            dateNoFormated: '/^[a-zA-Z\d\(\)\:\-]+$/', //Fri Jan 17 2020 22:12:27 GMT-0500 (Eastern Standard Time)
            // eslint-disable-next-line
            number: /^[\d]+$/,
            numberDecimal: /^\d+(?:\.\d{0,2})?$/,
            // numberDecimalAndSymbols: /^\d+(?:\.\d{0,2})?$/,
            isMongoId:/^[a-f\d]{24}$/i,
            // eslint-disable-next-line
            tax: /^([\d]+\%)+$/,
            // eslint-disable-next-line
            address: /^[a-zA-Z\d\s\,\.\-]+$/,
            // eslint-disable-next-line
            zipcode: /^([\d]{5})+$/
        }
    }
}