export default function Sugestoes() {

  const sugestoesObj = [
    { src: "assets/bad.vibes.memes.svg", alt: "bad.vibes.memes", nome: "bad.vibes.memes", razao: "Segue você" },
    { src: "assets/chibirdart.svg", alt: "chibirdart", nome: "chibirdart", razao: "Segue você" },
    { src: "assets/razoesparaacreditar.svg", alt: "razoesparaacreditar", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
    { src: "assets/adorable_animals.svg", alt: "adorable_animals", nome: "adorable_animals", razao: "Segue você" },
    { src: "assets/smallcutecats.svg", alt: "smallcutecats", nome: "smallcutecats", razao: "Segue você" }
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoesObj.map((elemento, index) => <Sugestao src={elemento.src} alt={elemento.alt} nome={elemento.nome} razao={elemento.razao} key={index} />)}

    </div>
  )
}

function Sugestao({src, alt, nome, razao}) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={src} alt={alt} />
        <div className="texto">
          <div className="nome">{nome}</div>
          <div className="razao">{razao}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  )
}