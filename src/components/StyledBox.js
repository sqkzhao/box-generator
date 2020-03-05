import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
    width: ${props => props.height || '120'}px;
    height: ${props => props.height || '120'}px;
    background: ${props => props.bgColor};
    display: inline-block;
    margin-right: 5px;
`
export default StyledBox