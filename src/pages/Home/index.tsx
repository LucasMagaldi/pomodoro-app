import { NewCicleForm } from "./NewCicleForm";
import { HomeContainer } from "./style";

export function Home() {
    return (
        <HomeContainer>
            <form>
                <NewCicleForm />
            </form>
        </HomeContainer>
    )
}