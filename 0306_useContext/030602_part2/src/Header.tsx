import { useUser } from "./UserContext"

const Header = () => {

  const {data} = useUser();

  console.log(data);
  

  if(!data) return null

  return (
    <header><h1>{data.nome}</h1></header>
  )
}

export default Header