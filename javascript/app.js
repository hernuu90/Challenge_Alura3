import { enviarFormulario } from "./envio.js";
import * as moduloRedirecciomientoWeb from "./redireccionamientoWeb.js";
import { validaTipoCampo } from "./validaciones.js";
import { validarTecla } from "./validacionNombre.js";

const campos = document.querySelectorAll("input");
const mensajes = document.querySelectorAll("textarea");

campos.forEach((campo) => {
    campo.addEventListener("blur", (campo) => {
        validaTipoCampo(campo.target);
    });
});

mensajes.forEach((campo) => {
    campo.addEventListener("blur", (campo) => {
        validaTipoCampo(campo.target);
    });
});

enviarFormulario();
validarTecla();


/*--raleway: 'Raleway', sans-serif;

    --background-blanco-suave: #FFFFFF;
    --background-blanco-cinc: #FAFBFD;
    --background-blanco-perla: #EAE6CA;
    --background-caqui: #E0D8B0;
    --background-celeste-suave: #EAF2FD;
    --background-plateado-suave: #F5F5F5;

    --azul-suave: #15273E;
    --box-blanco-cinc: #FAFBFD;
    --color-error: #5D0B0B;
    --color-oscuro: #282525;
    --marron-suave: #4F3D1A;
    --plateado-suave: #F5F5F5;
    --sombra-letra: #555252;
    --sombra-suave: #ACA4A4;
}*/