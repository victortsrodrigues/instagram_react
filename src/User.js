import React from "react"

export default function User() {
  
  const [nome, setNome] = React.useState("catanacomics");
  const [imagem, setImagem] = React.useState("assets/catanacomics.svg");

  function mudaUser() {
    const novoNome = prompt("Digite o novo nome:");
    if (novoNome) {
      setNome(novoNome);
    }
  }

  function mudaImagem() {
    const novaImagem = prompt("Digite o novo link da imagem:");
    if (novaImagem) {
      setImagem(novaImagem);
    }
  }

  return (
    <div className="usuario">
      <img src={imagem} onClick={mudaImagem} alt="imagem de perfil" />
      <div className="texto">
        <span>
          <strong>{nome}</strong>
          <ion-icon name="pencil" onClick={mudaUser}></ion-icon>
        </span>
      </div>
    </div>
  )
}