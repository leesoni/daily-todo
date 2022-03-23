import React from "react";
import styled from "styled-components";

const Today = styled.div`
  margin-top: 50px;
  font-family: 'Gaegu', cursive;
  opacity: 0.5;
  font-size: 25px;
`;

export default () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  today = yyyy + "." + mm + "." + dd;
  return <Today>{today}</Today>;
};