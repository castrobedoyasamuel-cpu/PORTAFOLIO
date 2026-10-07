import type { Proyecto } from "../types";

type ProyectoCardProps = {
  proyecto: Proyecto;
};

function ProyectoCard({ proyecto }: ProyectoCardProps) {
  return (
    <article className="card">
      <h3>{proyecto.nombre}</h3>
      <p>{proyecto.descripcion}</p>
      <p>
        <a href={proyecto.enlace} target="_blank" rel="noreferrer">
          Ver proyecto
        </a>
      </p>
    </article>
  );
}

export default ProyectoCard;
