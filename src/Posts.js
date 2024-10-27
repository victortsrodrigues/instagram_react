import React from "react";

export default function Posts() {

  const postObj = [
    { srcUsuario: "assets/meowed.svg", usuario: "meowed", srcPost: "assets/gato-telefone.svg", altPost: "gato-telefone", curtidas: 101523 },
    { srcUsuario: "assets/barked.svg", usuario: "barked", srcPost: "assets/dog.svg", altPost: "dog", curtidas: 99159 },
    { srcUsuario: "assets/meowed.svg", usuario: "meowed", srcPost: "assets/gato-telefone.svg", altPost: "gato-telefone", curtidas: 101523 }
  ];

  return (
    <div className="posts">

      {postObj.map((elemento, index) => <Post srcUsuario={elemento.srcUsuario} usuario={elemento.usuario} srcPost={elemento.srcPost} altPost={elemento.altPost} curtidas={elemento.curtidas} key={index} />)}

    </div>
  )
}

function Post({ srcUsuario, usuario, srcPost, altPost, curtidas }) {

  const [bookmark, setBookmark] = React.useState("bookmark-outline");
  const [heart, setHeart] = React.useState("heart-outline");
  const [heartColor, setHeartColor] = React.useState("");
  const [likes, setCurtidas] = React.useState(curtidas);

  function likePost() {
    if (heart === "heart-outline") {
      setHeart("heart");
      setHeartColor("danger");
      setCurtidas(likes + 1);
    } else {
      setHeart("heart-outline");
      setHeartColor("");
      setCurtidas(likes - 1);
    }
  }

  function likePostImage() {
    if (heart === "heart-outline") {
      setHeart("heart");
      setHeartColor("danger");
      setCurtidas(likes + 1);
    }
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={srcUsuario} alt={usuario} />
          {usuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={srcPost} alt={altPost} onClick={likePostImage} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name={heart} color={heartColor} onClick={likePost}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={bookmark} onClick={() => bookmark === "bookmark-outline" ? setBookmark("bookmark") : setBookmark("bookmark-outline")}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src="assets/respondeai.svg" alt="respondeai" />
          <div className="texto">
            Curtido por <strong>respondeai</strong> e <strong>outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
