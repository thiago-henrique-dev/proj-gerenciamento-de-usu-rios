var name = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name-gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exmapleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin")

var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

    fields.forEach(function(field, index){
        
        if(field.name == "gender"){

            if (field.checked){
            user.gender
        }
            

        } else {

            user[field.name] = field.value;

        }

    });
console.log(user)