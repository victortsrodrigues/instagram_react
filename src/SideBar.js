import User from "./User"
import Sugestoes from "./Sugestoes"

export default function SideBar() {
  return (
    <div className="sidebar">
      <User />
      <Sugestoes />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  )
}