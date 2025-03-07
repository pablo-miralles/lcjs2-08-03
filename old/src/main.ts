import "./style.css";

import { generarPartida } from "./motor";
import { generarUI } from "./ui";
document.addEventListener("DOMContentLoaded", generarUI);
document.addEventListener("DOMContentLoaded", generarPartida);
