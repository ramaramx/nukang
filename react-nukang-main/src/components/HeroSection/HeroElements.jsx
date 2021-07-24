import styled from "styled-components";
import banner from "../../images/hero.png"

export const HeroContainer = styled.div`
    display:flex;
    align-items: center;
    padding: 0 30px;
    position:relative;
    height: 500px;
    z-index:1;
    /* width: 95%; */
`
export const HeroBg = styled.div`
    overflow:hidden;
    height: 100%;
    width: 100%;
    background:url(${banner}); 
    background-size: 100% 100%;
`

export const HeroContent = styled.h1`
    z-index:3;
    position:absolute;
    padding:8px 48px;
    display: flex;
    flex-direction: column;
    align-items: left;
`

export const HeroH1 = styled.h1`
    color:#fff;
    max-width:40%;
    font-size:48px;
    text-align:left;

@media screen and (max-width:768px){
    font-size:40px;
}
@media screen and (max-width:480px){
    font-size:32px;
}
`

export const HeroP = styled.p`
    margin-top:24px;
    color:#fff;
    font-size:24px;
    text-align:center;
    max-width:600px;

    @media screen and (max-width:768px){
    font-size:24px;
    }
    @media screen and (max-width:480px){
    font-size:18px;
    }
`
// export const HeroP = styled.p`
//     margin-top:24px;
//     color:#fff;
//     font-size:24px;
//     text-align:center;
//     max-width:600px;

//     @media screen and (max-width:768px){
//     font-size:24px;
//     }
//     @media screen and (max-width:480px){
//     font-size:18px;
//     }
// `

export const InputContainer = styled.div`
        display: flex;
        width: 30%;
        outline: none;
        margin-top: 15px;
`

export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    outline: none;
    border-radius:100px;
    border: 0;
    text-align: center;
`


