//1

let koszyk = [];        // tablica na dodane pozycje

function addToCart(productName, event) {
    if (event) event.preventDefault(); // Zapobiega przejściu do # przy kliknięciu
    koszyk.push(productName);       // dodaj do tablicy nazwe produktu
    updateCartCounter();           // zakatulizuj liczbe w koszyku 
}

function updateCartCounter() {
    const koszykCounter = document.getElementById("koszyk-counter");        // pobierz element
    if (koszykCounter) {
        koszykCounter.textContent = `Koszyk (${koszyk.length})`;                // zmien jego wartosc
    }
}


// 2




    
function biggerImg(){
    var zdj_powieksz = document.getElementById("img1i");
    if (zdj_powieksz) {
        zdj_powieksz.style.display="block";
    }
}

function resetImg() {
    var zdj_powieksz = document.getElementById("img1i");
    if (zdj_powieksz) {
        zdj_powieksz.style.display = "none";
    }
}


$(document).ready(function() {
    $("#img1i").hide(); // Ukryj obrazek przy załadowaniu strony

    $("#img1b").click(function() {
        $("#img1i").fadeIn(); // Płynne pojawienie się obrazka po kliknięciu
    });

    $("#img1i").click(function() {
        $("#img1i").fadeOut(); // Płynne znikanie obrazka po ponownym kliknięciu
    });
});


$(document).ready(function() {
    setInterval(function() {                // wykonuje kod co 3000 milisekund (czyli co 3 sekundy).
        var $active = $('#slideshow img.active');   // znajduje obrazek który ma klasę active
        var $next = $active.next('img');            // znajduje następny obraz img po obrazie o klasie active w divie o id slideshow. 

        if ($next.length === 0) {                   // sprawdza, czy został znaleziony następny obrazek jeśli nie oznacza to że jesteśmy na ostatnim obrazku więc musimy zacząć od pierwszego obrazka.
            $next = $('#slideshow img:first');
        }

        $active.removeClass('active');              // usuwa klasę active z obrazka który był aktywny
        $next.addClass('active');                   // dodaje klasę active do następnego obrazka, który będzie teraz aktywny
    }, 3000); // Zmiana co 3 sekundy
});


function updateClock() {
    try {
        var now = new Date();                           // nowy obiekt Date ktory przechowuje aktualną datę i czas
        var hours = now.getHours();                     
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();                 // pobiera godziny minuty i sekundy z obiektu Date.

        // Dodaj zero na początku, jeśli liczba ma tylko jedną cyfrę, dodaj zero na początku liczby jeśli jest ona mniejsza niż 10 np. 9 to 09
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        var timeString = hours + ":" + minutes + ":" + seconds;     // tworzy ciag znaków zawierający godzinę, minuty i sekundy, oddzielone dwukropkami

        var clockElement = document.getElementById("clock");
        if (clockElement) {
            clockElement.innerHTML = timeString;    // wstawia wartość zmiennej timeString do elementu o id clock na stronie HTML
        }
    } catch (error) {
        console.log("Błąd w funkcji updateClock:", error);
    }

    setTimeout(updateClock, 1000); // Aktualizuj co sekundę     // uruchamia funkcje updateClock co 1000 milisekund (co 1 s), aby zaktualizować zegar na bieżący czas.
}

$(document).ready(function() {                                  // uruchamia kod wewnątrz, gdy dokument HTML jest w pełni załadowany i przetworzony przez przeglądarkę
    updateClock(); // Rozpocznij aktualizację zegara po załadowaniu strony
    
    // Dodaj obsługę kliknięcia dla pozycji menu
    $(".dropdown-content a").click(function(event) {
        event.preventDefault();
        showMenuNotification($(this).text());
    });
});


// 3

// Funkcja wyświetlająca powiadomienie dla menu
function showMenuNotification(menuNumber) {
    var message = "";
    var price = "";
    
    switch(menuNumber) {
        case "1":
            message = "Kotlet schabowy + rosół";
            price = "32 zł";
            break;
        case "2":
            message = "Pierogi z mięsem + zupa pomidorowa";
            price = "28 zł";
            break;
        case "3":
            message = "Zupa pomidorowa + rosół";
            price = "18 zł";
            break;
        case "4":
            message = "Rosół + pierogi z mięsem";
            price = "28 zł";
            break;
        default:
            message = "Nieznane menu";
            price = "0 zł";
    }
    
    if (message !== "Nieznane menu") {
        alert(message + " - " + price);
    }
}




// interwal co jakis czas
// timeout raz

// javascript jezyk interpretowany
// jak ida paddingi
// boreder radius od lewego gornego rogu
// hover ze po ::
// jak linkowac styl i skrypt
// margin padding display dzialanie jakie wartosci
// inline block