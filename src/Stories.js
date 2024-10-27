export default function Stories() {
  
  const storiesObj = [
    {imagem:"assets/9gag.svg", usuario: "9gag"},
    {imagem:"assets/meowed.svg", usuario: "meowed"},
    {imagem:"assets/barked.svg", usuario: "barked"},
    {imagem:"assets/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
    {imagem:"assets/wawawicomics.svg", usuario: "wawawicomics"},
    {imagem:"assets/respondeai.svg", usuario: "respondeai"},
    {imagem:"assets/filomoderna.svg", usuario: "filomoderna"},
    {imagem:"assets/memeriagourmet.svg", usuario: "memeriagourmet"}
  ];
  
  return (
    <div className="stories">
      {storiesObj.map((elemento, index) => <Story src={elemento.imagem} usuario={elemento.usuario} key={index}/>)}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}

function Story({src, usuario}) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={src} alt={usuario} />
      </div>
      <div className="usuario">
        {usuario}
      </div>
    </div>
  )
}