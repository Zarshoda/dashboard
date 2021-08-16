import styled from "styled-components";

const ContainerWrapper = styled.div`
    display: flex;
    .sidebar{
        width: 300px;
        padding: 20px;
        background-color: burlywood;
        height: 100vh;
        color: white;
        position: sticky;
        top: 0;
        h1{
            font-weight: bold;
            color: white;
            text-align: left;
            padding: 10px;
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
        }
        .content{
            padding: 20px;
        }
    }
`;

export default ContainerWrapper;