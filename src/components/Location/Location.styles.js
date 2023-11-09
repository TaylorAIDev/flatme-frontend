import styled from "styled-components";

const LocationWrapper = styled.div`
  .autocomplete-container {
    width: 100%;
    position: relative;

    .place-input-wrapper {
      position: relative;
      input {
        width: 100%;
        font-size: 1rem;
      }

      svg {
        position: absolute;
        right: 1rem;
        top: 0.7rem;
      }
    }

    .autocomplete-dropdown-container {
      position: absolute;
      top: 40px;
      border-left: 1px solid lightgray;
      border-right: 1px solid lightgray;
      font-size: 1rem;
      z-index: 9999;
      width: 100%;

      .suggestion-item {
        border-bottom: 1px solid lightgray;
        padding: 0.5rem;
        cursor: pointer;
        background: #fff;

        svg {
          margin: 0 10px;
        }

        &.active {
          background-color: lightgray;
        }
      }
    }
  }
`;

export default LocationWrapper;
