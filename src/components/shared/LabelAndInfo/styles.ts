import styled from "styled-components";

export const LabelAndInfo = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  padding: 0.5rem;

  color: ${({ theme }) => theme.colors.text};
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const Info = styled.span``;
