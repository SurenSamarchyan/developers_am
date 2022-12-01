import React from "react";
import useContacts from "../../hooks/use-contacts";
import styled from "styled-components";
import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/all";
import {theme} from "../../styles/theme";

const Contacts = () => {
    const contacts = useContacts();

    const {phone} = contacts;
    const {mail} = contacts;
    const {facebook} = contacts;
    const {instagram} = contacts;
    const {linkedin} = contacts;

    return (
        <ContactsList>
            {phone && <li><a href={`tel:${phone}`}>{phone}</a></li>}
            {mail && <li><a href={`mailto:${mail}`}>{mail}</a></li>}

            <li>
                <SocialLinks>
                    {facebook && <li><a href={`${facebook}`}><BsFacebook/></a></li>}
                    {linkedin && <li><a href={`${linkedin}`}><BsLinkedin/></a></li>}
                    {instagram && <li><a href={`${instagram}`}><BsInstagram/></a></li>}
                </SocialLinks>
            </li>

        </ContactsList>
    )
}

export default Contacts


const ContactsList = styled.ul`
  list-style-type: none;
  ${theme.media.md} {
    margin-left: 60px;
  }

  li {
    margin: 5px 0;
    text-align: center;

    ${theme.media.md} {
      text-align: left;
    }
  }
`

const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;

  ${theme.media.md} {
    justify-content: flex-start;
  }

  li {
    margin-right: 10px;
    font-size: 20px;
  }
`