import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-primary: #27AE60;
        --color-primary-light: #93D7AF;
        --color-primary-dark: #679357;
        --color-primary-transparent: rgba(100,180,71, 0.2);
        
        --color-secondary: #EB5757;
        
        --color-background: ${({ theme }) => theme.colors.background};
        
        --gray-100: ${({ theme }) => theme.colors.gray_100};
        --gray-50: ${({ theme }) => theme.colors.gray_50};
        --gray-20: ${({ theme }) => theme.colors.gray_20};
        --gray-0: ${({ theme }) => theme.colors.gray_0};
        
        --color-information: #155BCB;
        --color-success: #168821;
        --toastify-color-success: #27AE60; 
        --color-warning: #FFCD07;
        --toastify-color-warning: #FFCD07;
        --color-error: #E60000;  
        --toastify-color-error: #EB5757;

        
        --toastify-color-light: ${({ theme }) =>
					theme.colors.toastify_toast_background};

        --font-family: Inter, sans-serif;
       
        --color-text: #3D3D3D;
        --color-text-in-primary: #FFFFFF;
        --color-text-complement: #A3A3A2;
        --color-text-light: #C9C9C9;

        --title-1: 2.6rem;
        --title-2: 2.2rem;
        --title-3: 1.8rem;
        --title-4: 1.4rem;

        --headline: 1.6rem;
        --body-font-size: 1.4rem;
        --caption: 1.2rem;

        --radius-1: 0.5rem;
        --radius-2: 0.8rem;

        font-size: 62.5%;
    }
    

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--gray-0);
        /* border-radius: 1.6rem; */
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--color-primary-dark);
        /* border-radius: 1.6rem; */
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary);
    }
`;
