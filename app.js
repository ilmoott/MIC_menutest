const DOMStrings = {
    menu : ".navigation__checkbox",
    menu_link: ".navigation__link",
    menu_list: ".navigation__list",
    popup_close: ".popup__close",
    popup_book: ".book_close",
    popup: ".popup",
    navigation: ".navigation"
};

const jwt = document.getElementsByTagName('meta')['jwt'].content;
window.localStorage.accessToken = String(jwt);

const quotesLink = document.querySelector('.quotes');
const inventoryLink = document.querySelector('.inventory');
const signupLink = document.querySelector('.signup');

if(quotesLink){
    quotesLink.setAttribute("href", `/quotes?tok=${window.localStorage.accessToken}`);
}

if(inventoryLink){
    inventoryLink.setAttribute("href", `/inventory?tok=${window.localStorage.accessToken}`);
}

if(signupLink){
    signupLink.setAttribute("href", `/admin/signup?tok=${window.localStorage.accessToken}`);
}

document.addEventListener('click', (e)=>{

    

    if(e.target.id === 'quotes'){
        fetch('/quotes',{
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                Authorization : 'Bearer ' + window.localStorage.accessToken
            }
        })
        .then((res)=>{
            return res.text();
        })
        .then((res)=>{
            document.querySelector('.body').innerHTML = res;
    
        })
        .catch((e)=>{
            console.log(e);
        });


        
        /////////////////////////////////////////////////////////
        //TODO: migrate quotes-app code to here
        if(e.target.id === 'houseCleaning'){
            console.log('Acertouuuu');
            //1.render html

            //2. Create and manage state

            //3. 
        } else if(e.target.id === 'carWash'){
            console.log('Acertouuuu +1');
        } else if(e.target.id === 'carpetCleaning'){
            console.log('Acertouuuu +2');
        }


    }
    
    if(e.target.className === 'logout'){
        window.localStorage.accessToken = ''; //deleting the access token
    }

  
    
});


const menu = document.querySelector(DOMStrings.menu);
const menu_link = document.querySelectorAll(DOMStrings.menu_link);
const menu_list = document.querySelectorAll(DOMStrings.menu_list);
const popup = document.querySelector(DOMStrings.popup);

popup.addEventListener('click',function(e){
    if (e.target = popup){
        popup.style.visibility = 'hidden';
        popup.style.opacity = 0;
    }
});


//Menu event listeners for closing it
document.querySelector(DOMStrings.menu_list).addEventListener('click',(e)=>{
    if(e.target.className === "navigation__link"){
        document.querySelector(DOMStrings.menu).click();
    }
});


document.querySelector('.logout').addEventListener('click', (e)=>{
    //TODO:
    //1. make a request to remove the jwt and logout
    
})


// document.querySelector('#login__btn').addEventListener('click', (e)=>{
//     fetch('/admin/login',{
//         method: 'POST',
//         headers: {
//             "content-type": 'text/html'
//         }
//     }).then(res => res.json()).then(()=>{
//         window.localStorage.accessToken = res.body.access_token;
//     });
// });

