import styled from "styled-components";

export const NewCicleFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${props => props.theme['gray-100']};
`

export const BaseInput = styled.input`
    background: transparent;
    border: 0;
    border-bottom: 2px solid ${props => props.theme['gray-500']};
    height: 2.5rem;
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;

    &:focus {
        border-color: ${props => props.theme['green-500']};
        box-shadow: none;
    }
    &::placeholder {
    color: ${props => props.theme['gray-500']};
    outline: none;
  }
`
export const TaskInput = styled(BaseInput)`
    flex: 1;
    width: 16rem;
    &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`