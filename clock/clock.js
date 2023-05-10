var username= prompt("Adınızı Giriniz: ","Adınız")
let veriusername=document.querySelector("#myName")
veriusername.innerHTML=username



time=()=>{
    let dateData = new Date()
    let hours = dateData.getHours()
    let minutes=dateData.getMinutes()
    let seconds=dateData.getSeconds()
    
    let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
    let dayName = days[dateData.getDay()]
    
    let info =document.querySelector("#myClock")
    info.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`
    
    }
    setInterval(time,1000);


    