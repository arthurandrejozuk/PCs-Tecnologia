import { createClient } from "@supabase/supabase-js";
import Informacao from "app/components/Informacao";
import Components from "app/components/pagesPrototype/components";


const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const dbClient = createClient(SUPABASE_URL || "", SUPABASE_KEY || "");

interface ComponentesProps{

    data: Array<{id: number,
        nome: string,
        imagem: string,
        descricao: string,
        descricao_page: string,
        endereco: string,
        nomeComp?: string} 
    >
}

export async function getStaticPaths() {
    // pega os dados de componentes no banco de dados supabase
    const { data, error } = await dbClient.from('components').select('id');
    // confere se tem algum erro de ao chamar o banco
    if (error) {
      console.error('Error fetching data from Supabase:', error);
      // retorna uma lista vazia do array caso não seja possivel
      return { paths: [], fallback: true };
    }
  
    // para cada dado do banco 'components', é criado um parametro, que dá uma pagina, ou um caminho
    // para cada componente do banco 
    const paths = data.map((item) => ({
      params: { id: item.id.toString() },
    }));
  
    return { paths, fallback: false };
  }


function Componente({ data }:ComponentesProps) {
  
   
    return(
        <>
                {data.map((item, index) => (
                 <Components key={index} titulo={item.nome}>
                    <Informacao titulo={item.nome} imagem={item.imagem} descricao={item.descricao_page}/>
                 </Components>
                ))}
           
        </>
    )
}
export default Componente;

// ocorre em tempo de build 
export async function getStaticProps(context: { params: { id: string } }) {
    // pega o parametro da url
    const { id } = context.params;
    
    const { data } = await dbClient
      .from('components')
      //usa o id pego pela url para selecionar o componente com id do parametro
      .select().eq('id', id).single(); 
    return {
      props: {
        id,
        //caso data exista, ele coloca data em um array.
        data: data ? [data] : [],
      },
    };
  }