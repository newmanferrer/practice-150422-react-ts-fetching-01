//* ///////////////////////////////////////////////////////////////////////////
//* Button
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
//* ===========================================================================

//* ===========================================================================
//* 3.- Reusable Components
//* ===========================================================================
//* ===========================================================================

//* ===========================================================================
//* 4.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 4.1.- ButtonStyled
//* ---------------------------------------------------------------------------
const ButtonStyled = styled.button`
  padding: 4px 8px;

  font-size: 1rem;
  color: green;
  outline: none;

  transition: all 0.3s ease-in-out;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: lightgreen;

  &:hover {
    cursor: pointer;
    color: lightgreen;
    background-color: green;
  }

  &:active {
    transform: scale(0.95);
  }
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 5.- Exported components
//* ===========================================================================
export { ButtonStyled };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
