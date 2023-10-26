import Components from "app/components/pagesPrototype/components";

export default function Page404(){
    return(
        <Components children={
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                Pagina não encontrada 404
            </div>
        } titulo="404"/>
    )
}