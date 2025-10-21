//全体をリロードしてリセット
const btnreset=document.querySelector(".res")
btnreset.addEventListener("click",()=>{
    location.reload()
})
//名前Aを確定
const addA=document.querySelector(".addA")
const playerA=document.querySelector(".playerA")
const inputA=document.querySelector(".inputA")
addA.addEventListener("click",()=>{
    const currentA=inputA.value
    //ここで名前がないと入力前に返す
    if(currentA){
        addA.style.display="none"
        playerA.textContent=currentA
    }
})
//名前Bを確定
const addB=document.querySelector(".addB")
const playerB=document.querySelector(".playerB")
const inputB=document.querySelector(".inputB")
addB.addEventListener("click",()=>{
    const currentB=inputB.value
    //ここで名前がないと入力前に返す
    if(currentB){
        addB.style.display="none"
        playerB.textContent=currentB
    }
})
