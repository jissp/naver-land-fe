import styled from 'styled-components';

type InputProps = {
    type: string;
    borderRadius?: number; // Corrected the spelling of borderRadius
}

export const InputBox = styled.input.attrs<InputProps>(props => ({
    type: props.type
}))`
  border-radius: ${(props: InputProps) => props.borderRadius || 5}px; // Corrected the spelling of borderRadius
  display: flex;
  flex-direction: column;
  gap: 4px;
`;