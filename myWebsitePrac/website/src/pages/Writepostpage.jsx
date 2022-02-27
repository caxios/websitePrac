import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu';
import WritePost from '../components/WritePost'

const BodyContainer = styled.div`
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
`

const Writepostpage = () => {
    return (
    <div>
        <Navbar/>
        <BodyContainer>
            <SideMenu />
            <WritePost/>
        </BodyContainer>
    </div>
    );
  };
  
  export default Writepostpage;