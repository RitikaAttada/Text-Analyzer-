const input = document.getElementById('input');
const submit = document.getElementById('submit');
const wc = document.getElementById('wc');
const lc = document.getElementById('lc');
const vc = document.getElementById('vc');
const cc = document.getElementById('cc');

submit.addEventListener('click', ()=>{
    input.value = "";
    wc.innerHTML = "";
    vc.innerHTML = "";
    lc.innerHTML = "";
    cc.innerHTML = "";
    localStorage.setItem("User_Text", input.value);
});

input.addEventListener('input', ()=>{
    const words = input.value.trim().split(/\s+/);
    const word_count = words.length;
    wc.innerHTML=word_count;
    const letter_count = input.value.replace(/ /g, "").length;
    lc.innerHTML = letter_count;
    const text = input.value.replace(/ /g, "");
    var vowel_count =0;
    var con_count =0;
    for (let i=0;i<text.length;i++) {
        if (text[i].toLowerCase() === "a"||text[i].toLowerCase() ==="e"||text[i].toLowerCase() ==="i"||text[i].toLowerCase() ==="o"||text[i].toLowerCase() ==="u") {
            vowel_count++;
        }
        else {
            con_count++;
        }
    }
    vc.innerHTML = vowel_count;
    cc.innerHTML = con_count;

    localStorage.setItem("User_Text", input.value);
});

window.onload = function(){
    const saved = localStorage.getItem("User_Text")
    if (saved){
        input.value = saved;
        input.dispatchEvent(new Event('input'));
    }
    else {
        wc.innerHTML = "";
        vc.innerHTML = "";
        lc.innerHTML = "";
        cc.innerHTML = "";
    }
}
