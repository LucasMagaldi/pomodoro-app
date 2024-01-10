import { MinutesAmountInput, NewCicleFormContainer, TaskInput } from "./style";

export function NewCicleForm() {
    return (
        <NewCicleFormContainer>
            <label>Vou trabalhar em</label>
            <TaskInput type="text" placeholder="De um nome para seu projeto"/>
            <label>durante</label>
            <MinutesAmountInput 
                type="number" 
                placeholder="00"
                min={5}
                max={60}
                step={5}
                />
        </NewCicleFormContainer>
    )
}