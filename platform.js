
let platforms = []

export function accessPlatform(){

    let firstplatform = document.getElementById("platform")
    const rect = firstplatform.getBoundingClientRect();
    
    const data =
    {
        bottom: rect.bottom,
        height: rect.height,
        width:rect.width
    }
    console.log(data)
      return data
}
export function createPlatform (leftPosition){
const container = document.querySelector(".container");
const newplatforms = document.createElement("div");
newplatforms.classList.add("platform","platform2");
newplatforms.style.left = leftPosition + "px";
container.append(newplatforms);

    platforms.push(newplatforms)
  
    return newplatforms;

}


for(let i =1; i<5;i++){
    createPlatform(i*1000)
}