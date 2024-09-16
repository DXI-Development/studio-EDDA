import styled from "styled-components";

import { COLORS } from "@consts/style";

import { tablet, mobile } from "@utils/style.util";

import { PageMainWrapper, InnerPage } from "@styles/app.style";

export const PageWrapper = styled(PageMainWrapper)`
  background-color: ${COLORS.themeColor};
  padding: 32px;
`;

export const Page = styled(InnerPage)`
  row-gap: 24px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 24px 32px;
  background-color: ${COLORS.themeDarkColor};
  border-radius: 4px;
  color: ${COLORS.white};
  word-break: keep-all;
`;

export const Title = styled.div`
  display: flex;
  column-gap: 16px;
  font-size: 2rem;
  font-weight: 700;

  ${tablet`{
    column-gap: 12px;
    font-size: 1.6rem;
  }`}

  ${mobile`{
    font-size: 1.2rem;  
  }`}

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    column-gap: 0;
    row-gap: 8px;
    font-size: 1rem;
  }
`;

export const TitleDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 32px;

  ${tablet`{
    margin-left: 12px;
    font-size: 1.2rem;
    line-height: 24px;
  }`}

  ${mobile`{
    margin-left: 8px;
    font-size: 0.9rem;  
  }`}

  @media screen and (max-width: 425px) {
    margin-left: 0;
    font-size: 0.8rem;
    line-height: 20px;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  background-color: ${COLORS.light};
  border-radius: 4px;

  ${mobile`{
    padding: 24px;  
  }`}

  @media screen and (max-width: 425px) {
    padding: 16px;
  }
`;

export const ContentTitle = styled.span`
  margin-bottom: 32px;
  font-size: 1.6rem;
  font-weight: 500;

  ${tablet`{
    font-size: 1.4rem;
    margin-bottom: 24px;  
  }`}

  ${mobile`{
    font-size: 1.6rem;
    margin-bottom: 16px;  
    text-align: center;
  }`}

  @media screen and (max-width: 425px) {
    font-size: 1.1rem;
  }
`;

export const RecruitList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  & > li:not(:last-child) {
    border-bottom: 2px solid ${COLORS.gray};
  }
`;
