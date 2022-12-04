import styled from 'styled-components';

export const Form = styled.form`
  
  display: flex;
  flex-direction: column;    
  align-items: center;
`;
export const FormLabel = styled.label `margin-bottom:15px; 
display: flex;
flex-direction: column;
margin-bottom: 8px;
`
export const FormInput = styled.input`
    padding-left: 10px;
    width: 300px;
    height: 40px;

    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    @include transitions(border-color);
    cursor: pointer;
  
    &:focus,
    &:hover {
      border-color: var(--accent-color);
      outline: transparent;
    }
`;
export const ModalSubmitBtn=styled.button `
margin: 0 auto;
background-color:white;
  
&:focus,
&:hover {
  background-color: lightgreen;
  outline: transparent;
}`
  
  
  
// left: 50%;
//   transform: translateX(-50%);
//   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
//     0px 2px 1px rgba(0, 0, 0, 0.2);
//   border-radius: 4px;