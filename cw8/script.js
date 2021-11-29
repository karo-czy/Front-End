// 1. TABLICA OBIEKTÓW 
// zawierająca informacje o źródle zdjęcia 
// oraz jego tytuł
const imgsInfo = [
    // pierwszy obiekt (info o zdjęciu)
    {
      // tytuł pierwszego zdjęcia
      title : "Widok 1",
      // źródło pierszego zdjęcia
      src : "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcjajs/img/1.jpg?raw=true"
    },
    // drugi obiekt
    {
      title : "Widok 2",
      src : "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcjajs/img/2.jpg?raw=true"
    },
    {
      title : "Widok 3",
      src : "https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcjajs/img/3.jpg?raw=true"
    },
  ];
  
  // 2. Funkcja zmieniająca zdjęcie na stronie 
  // wg indexu (nr)
  function changeImg(nr){
    // pobierz tag img z documentu
    const img = document.querySelector("img");
    // ustaw src dla zdjęcia z tablicy obiektów po indexie
    img.src = imgsInfo[nr].src;
    // ustaw atrybut alt --||--
    img.alt = imgsInfo[nr].title;
  }
  
  // 3. Stwórz zmienną sterującą slajdami,
  // ustaw numer domyślnego zdjęcia
  let currentSlide = 0;
  
  // wywołaj funkcję z domyślnym argumentem
  changeImg(currentSlide);
  
  // 4. funkcja zmieniająca zdjęcie
  // w zależności od direction (left / right)
  function changeCurrentSlide(direction){
    // jeśli direction jest left
    if(direction == "left"){
      // zmniejsz currenslide (wyśwetl poprzednie zdjecie)
      currentSlide--;
      // jeżeli ojąłeś tyle zdjęć, że już nie ma
      if(currentSlide == -1){
        // przeskocz do ostatniego zdjęcia
        currentSlide = 2;
      }
    // jeśli direction NIE jest left
    }else{
      // przejdź do kolejnego zdjęcia
      currentSlide++;
      // jeżeli nie ma kolejnego zdjęcia
      if(currentSlide == 3){
        // przeskocz do pierwszego
        currentSlide = 0;
      }
    }
  
    // zaktualizuj wyświetlane zdjęcie
    changeImg(currentSlide);
  }
  
  // 5. dodaj wydarzenia do strzałek (po kliknięciu ...)
    // pobierz lewą strzałkę z dokumentu 
    // (po klasie left)
    const left = document.querySelector(".left");
    // po kliknięciu wykonaj funkcję changeCurretSlide
    // z argumentem left
    left.onclick = function(){changeCurrentSlide('left')};
  
    // pobierz prawą strzałkę z dokumentu 
    // (po klasie right)
    const right = document.querySelector(".right");
    // po kliknięciu wykonaj funkcję changeCurretSlide
    // z argumentem right
    right.onclick = function(){changeCurrentSlide('right')};