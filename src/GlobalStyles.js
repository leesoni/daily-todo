import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    input{
        font-size: 15px;
        width: 200px;
        border: 0px;
        padding: 7px 10px;
        border-radius: 20px;
        :focus{
            outline: none;
        }
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        :hover {
            transform: scale(1.05);
            transition: 0.3s;
        }
    }
    button{
        cursor: pointer;
        border: 0px;
        margin-left: 10px;
        background-color: white;
        width: 20px;
        height: 20px;
        border-radius: 12.5px;
        font-size: 20px;
    }
`;