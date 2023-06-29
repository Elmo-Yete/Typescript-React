export interface Props {
  firstname: string;
  lastname?: string; // * con el ? le indicas que es una propiedad opcional
  email?: string;
  isActive: boolean;
}

export default function KoderCard(props: Props) {
  return (
    <article>
      <p>
        {props.firstname} {props.lastname}
      </p>
      <p> {props.email} </p>
      <p> {props.isActive ? "activo" : "inactivo"} </p>
    </article>
  );
}
