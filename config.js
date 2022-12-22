let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";                    // url location of the server. instead of linking each script in each html doc with this link, we link those scripts to this config.js doc
let apiKey = checkApiKey();                                                        // we create a global var here that we can ref in all other files

function checkApiKey() {                                                           // sends the user to another page if their api key is not entered
    if (!localStorage.getItem("apiKey")) {                                         // checks if the API key to access the API is correct. if the key is valid, the call (to the server?) is accepted
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}

// API key: a key used to commun with the api. if key is valid, api will accept the call, if not, it will reject it.
// API key is contactable i.e. the email address that was used to register student at ITV. so when user make calls to the contactable api, they will need to input their email address as their api key
// every time user makes a call to the api, ITV LMS will check wheth the stud's email is registered in their database

// so essentially when you run the app for the first time and input the api key, the checkApiKey() func checks if the API key has been set, 
// and if not, then it redirects the user to the html doc "enter-api-key.html", where the user must insert their ITV registered email address in the form
// once you input your API key, the api key will be stored on your local device, which will be used whenever you need to make an API call