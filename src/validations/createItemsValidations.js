import GlobalHelper  from "../helpers/helpers";
import * as yup from 'yup';

export function CreateItemsValidations(select){
    let gbHelpers = new GlobalHelper();
    // let email = yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Enter an email valid').max(64).required('Enter an email'), 
    // let email = yup.string().matches(gbHelpers.GRegExp().email, 'Enter an email valid').max(64).required('Enter an email'),
    
    
    let name = yup.string().matches(gbHelpers.GRegExp().productName, 'Product title have some invalid characters.')
        .max(80, 'Title must be at most 80 characters').required('Enter a product title'),

    subtitle = yup.string().matches(gbHelpers.GRegExp().productName, 'Subtitle have some invalid characters.')
    .max(55, 'Subtitle must be at most 55 characters').required('Enter a subtitle'),
    
    condition = yup.string().required('Select an condition'),
    shipping_type = yup.string().required('Select a shipping method'),
    
    country = yup.string().required('Select country'),

    // country = yup.string().matches(gbHelpers.GRegExp().isMongoId, 'Select a country').required('Select a country'),
    formatItemSale = yup.string().matches(gbHelpers.GRegExp().number, 'Invalid selection.').required('Select format style is required.'),
    quantity = yup.string().matches(gbHelpers.GRegExp().number, 'Enter a valid value.').required('Quantity is required.'),
    starterPrice = yup.string().matches(gbHelpers.GRegExp().numberDecimal, 'Enter a valid value.').required('Enter a valid value.'),
    startRaffleBasket = yup.string().matches(gbHelpers.GRegExp().number, 'Invalid selection.').required('Field is required.'),
    shipping_fee = yup.string() //.matches(gbHelpers.GRegExp().numberDecimal, {message:'Enter only numbers.', excludeEmptyString:true})
    .when('shipping_type', {
        is:(val)=>{
            if (val === '4') {
                // console.log('val');
                // console.log(val);
                // console.log('val');
                return true
            }
            return false
        },
        then: yup.string().required('Enter a valid fee'),
        otherwise: yup.string().notRequired(),
    })
    // .required((field)=>{
    //     console.log('field');
    //     console.log(field);
    //     console.log('field');
    // })
    ,
    
    rangeTickets = yup.string().matches(gbHelpers.GRegExp().number, 'Select a valid range.').required('Ticket range is required.'),
    qty_credits_per_ticket = yup.string().matches(gbHelpers.GRegExp().number, 'Enter a valid value.').required('Field is required.'),
    
    upc_n = yup.string().matches(gbHelpers.GRegExp().alphaNumProdCodes, 'Enter a valid UPC number')
    .max(25, 'Number must be max 25 characters')
    .required('Enter a upc number'),
    
    serial_n = yup.string().matches(gbHelpers.GRegExp().alphaNumProdCodes, 'Enter a valid SKU number')
    .max(25, 'SKU must be max 25 characters')
    .required('Enter a sku number'),
    
    mpn_number = yup.string().matches(gbHelpers.GRegExp().alphaNumProdCodes, 'MPN number must be only numbers')
    .max(25, 'MPN must be max 25 characters')
    .required('Enter a mpn number'),
    

    // center = yup.string().required(),

    description = yup.string().matches(gbHelpers.GRegExp().productDesc, 'Sorry your description contain some invalid character.')
    .max(1500, 'Description must be at most 1,500 characters')
    .required('Description is required.');
    
    
    // percentage_start = yup.number().moreThan(64, 'Enter 65 or greater').required('Add an amount.'),
    // totalPersentage = yup.number().positive('Negative values donot allows.'),
    // phone = yup.string().required('Enter a phone number'),
    // fax = yup.string(),
    // mcn = yup.string().matches(gbHelpers.GRegExp().number, 'MC number must be only numbers').min(6, 'MC number must be between 6 to 8 characters').max(8, 'MC number must be between 6 to 8 characters').required('Enter your MC number'),
    // dotn = yup.string().matches(gbHelpers.GRegExp().number, 'DOT number must be only numbers').min(6, 'DOT number must be between 7 to 8 characters').max(8, 'DOT number must be between 7 to 8 characters').required('Enter your DOT number'),
    // currency = yup.string().required('Select a currency'),
    // tax = yup.string().matches(gbHelpers.GRegExp().tax, 'Tax following format 10%').required('Enter a tax'),
    // address = yup.string().matches(gbHelpers.GRegExp().address, 'Address must be the following format 123 Main St').required('Enter an address'),
    // state = yup.string().matches(gbHelpers.GRegExp().isMongoId, 'Select a state').required('Select a state'),
    // city = yup.string().matches(gbHelpers.GRegExp().isMongoId, 'Select a city').required('Select a city'),
    // zipcode = yup.string().matches(gbHelpers.GRegExp().zipcode, 'Enter a valid zip code').required('Enter a zip code'),
    // plan = yup.string().matches(gbHelpers.GRegExp().isMongoId, 'Select a valid plan').required('Select a plan'),
    // website = yup.string().url('Ej valid web site: https://www.mywebpage.com')
    
    
    
    
    let basic = {
        product_name:name, 
        sub_title:subtitle, 
        condition, 
        upc_n, 
        serial_n,
        mpn_number,
        country,
        quantity,
        description,
        starterPrice,
        shipping_type,
        shipping_fee
        // center,
    }
    
    let newObj = { ...basic};
    let schema = null;
    if (select === 'raffle') {
        //, address, country, state, city, zipcode
        newObj ={
           
            formatItemSale,
            sub_total:starterPrice,
            qty_credits_per_ticket,
            rangeTickets,
            startRaffleBasket,
        //    email,  
        //    catchword, 
        //    mcn, 
        //    dotn, 
        //    phone, 
        //    fax,  
        //    website, 
        //    currency, 
        //    tax, 
        //    plan 
           
        };

    }
    if (select === 'buyItNow') {
        console.log('buit nowwwww');
        console.log('buit nowwwww ...................');
        console.log('buit nowwwww');
    }
    if (select === 'auction') {
        console.log('auction');
        console.log('auction ++++++++');
        console.log('auction');
    }
    
    schema = yup.object().shape(newObj);
    return schema;
    // await schema.validate(data, { abortEarly: false });
}










export function XXSampleValidations(select){
    let gbHelpers = new GlobalHelper();
    // let email = yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Enter an email valid').max(64).required('Enter an email'), 
    let email = yup.string().matches(gbHelpers.GRegExp().email, 'Enter an email valid').max(64).required('Enter an email'), 


    name = yup.string().matches(gbHelpers.GRegExp().alphaNumSpace, 'Name can be only letters and numbers').min(1).max(100).required('Enter a business name'),
    catchword = yup.string().matches(gbHelpers.GRegExp().alphaNumSpace, 'Catch word can be only letters and numbers').min(1).max(70),
    phone = yup.string().required('Enter a phone number'),
    fax = yup.string(),
    mcn = yup.string().matches(gbHelpers.GRegExp().number, 'MC number must be only numbers').min(6, 'MC number must be between 6 to 8 characters').max(8, 'MC number must be between 6 to 8 characters').required('Enter your MC number'),
    dotn = yup.string().matches(gbHelpers.GRegExp().number, 'DOT number must be only numbers').min(6, 'DOT number must be between 7 to 8 characters').max(8, 'DOT number must be between 7 to 8 characters').required('Enter your DOT number'),
    currency = yup.string().required('Select a currency'),
    tax = yup.string().matches(gbHelpers.GRegExp().tax, 'Tax following format 10%').required('Enter a tax'),
    // address = yup.string().matches(gbHelpers.GRegExp().address, 'Address must be the following format 123 Main St').required('Enter an address'),
    // country = yup.string().matches(gbHelpers.GRegExp().isMongoId, 'Select a country').required('Select a country'),
    // state = yup.string().matches(gbHelpers.GRegExp().isMongoId, 'Select a state').required('Select a state'),
    // city = yup.string().matches(gbHelpers.GRegExp().isMongoId, 'Select a city').required('Select a city'),
    // zipcode = yup.string().matches(gbHelpers.GRegExp().zipcode, 'Enter a valid zip code').required('Enter a zip code'),
    plan = yup.string().matches(gbHelpers.GRegExp().isMongoId, 'Select a valid plan').required('Select a plan'),
    website = yup.string().url('Ej valid web site: https://www.mywebpage.com');
    
    let newObj = {};
    let schema = null;
    if (select === 'create') {
        //, address, country, state, city, zipcode
        newObj ={
           name, email,  catchword, mcn, dotn, phone, fax,  website, currency, tax, plan 
           
        };

        schema = yup.object().shape(newObj);
        return schema;
    }

    // await schema.validate(data, { abortEarly: false });
}