import React from 'react';
import styled from 'styled-components';
import Building from '../../assets/main/Building.svg';
import SamsungLogo from '../../assets/main/SamsungLogo.svg';

const Container1 = styled.div`
    width: 90%;
    flex-direction : column;
    display : flex;
    height : 350px;
    /* align-items: center; */
    left: 50%;
    top: 50%;
    margin-left : 5%;
    background: #FFFFFF;
    /* border: 1px solid #0c0d0d; */
    padding : 5px;
`

const Container2 = styled.div`
    width: 95%;
    flex-direction : row;
    align-items: center;
    display : flex;
    height : 150px;
    align-items: center;
    left: 50%;
    top: 50%;
    background: #FFFFFF;
    /* border: 1px solid #0c0d0d; */
    padding : 10px;
    margin : auto;
    margin-top : 0;
`

const Container3 = styled.div`
    width: 30%;
    flex-direction : column;
    display : flex;
    height : auto;
    align-items: center;
    left: 50%;
    top: 50%;
    background: #FFFFFF;
    border: 1px solid #e4e4e4;
    padding : 10px;
    align-items: center;
    align-content: center;
    margin: auto;
    margin-top: 0;
`

const Container4 = styled.div`
    width: 75%;
    flex-direction : row;
    justify-content: center; 
    border-radius: 10px;
    display : flex;
    height : 10px;
    left: 50%;
    top: 50%;
    background: #FFFDD9;
    /* border: 1px solid #0c0d0d; */
    padding : 10px;
    margin : auto;
    margin-top : 0;
    
`
const LogoImage1 = styled.img`
  max-width: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
  z-index: 1;
`;
const LogoImage2 = styled.img`
  max-width: 150px;
  height: auto;
  /* display: flex; */
  margin: auto;
  z-index: 2;
  position : absolute;
  margin-top : 100px;
  margin-left: -250px;

`;
const Title = styled.h3`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 47px;
  color: #070707;
  justify-content: space-evenly;
`;

const h_2 = styled.span`
font-family: 'Istok Web';
  font-style: normal;
  font-size: 15px;
  line-height: 47px;
  color: #070707;
  justify-content: space-evenly; 
  position: absolute;
  margin-left : 5px;
`;

const h_3 = styled.span`
font-family: 'Istok Web';
  font-style: normal;
  font-size: 10px;
  line-height: 47px;
  color: #070707;
  justify-content: space-evenly;  
`;

const RedSmallText = styled.span`
  font-size: 12px;
  color: red;
  font-weight: bold;
  font-family: 'Istok Web';
  align-items: center;
`;


export default function EnterpriseIntroduction() {
  return (
    <div>


    <Container1>
        <Title>
        ✈ 기업을 소개합니다
        </Title>

        <Container2>

        <Container3>
            <LogoImage1 alt="Building"src={Building}/>
            <LogoImage2 alt ="SamsungLogo" src={SamsungLogo}/>
        </Container3>
        <Container3>
        <LogoImage1 alt="Building"src={Building}/>
            <LogoImage2 alt ="SamsungLogo" src={SamsungLogo}/>
        </Container3>
        <Container3>
        <LogoImage1 alt="Building"src={Building}/>
            <LogoImage2 alt ="SamsungLogo" src={SamsungLogo}/>
        </Container3>
        
    </Container2>
    <Container2>
    <Container3>
        <h_2>삼성전자</h_2>
        
        <h_3>
            대기업
        </h_3>
        <Container4>
            <RedSmallText>
            FICS 반도체 및 관련장비
            </RedSmallText>
        </Container4>
    </Container3>
    <Container3>
        <h_2>삼성전자</h_2>
        
        <h_3>
            대기업
        </h_3>
        <Container4>
            
            <RedSmallText>
            FICS 반도체 및 관련장비
            </RedSmallText>
        </Container4>
    </Container3>
    <Container3>
        <h_2>삼성전자</h_2>
        
        <h_3>
            대기업
        </h_3>
        <Container4>
            <RedSmallText>
            FICS 반도체 및 관련장비
            </RedSmallText>
        </Container4>
    </Container3>
    </Container2>
    </Container1>

    </div>
    

  )
}
