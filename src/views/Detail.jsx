import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
export default function Detail() {
  const params = useParams();

  const [mascota, setMascota] = useState({});

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setMascota(data.find((it) => it.id === parseInt(params.mascotaId)));
      });
  }, [params.mascotaId]);

  return (
    <div>
      <h1 className="text-center">{mascota.nombre}</h1>
      <Image
        className="w-100"
        src={mascota.foto}
        alt={"Imagen de " + mascota.nombre}
      />
      <h2 className="text-center">{mascota.raza}</h2>
    </div>
  );
}
