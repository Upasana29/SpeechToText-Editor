//to change speech to text
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults=true;
recognition.lang="en-us";

let p = document.createElement('p');
const words= document.querySelector(".words");
words.appendChild(p);


recognition.addEventListener("result",e=>{
    const transcript = Array.from(e.results)
    .map(result=>result[0])
    .map(result=>result.transcript)
    console.log(transcript)

    p.textContent=transcript
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
        
    }
   
})

recognition.addEventListener('end',recognition.start)
recognition.start();

//to add Bold,Italic and Underline options
function changeFontStyle(e){
    const text=document.querySelector('.words');
    if(e.target.id=="bold"){
        e.target.classList.toggle('active');
        text.classList.toggle("bold");

    }
    if(e.target.id=="italic"){
        e.target.classList.toggle('active');
        text.classList.toggle("italic");

    }
    if(e.target.id=="underline"){
        e.target.classList.toggle('active');
        text.classList.toggle("underline");


    }
}
const btnAction=document.querySelector('.control-btn-container');
btnAction.addEventListener('click',changeFontStyle);

//animated file folder picture
function openfolder() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf114;";
    setTimeout(function () {
        a.innerHTML = "&#xf115;";
      }, 1000);
  }
  openfolder();
  setInterval(openfolder, 2000);

  // To change text color 
var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
  }
  function updateFirst(event) {
    var p = document.querySelector("#content");
  
    if (p) {
      p.style.color = event.target.value;
    }
  }
  function updateAll(event) {
    document.querySelectorAll("#content").forEach(function(p) {
      p.style.color = event.target.value;
    });
  }
  //to change new,txt and pdf dropdown option
const newBtn = document.querySelector("#New-btn")
const txtBtn = document.querySelector("#Txt-btn")
const pdfBtn = document.querySelector("#Pdf-btn")
const content = document.querySelector("#content")
const filename = document.querySelector("#fileName_input")


newBtn.addEventListener("click", () => {
    content.innerHTML = ""
})

txtBtn.addEventListener("click", () => {
    const a = document.createElement("a")
    const blob = new Blob([content.innerText])
    const dataUrl = URL.createObjectURL(blob)
    a.href = dataUrl
    a.download = filename.value + ".txt"
    a.click()
})

pdfBtn.addEventListener('click', () => {
    html2pdf().from(content).save(filename.value)
})