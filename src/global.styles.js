import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Inter', 'Karla', sans-serif;
    box-sizing: border-box;


    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(65, 65, 65);
        // border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(32, 31, 31);
    }
}

body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px 40px;

    // Anything below 800 will get these styles
    @media screen and (max-width: 800px) {
        padding: 10px;
    }
}

a {
    text-decoration: none;
    color: black;
}

`