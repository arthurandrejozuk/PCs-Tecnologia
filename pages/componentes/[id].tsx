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
    // Fetch the list of possible paths from your Supabase database or any other data source.
    const { data, error } = await dbClient.from('components').select('id');
    
    if (error) {
      console.error('Error fetching data from Supabase:', error);
      return { paths: [], fallback: true };
    }
  
    // Create an array of paths based on the data fetched.
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

export async function getStaticProps(context) {
    const { id } = context.params;
   
    const { data, error } = await dbClient
      .from('components')
      .select().eq('id', id).single(); 
      console.log(data)
    return {
      props: {
        id,
        data: data ? [data] : [],
      },
    };
  }