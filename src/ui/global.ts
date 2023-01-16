import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
	 primary: #05b8d1;
	 dark: #292E38;
	 
	 
   }
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #292E38;
        color: #bfc9d9;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
	#root {
	  	min-height: 100vh;
	  	display: flex;
	}

`