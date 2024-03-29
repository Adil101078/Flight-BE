/*
* Javascript to show and hide cookie banner using localstroage
*/

/**
 * Shows the Cookie banner 
 */
function showCookieBanner(){
    let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
    cookieBanner.style.display = "block";
}

/**
 * Hides the Cookie banner and saves the value to localstorage
 */
function hideCookieBanner() {
   
    window.sessionStorage.setItem("web_dev_isCookieAccepted_cfs", "yes");

    let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
    cookieBanner.style.display = "none";
}

/**
 * Checks the localstorage and shows Cookie banner based on it.
 */
function initializeCookieBanner() {
    // debugger;
    let isCookieAccepted = window.sessionStorage.getItem("web_dev_isCookieAccepted_cfs");
    if(isCookieAccepted === null)
    {
        window.sessionStorage.clear();
        window.sessionStorage.setItem("web_dev_isCookieAccepted_cfs", "no");
        showCookieBanner();
    }
    if(isCookieAccepted === "no"){
        showCookieBanner();
    }
    else if (isCookieAccepted === "yes") {
        hideCookieBanner();
    }
}

// Assigning values to window object
window.onload = initializeCookieBanner();
window.nk_hideCookieBanner = hideCookieBanner;
