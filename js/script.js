const enlaces = [
    {
        nombre: 'Instagram',
        enlace: 'https://instagram.com/crisnuff'
    },

    {
        nombre: 'Spotify',
        enlace: 'https://open.spotify.com/user/12124534170'
    },

    {
        nombre: 'La Mirada de Alfa',
        enlace: 'https://alfa.locu.cl'
    },

    {
        nombre: 'Bad Karma',
        enlace: 'https://instagram.com/badkarmacl'
    },

    {
        nombre: 'GitHub',
        enlace: 'https://github.com/criswr'
    }
]

/* Creación divs de enlaces */
const enlace = (parametro, i) => `
    <a href="${parametro.enlace}">
        <div class="link" id="link-${i}">
            <p>${parametro.nombre}</p>
        </div>
    </a>`
;

const cajaEnlace = document.getElementById('enlaces')

enlaces.forEach(
    (parametrosEnlaces, i) => {(cajaEnlace.innerHTML += enlace(parametrosEnlaces, i))
}
)

/* Animación aparecer */
for(let i = 0; i < enlaces.length; i++){
    setTimeout(() => {

        const enlaceId = document.getElementById('link-'+ i)
        enlaceId.classList.add('flip')

    }, 500 * (i + 1))
}

/* Contador de hits */
const contador = document.getElementById("contador")
const apiContadorUpdate = "https://api.countapi.xyz/update/linktree.locu.cl/alfifufi/?amount=1"
const apiContadorGet = "https://api.countapi.xyz/get/linktree.locu.cl/alfifufi/"

const hits = (api) => {
    fetch(api)
    .then(res => res.json())
    .then(res => contador.innerText = res.value)
}

/* Código de barras */
const codigoBarras = () => {
    fetch(apiContadorGet)
    .then(res => res.json())
    .then(res => {
        JsBarcode("#barcode", res.value, {
            format: "pharmacode",
            lineColor: "#5a4a5e",
            background: "transparent",
            width: 5,
            height: 10,
            margin: 0,
            displayValue: false
            }
        )
    })
}

codigoBarras()

/* Cookie */
const crearCookie = (dias) => {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expira = "expires=" + fecha.toUTCString();
    document.cookie = expira + "; path=/; SameSite=Strict";
}

const obtenerCookie = (nombreCookie) => {
    let nombre = nombreCookie + "=";
    let cookieCortada = decodeURIComponent(document.cookie);
    let atributoCookie = cookieCortada.split(';');
    for(let i = 0; i <atributoCookie.length; i++) {
        let c = atributoCookie[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nombre) == 0) {
            return c.substring(nombre.length, c.length);
        }
    }
    return undefined;
}

if (obtenerCookie("expires") === undefined){
    hits(apiContadorUpdate)
    crearCookie(30)
}else{
    hits(apiContadorGet)
}