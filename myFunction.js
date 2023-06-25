
      function show_pop(){
    document.getElementById('pop').classList.add('open')
}
function hide_pop(){
    document.getElementById('pop').classList.remove('open')
}
// function hide_pop(){
//     document.getElementById('pop').classList.remove('open_form')
// }
// function hide_pop(){
//     document.getElementById('pop').classList.remove('open')
// }
function run_form(){
    document.getElementById('form').classList.add('open_form')
}   
function hide_form(){
    document.getElementById('form').classList.remove('open_form')
} 


// generat captca code
let codechar =

"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#&$%*^";

const code_length = 6


let capchacod = ""

function randomecaptcha( ){
    document.getElementById(capid)
return Math.floor( Math.random() *(70 - 0 +1 ) - 0)
}



for (let i = 0;i< code_length; i++) {
    capchacod += codechar[randomecaptcha( )]  }


    capchacod.innerHTML = viwcap


    console.log(capchacod)

// let capchacod = getElementById(capcode)

    