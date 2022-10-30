import styled from "styled-components";

const H2 = styled.h2`
    ${
        props => {
            switch(props.classes){
                case 'overview-h2':
                    return{
                        maxWidth: '60%',
                        margin: 'auto', 
                        marginBottom: '10px'
                    }

                default: {}
            }
        }
    }
`;

export default H2;