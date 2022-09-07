export default function Index (props) {
    return (
        <>
            <h1>Seja bem vindo!</h1>
            <p>{JSON.stringify(props.epsodes)}</p>
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json()

    return {
        props: {
            epsodes: data,
        }
    }
}