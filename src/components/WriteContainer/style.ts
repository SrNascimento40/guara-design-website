import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  min-height: 80vh;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  border: 2px solid rgba(178, 191, 249, 0.5);

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.25rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  width: 100%;
`;

export const Title = styled.h2`
  color: #434a69;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const CategorySelect = styled.input`
  margin-left: 1rem;
  margin-right: 0.5rem;
`;

export const CategoryLabel = styled.label`
  background-color: transparent;
  border: none;

  color: #434a69;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ImgUpload = styled.input`
  background-color: #333;
  margin-bottom: 1.5rem;

  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem;
  border-radius: 15px;

  cursor: pointer;
`;

export const Write = styled.textarea`
  width: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  color: #333;
  line-height: 1.5rem;
  border-radius: 15px;
  margin-bottom: 1.5rem;
  padding: 1rem;
  resize: none;
  outline: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Description = styled.h4`
  color: #434a69;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid #333;

  .editor {
    height: calc(100vh - 45px);
    border: none;
  }

  @media (max-width: 768px) {
    .editor {
      height: calc(92vh);
    }
  }
`;

export const PostButton = styled.button`
  padding: 1rem;
  margin-top: 3rem;

  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);

  cursor: pointer;
  background-color: #333;
  align-self: flex-end;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  transition: 0.3s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
    transform: scale(1.05);
  }
`;
