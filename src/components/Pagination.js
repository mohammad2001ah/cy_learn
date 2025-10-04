import React from 'react';
import styled from 'styled-components';

function Pagination({ postsPerPage, totalPosts, paginate }) {
  // حساب عدد الصفحات
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PaginationBlock key={number}>
          <PaginationButton onClick={() => paginate(number)}>
            {number}
          </PaginationButton>
        </PaginationBlock>
      ))}
    </PaginationContainer>
  );
}

export default Pagination;

// ====== styled-components ======
const PaginationContainer = styled.ul`
  display: flex;
  position: absolute;
  bottom: 10px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PaginationBlock = styled.li`
  width: 30px;
  height: 30px;
  margin: 0 2px;
`;

const PaginationButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: #171e26;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  &:hover {
    background-color: #2c3e50;
  }

  &:focus {
    outline: 2px solid #3498db;
  }
`;
