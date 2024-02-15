import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Inter";
        font-size: 1rem;
    }
    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Global;