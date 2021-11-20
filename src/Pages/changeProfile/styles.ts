import styled from "styled-components";

interface PropsType {
    marginBottom?: number
    heigth?: number
    img?: any
}

export const ChangeProfileWrapper = styled.section`
    width: 1150px;
    margin: 0 auto;
`
export const Title = styled.h1`
    padding: 55px 0 55px 37px;
    margin: 0;
    font-size: 20px;
    font-family: "Noto Sans CJK KR";
    font-weight: bold;
    border-bottom: 2px solid #707070;
`
export const ChangeSection = styled.div`
    padding: 60px 0 60px 37px;
    border-bottom: 2px solid #707070;
    display: flex;
`
export const ChangeImg = styled.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    > button {
        width: 100%;
        height: 50px;
        background-color: #4a55b5;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        font-size: 20px;
        font-weight: bold;
        margin-top: 24px;
    }
`
export const Profile = styled.div`
    width: 100%;
    height: 240px;
    border: 1px solid black;
    background-image : url(${(props: PropsType) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`
export const Inputs = styled.div`
    margin-left: 44px;
`
export const EachInput = styled.div`
    display: flex;
    margin-bottom: ${(props: PropsType) => props.marginBottom || 0}px;
    height: ${(props: PropsType) => props.heigth}px;
    > p {
        width: 60px;
        margin-right: 36px;
        margin-top: 10px;
    }
    > input {
        width: 200px;
        height: 100%;
        font-size: 16px;
        padding: 12px 0 12px 20px;
        box-sizing: border-box;
    }
    > textarea {
        width: 500px;
        height: 100%;
        font-size: 16px;
        padding: 12px 0 0 20px;
        box-sizing: border-box;
    }
    > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-left: 12px;
    }
`
export const SubmitButton = styled.button`
    margin: 60px 0 206px auto;
    width: 180px;    
    height: 60px;
    border: 1px solid #4a55b5;
    background-color: white;
    color: #4a55b5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
`