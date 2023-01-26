import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: flex-end;
  justify-content: space-between;
  padding: 0px 3.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;

  padding-top: 30vh;
`;

export const Image = styled.img`
  height: 300px;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: #F2F2F2;
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: justify;
  margin-bottom: 1.5rem;
  max-width: 500px;

  color: #F2F2F2;
`;
