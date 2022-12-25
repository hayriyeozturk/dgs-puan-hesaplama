//SINAV GÜNÜ HAKKINDA
    function sinavGunu(){

        const sinavT = new Date('June 13, 2023 10:00:00').getTime();
        let suan = new Date().getTime();
        let hesapla = sinavT - suan;
            //milliseconds çevirisi:
        let saniye = 1000; 
        let dakika = saniye * 60;
        let saat = dakika * 60 ;
        let gun = saat * 24;
            //hesaplatma islemi
        let kalanGun = Math.floor(hesapla/(gun)); 
        let kalanSaat= Math.floor((hesapla % (gun)) / (saat));
        let kalanDakika= Math.floor((hesapla % (saat)) / (dakika));
        let kalanSaniye= Math.floor((hesapla % (dakika)) / (saniye));
             //yazdırma işlemi
        let g = document.querySelector("#gunler").textContent = kalanGun + " "; 
        let s = document.querySelector("#saatler").textContent = kalanSaat + " "; 
        let d = document.querySelector("#dakikalar").textContent = kalanDakika + " "; 
        let sn = document.querySelector("#saniyeler").textContent = kalanSaniye + " "; 

       
    }
    setInterval(function(){
        sinavGunu();
    }, 1000);
    
//DENEME HESAPLATMA
    //burası html etiketlerine ulaşmak için
    const form = document.querySelector("Form"); 
    const sozelD = document.querySelector("#sozelDogru");
    const sozelY = document.querySelector("#sozelYanlis");
    const sayisalD = document.querySelector("#sayisalDogru");
    const sayisalY = document.querySelector("#sayisalYanlis");
    const basariP = document.querySelector("#basariHesapla");
    const pHesapla = document.querySelector("#puanHesapla");
    const pEkle = document.querySelector("#puanEkle");
    const control = document.querySelector("#onay");
    const sozelDİnput = Number(sozelD.value.trim());
    const sozelYİnput = Number(sozelY.value.trim());
    const sayisalDİnput = Number(sayisalD.value.trim());
    const sayisalYİnput = Number(sayisalY.value.trim());
    const basaripİnput = Math.floor(Number(basariP.value.trim()));
    const basariAgirlikPuani1= (basaripİnput * 0.6);
    const basariAgirlikPuani2= (basaripİnput * 0.45);
    
    let sozell,sozel, sayisal , esitAgirlik = 0;

    
    run()
   function run(){
        form.addEventListener("submit", hesapla);
        pHesapla.addEventListener("click", yazdir);
   }

    // DGS Sözel: (Sözel net x 3) + (Sayısal Net x 0.6) + (Ön Lisans Başarı Puanı x 0.6)
    // DGS Sayısal: (Sözel Net x 0.6) + (Sayısal Net x 3) + (Ön Lisans Başarı Puanı x 0.6)
    // DGS Eşit Ağırlık: (Sözel Net x 1.8) + (Sayısal Net x 1.8) + (Ön Lisans Başarı Puanı x 0.6)

    function hesapla(e){
       //burası puan hesaplatma işlemlerini yapmak ve inputların içini okutmak için tanımlanan diğer değişkenler
   
    
        // burada soru sayısı kontrolü ve cehecked kontrolü yapıldı.
       if(!(control.checked)){
         if(sozelDİnput + sozelYİnput <= 50 && sayisalDİnput + sayisalYİnput <= 50 ){
            okulPuanliSozelHesapla(sozel);
            okulPuanliSayisalHesapla(sayisal);
            okulPuanliEsitAgirlikHesapla(esitAgirlik);
          }else{console.log("soru sayısı yanlış");}
       }else{
            okulPuansizSozelHesapla();
            okulPuansizSayisalHesapla();
            okulPuansizEsitAgirlikHesapla();
        }
        e.preventDefault();    
    }
    
    
     //burada okul puanlı hesaplatma methodlarını çağırdım.
         function okulPuanliSozelHesapla(sozell){
            const sozelDİnput = Number(sozelD.value.trim());
            const sozelYİnput = Number(sozelY.value.trim());
            const sayisalDİnput = Number(sayisalD.value.trim());
            const sayisalYİnput = Number(sayisalY.value.trim());
            const basaripİnput = Math.floor(Number(basariP.value.trim()));
            const basariAgirlikPuani1= (basaripİnput * 0.6);
            const basariAgirlikPuani2= (basaripİnput * 0.45);

            const ekPuan= 127;   
            const sozelİcinSozelAgirlikPuani = 3;
            let SsozelNet=((sozelDİnput-(sozelYİnput/4)) * sozelİcinSozelAgirlikPuani) ;
            const sozelİcinSayisalAgirlikPuani = 0.6;
            let SsayisalNet = (sayisalDİnput-(sayisalYİnput/4))* sozelİcinSayisalAgirlikPuani;
            sozell = SsozelNet + SsayisalNet + basariAgirlikPuani1 + ekPuan;
            console.log(sozell)
            return sozell;
        }
        function okulPuanliSayisalHesapla(sayisal){
            const sozelDİnput = Number(sozelD.value.trim());
            const sozelYİnput = Number(sozelY.value.trim());
            const sayisalDİnput = Number(sayisalD.value.trim());
            const sayisalYİnput = Number(sayisalY.value.trim());
            const basaripİnput = Math.floor(Number(basariP.value.trim()));
            const basariAgirlikPuani1= (basaripİnput * 0.6);
            const basariAgirlikPuani2= (basaripİnput * 0.45);

            const ekPuan=145.425;
            const sayisalİcinSozelAgirlikPuani = 0.6;
            let saSozelNet = ((sozelDİnput-(sozelYİnput/4)) * sayisalİcinSozelAgirlikPuani) ;
            const sayisalİcinSayisalAgirlikPuani= 3;
            let saSayisalNet=(sayisalDİnput-(sayisalYİnput/4))* sayisalİcinSayisalAgirlikPuani;
            sayisal=  saSozelNet + saSayisalNet + basariAgirlikPuani1 + ekPuan ;
            return sayisal;    
        }
        function okulPuanliEsitAgirlikHesapla(esitAgirlik){
            const sozelDİnput = Number(sozelD.value.trim());
            const sozelYİnput = Number(sozelY.value.trim());
            const sayisalDİnput = Number(sayisalD.value.trim());
            const sayisalYİnput = Number(sayisalY.value.trim());
            const basaripİnput = Math.floor(Number(basariP.value.trim()));
            const basariAgirlikPuani1= (basaripİnput * 0.6);
            const basariAgirlikPuani2= (basaripİnput * 0.45);

            const ekPuan=136.564;
            const eaİcinSozelAgirlikPuani = 1.8;
            let sozelNet=((sozelDİnput-(sozelYİnput/4)) * eaİcinSozelAgirlikPuani ) ;
            const eaİcinSayisalAgirlikPuani=1.8;
            let sayisalNet=(sayisalDİnput-(sayisalYİnput/4))* eaİcinSayisalAgirlikPuani;
            esitAgirlik= sozelNet + sayisalNet + basariAgirlikPuani1 + ekPuan ;
            return esitAgirlik    
        }
        //burada okul puansız hesaplatma methodlarını çağırdım.
        function  okulPuansizSozelHesapla(sozel){
            const sozelDİnput = Number(sozelD.value.trim());
            const sozelYİnput = Number(sozelY.value.trim());
            const sayisalDİnput = Number(sayisalD.value.trim());
            const sayisalYİnput = Number(sayisalY.value.trim());
            const basaripİnput = Math.floor(Number(basariP.value.trim()));
            const basariAgirlikPuani1= (basaripİnput * 0.6);
            const basariAgirlikPuani2= (basaripİnput * 0.45);

            const ekPuan= 127;   
            const sozelİcinSozelAgirlikPuani = 3;
            let SsozelNet=((sozelDİnput-(sozelYİnput/4)) * sozelİcinSozelAgirlikPuani) ;
            const sozelİcinSayisalAgirlikPuani = 0.6;
            let SsayisalNet = (sayisalDİnput-(sayisalYİnput/4))* sozelİcinSayisalAgirlikPuani;
            sozel = SsozelNet + SsayisalNet + basariAgirlikPuani2 + ekPuan ;
            return sozel;

        }
        function okulPuansizSayisalHesapla(sayisal){
            const sozelDİnput = Number(sozelD.value.trim());
            const sozelYİnput = Number(sozelY.value.trim());
            const sayisalDİnput = Number(sayisalD.value.trim());
            const sayisalYİnput = Number(sayisalY.value.trim());
            const basaripİnput = Math.floor(Number(basariP.value.trim()));
            const basariAgirlikPuani1= (basaripİnput * 0.6);
            const basariAgirlikPuani2= (basaripİnput * 0.45);

            const ekPuan=145.425;
            const sayisalİcinSozelAgirlikPuani = 0.6;
            let saSozelNet = ((sozelDİnput-(sozelYİnput/4)) * sayisalİcinSozelAgirlikPuani) ;
            const sayisalİcinSayisalAgirlikPuani= 3;
            let saSayisalNet=(sayisalDİnput-(sayisalYİnput/4))* sayisalİcinSayisalAgirlikPuani;
            sayisal=  saSozelNet + saSayisalNet + basariAgirlikPuani2 + ekPuan ;
            return sayisal; 
        }
        function okulPuansizEsitAgirlikHesapla(esitAgirlik){
            const sozelDİnput = Number(sozelD.value.trim());
            const sozelYİnput = Number(sozelY.value.trim());
            const sayisalDİnput = Number(sayisalD.value.trim());
            const sayisalYİnput = Number(sayisalY.value.trim());
            const basaripİnput = Math.floor(Number(basariP.value.trim()));
            const basariAgirlikPuani1= (basaripİnput * 0.6);
            const basariAgirlikPuani2= (basaripİnput * 0.45); 

            const ekPuan=136.564;
            const eaİcinSozelAgirlikPuani = 1.8;
            let sozelNet=((sozelDİnput-(sozelYİnput/4)) * eaİcinSozelAgirlikPuani ) ;
            const eaİcinSayisalAgirlikPuani=1.8;
            let sayisalNet=(sayisalDİnput-(sayisalYİnput/4))* eaİcinSayisalAgirlikPuani;
            esitAgirlik= sozelNet + sayisalNet + basariAgirlikPuani2 + ekPuan ;
            return esitAgirlik;   
        }   
       
    
    function yazdir(){

        if(!(control.checked)){
            
            puanliYazdir();
          
        }else{
                puansizYazidr();

        }
}
    function puanliYazdir(){
        const satir = document.createElement("tr");
        const sutun1 = document.createElement("td");
        sutun1.innerHTML = okulPuanliSozelHesapla(sozell);
        const sutun2 = document.createElement("td");
        sutun2.innerHTML=okulPuanliSayisalHesapla(sayisal);
        const sutun3 = document.createElement("td");
        sutun3.innerHTML=okulPuanliEsitAgirlikHesapla(esitAgirlik);
        const sutun4 = document.createElement("button");
        sutun4.className ="btn btn-danger btn-sm text-dark";
        sutun4.type= "button";
        sutun4.innerHTML="SİL"
        sutun4.onclick= function () {
            satir.remove();
            sutun1.remove();
            sutun2.remove();
            sutun3.remove();
        }


        satir.appendChild(sutun1);
        satir.appendChild(sutun2);
        satir.appendChild(sutun3);
        satir.appendChild(sutun4);
        pEkle.appendChild(satir);



}
    function puansizYazidr(){
        const satir = document.createElement("tr");
        const sutun1 = document.createElement("td");
        sutun1.innerHTML = okulPuansizSozelHesapla(sozel);
        const sutun2 = document.createElement("td");
        sutun2.innerHTML=okulPuansizSayisalHesapla(sayisal);
        const sutun3 = document.createElement("td");
        sutun3.innerHTML=okulPuansizEsitAgirlikHesapla(esitAgirlik);


        satir.appendChild(sutun1);
        satir.appendChild(sutun2);
        satir.appendChild(sutun3);
        pEkle.appendChild(satir);
}

