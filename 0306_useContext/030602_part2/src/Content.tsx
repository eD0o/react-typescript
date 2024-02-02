import { useUser } from "./UserContext"

const Content = () => {
  const { data, loading } = useUser();

  if(loading) return <div>Loading...</div>
  if (!data) return null;

  return (
    <>
      <h2>
        Preferences
      </h2>
      <p>
        Quality: {data.preferencias.qualidade}
      </p>

      <p>
        Playback: {data.preferencias.playback}
      </p>

      <p>
        Volume: {data.preferencias.volume}
      </p>
    </>
  )
}

export default Content