/**
 * 
 * 
 */
const acilisDizisi="Sayı tahmin oyununa hoş geldiniz!";
var sonucParagrafi;
var tutulanDeger=0;
var tahminAltSiniri=1;
var tahminÜstSiniri=20;
var tahminSayisi;


 function sayfaYukle()
 {
	sonucParagrafi=document.getElementById("p-1");
	sonucParagrafi.innerHTML=acilisDizisi;

	document.getElementById("input-3").disabled=true;
	document.getElementById("button-1").disabled=true;
	
	document.getElementById("input-1").setAttribute("min", tahminAltSiniri); //Alt sınır
	document.getElementById("input-1").setAttribute("max", tahminAltSiniri);
	document.getElementById("input-2").setAttribute("min", tahminAltSiniri); //Üst sınır
	document.getElementById("input-2").setAttribute("max", tahminAltSiniri);
	document.getElementById("input-3").setAttribute("min", tahminAltSiniri); //Tahmin
	document.getElementById("input-3").setAttribute("max", tahminAltSiniri);
	//alert ("sayfayukle basarıyla tamamlandı");
 }
 
 function yeniSayiTut()
 {
	var min= +document.getElementById("input-1").value;
	var max= +document.getElementById("input-2").value;
	
	if(min<max)
	{
		var deger=rastgeleSayi(min,max);
		var tahminGiris=document.getElementById("input-3");
		tahminGiris.setAttribute("min",min);
		tahminGiris.setAttribute("max",max);
		tahminGiris.disabled=false;
		tahminGiris.value=min;
		document.getElementById("button-1").disabled=false;
		
		//Tutulan değer denetimi
		
		tutulanDeger=deger;
		tahminSayisi=0;
		sonucParagrafi.innerHTML=min + " ile "+ max  + " aralığında bir sayı tuttum.";
		console.log(min + ", "+ max + "-->>"+ deger);
	}
	
	else
	alert("minimum değer maksimum değerden küçük olmalı!");
 }
 function rastgeleSayi(min,max)
 {
	var hamDeger,asilDeger;
	min=Math.ceil(min);
	max=Math.floor(max);
	hamDeger=Math.random();
	asilDeger=hamDeger* (max- min +1)+min;
	asilDeger=Math.floor(asilDeger);
	return asilDeger;	
 }
 function tahminEt()
 {
	var tahmin= ~~document.getElementById("input-3").value;
	if(tahmin>tutulanDeger)
		sonucParagrafi.innerHTML= ++tahminSayisi + ". tahmininiz yanlış, aşağı inin";
	else if(tahmin<tutulanDeger)
		sonucParagrafi.innerHTML= ++tahminSayisi + ". tahmininiz yanlış, yukarı çıkın";
	else
	{
		sonucParagrafi.innerHTML=  "Tebrikler! " + ++tahminSayisi + ". seferde bildinizz";
		document.getElementById("input-3").disabled=true;
		document.getElementById("button-1").disabled=true;

		
	}
	
	
 }