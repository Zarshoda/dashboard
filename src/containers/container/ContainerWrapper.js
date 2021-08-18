import styled from "styled-components";

const ContainerWrapper = styled.div`
    display: flex;
    .sidebar{
        width: 0px;
        padding: 20px 0;
        background-color: burlywood;
        height: 100vh;
        color: white;
        position: sticky;
        top: 0;
        overflow: hidden;
        transition: 1000ms;
        flex-shrink: 0;
        &.show{
            width: 300px;
            padding: 20px;
        }
        &.light{
            box-shadow: burlywood 0 10px 30px 0;
            background-color: white;
            .MuiTypography-root, .fs-3{
                color: burlywood !important;
                font-weight: bold;
            }
            color: burlywood !important;
            h1{
                color: burlywood !important;
            }
            button{
                border: burlywood 1px solid;
            }
            button:hover{
                box-shadow: burlywood 0 10px 30px 0 !important  ;
            }
        }
        .d-flex{
            align-items: center;
            justify-content: space-between;
                h1{
                font-weight: bold;
                color: white;
                text-align: left;
                padding: 10px;
            }
            button{
                background-color: white;
                border: burlywood 1px solid;
                width: 50px;
                height: 50px;
                border-radius: 10px;
                transition: 100ms;
                color: burlywood;
            }
            button:hover{
                box-shadow: white 0 10px 30px 0;
            }
        }
    }
    .rightside{
        flex: 1;
        header{
            box-shadow: burlywood 0 5px 40px 0;
            padding: 20px;
            width: 100%;
            position: sticky;
            top: 0;
            z-index: 1000;
            background-color: white;
            img{
                width: 50px;
            }
            button{
                border: burlywood 1px solid;
                box-shadow: burlywood 0 10px 30px 0;
                border-radius: 5px;
                background-color: white;
                font-size: 20px;
                margin-right: 10px;
            }
        }
        .content{
            padding: 20px;
        }
    }
`;

export default ContainerWrapper;