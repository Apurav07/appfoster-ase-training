let res=[];
let form=document.querySelector('form');
let cdiv=document.querySelector('#clr');
form.addEventListener('submit', event =>{event.preventDefault();
    let num = Number(document.querySelector('#num').value);
    let sp = Number(document.querySelector('#split').value);
    console.log(num)
    console.log(sp)
    if (num>0){
        if(sp>0){
             for(let i=0;i<sp;i++){
                res.push(Math.floor(num/sp));}          
            let rem=num%sp;
            for(let i=0;i<rem;i++){
                res[i]++}
            cdiv.innerHTML="";
            for(let i=0;i<res.length;i++){
                let color = "#9a5f2b"
                let colorDiv = document.createElement('div');
                colorDiv.style.backgroundColor = color;
                colorDiv.style.width = `${100 * res[i]}%`;
                colorDiv.style.height = '50px';
                colorDiv.style.margin = '5px';
                let text = document.createTextNode(`${res[i]}`);
                colorDiv.appendChild(text);
                cdiv.appendChild(colorDiv);
                }

                
            }else {
                let color = "#9a5f2b";
                let text = document.createTextNode("Error: both inputs should be greater than 0.");
                let colorDiv = document.createElement("div");
                colorDiv.style.padding='5px';
                colorDiv.style.backgroundColor = color;
                colorDiv.appendChild(text);
                cdiv.innerHTML = "";
                cdiv.appendChild(colorDiv);
            }
            }else {
                let color = "#9a5f2b";
                let text = document.createTextNode("Error: both inputs should be greater than 0.");
                let colorDiv = document.createElement("div");
                colorDiv.style.padding='5px';
                colorDiv.style.backgroundColor = color;
                colorDiv.appendChild(text);
                cdiv.innerHTML = "";
                cdiv.appendChild(colorDiv);
            }
});