import Header from "../components/Header";
import Footer from "../components/Footer";
import Personagem from "../components/Personagem";
import usePersonagem from "../hooks/usePersonagem";

export default function DBZPages(){
    const {personagem, loading, error} = usePersonagem(66)

    if (loading) return <p>Carregando Personagem...</p>
    if(error) return <p>Falha ao Carregar Personagem.</p>
    return(
    <>
        <Header mostrarBusca={false} />
        <main>
            {personagem && <Personagem personagem={personagem} />}
        </main>
        <Footer />
    </>
)}