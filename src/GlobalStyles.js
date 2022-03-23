import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    input{
        border: 0px;
        padding: 5px 10px;
        margin-top: 3px;
        border-radius: 10px;
        :focus{
            outline: none;
        }
    }
    button{
        cursor: pointer;
        border: 0px;
        margin-left: 10px;
        background-color: white;
        width: 25px;
        height: 25px;
        border-radius: 12.5px;
        font-size: 20px;
    }
`;