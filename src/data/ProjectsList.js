import { Description } from "@mui/icons-material";
import Odoo from "../assets/Odoo.jpg"
import Airbnb from "../assets/Airbnb.jpg"
import CodeIgniter from "../assets/CodeIgniter.png"
import C from "../assets/Cimg.jpg"
import Mongo from "../assets/Mongo.png"
import Spring from "../assets/Spring.webp"

export const proyectos = [
{
    id:1,
    nombre:"Odoo Sales Channel Module",
    descripcion: "Módulo de Odoo centrado en la gestión de canales de venta.",
    framework: "Odoo",
    tecnologias:["Doodba","Linux","Docker","Python"],
    link:"https://github.com/alfredban/OdooModuleSaleChannel",
    imagen: Odoo
},

{
    id:2,
    nombre:"Airbnb MVP – Backend",
    descripcion: "Backend de un MVP estilo Airbnb desarrollado en Java para la materia Proyecto de Software. Implementa la lógica de negocio, gestión de usuarios y propiedades.",
    tecnologias:["Java", "Spring Boot","Maven","MySQL"],
    link:"https://github.com/alfredban/ProyectoDeSW-Airbnb-E6-Back",
    imagen: Airbnb
},

{
    id:3,
    nombre:"Airbnb MVP – Frontend",
    descripcion: "Frontend de un MVP estilo Airbnb.",
    tecnologias:["JavaScript","HTML","React","CSS"],
    link:"https://github.com/alfredban/ProyectoDeSW-Airbnb-E6-Front",
    imagen: Airbnb
},

{
    id:4,
    nombre:"Ticket Fast",
    descripcion: "Página web de venta de tickets para shows. Implementa lógica de negocio y gestión de usuarios. Proyecto desarrollado íntegramente por mí.",
    tecnologias:["PHP", "CodeIgniter","CSS","HTML","MySQL","WAMP"],
    link:"https://github.com/alfredban/Ticket-Fast",
    imagen: CodeIgniter
},

{
    id:5,
    nombre:"Algoritmo de simulación – SIU Guaraní",
    descripcion: "Algoritmo desarrollado como trabajo final para la materia Algoritmos y Estructuras de Datos.",
    tecnologias:["C"],
    link:"https://github.com/alfredban/Trabajo-practico-final-AYED",
    imagen: C
},

{
    id:6,
    nombre:"Base de datos MongoDB",
    descripcion: "Implementación de MongoDB para el almacenamiento de datos a partir de archivos JSON generados desde Java.",
    tecnologias:["MongoDB", "Java"],
    link:"https://github.com/alfredban/TP_BD",
    imagen: Mongo
},

{
    id:7,
    nombre:"Página web de compra de accesorios",
    descripcion: "Tienda digital para la compra de accesorios. Implementa lógica de negocio y gestión de usuarios. Proyecto académico grupal.",
    tecnologias:["Spring Boot", "Java","HTML","Maven"],
    link:"https://github.com/alfredban/grupo-9-OO2-2024",
    imagen: Spring
},

{
    id:8,
    nombre:"Odoo Real Estate Module",
    descripcion: "Módulo de Odoo centrado en la gestión de propiedades.",
    tecnologias:["Doodba","Linux","Docker","Python"],
    link:"https://github.com/alfredban/odoomoduleRealEstateG1",
    imagen: Odoo
}
]
