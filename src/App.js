import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const GridItem = styled.div`
  display: flex;
  height: 64px;
  background:rgba(0,0,0,0.35);
`;

const Data = (id)=> ({
  name: 'Header'+id,
  img: 'aside'+id,
  body: 'body'+id,
  footer: 'footer'+id,
});
const news = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,123,123,123,123,123,12213,31241,21123,34124,124124,3412,124124].map(Data);

class App extends Component {
  render() {
    return (
      <Container>
        {news.map((data)=> (
            <GridItem key={data.name}>
              <header>{data.name}</header>
              <aside>{data.img}</aside>
              <article>{data.body}</article>
             <footer>{data.footer}</footer>
            </GridItem>)
        )}
      </Container>
    );
  }
}

export default App;
