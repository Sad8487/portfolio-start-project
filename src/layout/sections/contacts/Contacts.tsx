import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts = () => {
  return (
    <StyledContacts>
      <TitleSection>
        <StyledForm>
          <Field placeholder="Your Name" />
          <Field placeholder="Subject" />
          <Field
            placeholder="Please provide me some information..."
            as={"textarea"}
          />
          <Button type={"submit"}>Send It</Button>
        </StyledForm>
      </TitleSection>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  background-color: #d88d8d;
  min-height: 50vh;
`;
const SectionTitle = styled.h3``;
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;
const Field = styled.input``;
