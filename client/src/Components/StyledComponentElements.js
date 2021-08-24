import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    margin: 20px;
`;

export const Subtitle = styled.h4`
    margin: 20px;
`;

export const Wrapper = styled.div`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    display: block;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    display: block;
`;

export const LoginButton = styled.button`
    margin: 10px;
    border-radius: 15px;
    padding: 10px;
    font-size: 1em;
`; 

export const Button = styled.button`
    float: right;
    margin: 10px;
    border-radius: 15px;
    padding: 10px;
    font-size: 1em;
`;

export const HomeSubtitle = styled.h2`
    text-align: center;
`

export const ChildInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ParentTitle = styled.h3`
    text-align: center;
`

export const ChildDiv = styled.div` 

`
export const ParentDiv = styled.div`

`

export const ParentChildDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto); 
    grid-gap: 20; 
`