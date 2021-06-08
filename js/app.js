let month = window.prompt("Ingrese el mes de su cumpleaños");
let day = window.prompt("Ingrese el día de su cumpleaños");
month = month.toLowerCase();

switch(month) {
    case "enero":
        if(day>=1 && day<21) {
            document.write("Su signo es CAPRICORNIO");
            document.write('<img src="/assets/capricornio.jpg">');
        }
        else if(day>=21 && day<31) {
            document.write("Su signo es ACUARIO");
            document.write('<img src="/assets/acuario.jpg">');
        }
        break;
    case "febrero":
        if(day>=19 && day<=29) {
            document.write("Su signo es PISIS");
            document.write('<img src="/assets/piscis.jpg">');
        }
        else if(day>=1 && day<19) {
            document.write("Su signo es ACUARIO");
            document.write('<img src="/assets/acuario.jpg">');
        }
        break;     
    case "marzo":
        if(day>=1 && day<=20) {
            document.write("Su signo es PISIS");
            document.write('<img src="/assets/piscis.jpg">');
        }
        else if(day>=21 && day<=31) {
            document.write("Su signo es ARIES");
            document.write('<img src="/assets/aries.jpg">');
        }
        break;
    case "abril":
        if(day>=21 && day<=30) {
            document.write("Su signo es TAURO");
            document.write('<img src="/assets/tauro.jpg">');
        }
        else if(day>=1 && day<=21) {
            document.write("Su signo es ARIES");
            document.write('<img src="/assets/aries.jpg">');
        }
        break;
    case "mayo":
        if(day>=1 && day<=20) {
            document.write("Su signo es TAURO");
            document.write('<img src="/assets/tauro.jpg">');
        }
        else if(day>=21 && day<=31) {
            document.write("Su signo es GEMINIS");
            document.write('<img src="/assets/geminis.jpg">');
        }
        break;
    case "junio":
        if(day>=22 && day<=30) {
            document.write("Su signo es CANCER");
            document.write('<img src="/assets/cancer.jpg">');
        }
        else if(day>=1 && day<=21) {
            document.write("Su signo es GEMINIS");
            document.write('<img src="/assets/geminis.jpg">');
        }
        break;
    case "julio":
        if(day>=1 && day<=22) {
            document.write("Su signo es CANCER");
            document.write('<img src="/assets/cancer.jpg">');
        }
        else if(day>=23 && day<=30) {
            document.write("Su signo es LEO");
            document.write('<img src="/assets/leo.jpg">');
        }
        break;
    case "agosto":
        if(day>=23 && day<=31) {
            document.write("Su signo es VIRGO");
            document.write('<img src="/assets/virgo.jpg">');
        }
        else if(day>=1 && day<=22) {
            document.write("Su signo es LEO");
            document.write('<img src="/assets/leo.jpg">');
        }
        break;
    case "septiempre":
        if(day>=1 && day<=22) {
            document.write("Su signo es VIRGO");
            document.write('<img src="/assets/virgo.jpg">');
        }
        else if(day>=23 && day<=30) {
            document.write("Su signo es LIBRA");
            document.write('<img src="/assets/libra.jpg">');
        }
        break;
    case "octubre":
        if(day>=23 && day<=31) {
            document.write("Su signo es ESCORPIO");
            document.write('<img src="/assets/escorpio.jpg">');
        }
        else if(day>=1 && day<=22) {
            document.write("Su signo es LIBRA");
            document.write('<img src="/assets/libra.jpg">');
        }
        break;
    case "noviembre":
        if(day>=1 && day<=22) {
            document.write("Su signo es ESCORPIO");
            document.write('<img src="/assets/escorpio.jpg">');
        }
        else if(day>=23 && day<=30) {
            document.write("Su signo es SAGITARIO");
            document.write('<img src="/assets/sagitario.jpg">');
        }
        break;
    case "diciembre":
        if(day>=22 && day<=31) {
            document.write("Su signo es CAPRICORNIO");
            document.write('<img src="/assets/capricornio.jpg">');
        }
        else if(day>=1 && day<=21) {
            document.write("Su signo es SAGITARIO");
            document.write('<img src="/assets/sagitario.jpg">');
        }
        break;

}