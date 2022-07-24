

 
var phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  
let result = {
    error:false,
    message:"Geçerli Bir Telefon Numarası Girildi",
}

function validate(phone){
    if(phone === null || phone === undefined || phone === '')
        return {error:true,message:"Lütfen Geçerli Bir İfade Giriniz" };
    if(typeof(phone) !== "number")
        return {error:true,message:"Lütfen Sadece Numara Giriniz" };
    if(phone.toString().length!==10)
        return  {error:true,message:"Lütfen 10 Haneli Telefon Numarası Giriniz" };
    return   result ;
     
}

function validatePhoneWithMasks(phone){
    return phone.toString().match(phoneRegEx) ? result : {error:true,message:"Geçersiz Telefon Numarası" };
}

  

module.exports = {validate,validatePhoneWithMasks}