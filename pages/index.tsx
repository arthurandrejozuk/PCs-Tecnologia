import Cards from "app/components/Cards";
import Computador from "app/components/Computador";
import Components from "app/components/pagesPrototype/components";

export default function HomeScreen(){
    return(
        <>
            <Components titulo="Home">
                <Computador/>
                <Cards/>
            </Components>
        </>
    )
}   