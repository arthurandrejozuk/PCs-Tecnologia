import cards from '../../public/json/card.json';
import Components from 'app/components/pagesPrototype/components';
import Informacao from 'app/components/Informacao';

export const getStaticPaths = (async () => {
    const paths = cards.map(componente => {
        return {params: {id:`${componente.id}`}}
    })
    return{
        paths: paths,
        fallback: false,
    }
})

export async function getStaticProps(context) {
    const id = context.params.id !== undefined ? context.params.id : null;
    const componente = cards.find((atual) => {
        if(atual.id === id){
            return true
        }
        return false
    })
    return{
        props:{
            id: componente?.id,
            name: componente?.nome,
            image: componente?.imagem,
            description: componente?.descricao,
            adress: componente?.endereco
        }
    }
}

export default function componente(props){
    return(
        <Components 
        titulo={props.name}
        children={
            <Informacao 
                imagem={props.image}
                titulo={props.name} 
                descricao={props.description}
            />
        }
    />
    )
}