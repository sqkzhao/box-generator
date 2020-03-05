import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
    width: 120px;
    height: 120px;
    background: ${props => props.bgColor};
    display: inline-block;
    margin-right: 5px;
`
export default StyledBox