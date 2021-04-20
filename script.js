let text = "www.thenagesh.com";
let index = 0;

autoText = () => {      
    document.querySelector(".autoText").innerHTML = text.slice(0, index);
    index++;

    if(index > text.length){
        index = 0;
    }
}

setInterval(autoText, 500);