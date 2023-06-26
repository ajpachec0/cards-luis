import "./App.css";
import Card from "./components/Card";

// Este componente es el que se encarga de renderizar las cards, para ello se hace uso de la funcion map, la cual recorre el array de objetos data y por cada objeto que encuentre renderiza un componente Card con los datos que se le pasan por props

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((item, index) => (
        <Card key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

// Si queres agregar mas Cards, solo haces mas objetos en el array data, con los datos que queres que se muestren en cada Card, por ejemplo:
const data = [
  {
    title: "Titulo del certificado con un nombre largo ",
    description: "Descripcion de la Card",
  },
  { title: "Titulo del certificado", description: "Descripcion de la Card" },
  { title: "Titulo del certificado", description: "Descripcion de la Card" },
  {
    title: "Titulo del certificado ",
    description: "Descripcion de la Card",
  },
  { title: "Titulo del certificado", description: "Descripcion de la Card" },
  { title: "Titulo del certificado", description: "Descripcion de la Card" },
  {
    title: "Titulo del certificado ",
    description: "Descripcion de la Card",
  },
  { title: "Titulo del certificado", description: "Descripcion de la Card" },
  { title: "Titulo del certificado", description: "Descripcion de la Card" },
  { title: "Titulo del certificado", description: "Descripcion de la Card" },
];

export default App;
