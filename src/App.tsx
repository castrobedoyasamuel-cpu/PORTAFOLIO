import "./App.css";
import ProyectoCard from "./components/ProyectoCard";
import type { Proyecto } from "./types";

const loAprendido: string[] = [
  "Crear componentes con React",
  "Tipar props y estado con TypeScript",
  "Manejar eventos y formularios",
  "Organizar proyectos con Vite",
];

const proyectos: Proyecto[] = [
  { id: "p-1", nombre: "TALLER DE MODELADO", descripcion: "Simula una lista de atencion en la que se puede ingresar un nombre y una razon por la cual se debe atender", enlace: "https://taller-modelado-dusky.vercel.app/" },
];

function App() {
  return (
    <main className="contenedor">
      <header>
        <h1>Hola, soy Samuel Carmona Bedoya</h1>
        <p>Estudiante de programación creativa</p>
      </header>

      <section id="sobre-mi">
        <h2>Sobre mí</h2>
        <p>
          Me interesa la programación y estoy aprendiendo a construir
          sitios web con tecnologías modernas.
        </p>
      </section>

      <section id="aprendido">
        <h2>Lo que he aprendido</h2>
        <ul>
          {loAprendido.map((tema) => (
            <li key={tema}>{tema}</li>
          ))}
        </ul>
      </section>

      <section id="proyectos">
        <h2>Mis proyectos</h2>
        <div className="cards">
          {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </section>

    </main>
  );
}

export default App;
