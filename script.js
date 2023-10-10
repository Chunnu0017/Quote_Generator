function quote_generator(){
    var quotes={
        "-Katharine Hepburn":'"Love has nothing to do with what you are expecting to get-only with what you are expecting to give-which is everything."',
        "— Henry Miller":'"The only thing we never get enough of is love; and the only thing we never give enough of is love." ',
        "— Zora Neale Hurston":'"Love makes your soul crawl out from its hiding place." '

    }
    var random_quote=Math.floor(Math.random()*quotes.length)
    document.getElementsByClassName("qoutes").innerHTML=quotes[random_quote];
}