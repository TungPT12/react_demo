import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@atlaskit/button';
const ButtonStyled = styled(Button)`
    margin-top: 5px;
`;
export default class SubmitButton extends Component {
    render() {
        return (
            <>
                <ButtonStyled>Submit</ButtonStyled>
            </>
        )
    }
}
