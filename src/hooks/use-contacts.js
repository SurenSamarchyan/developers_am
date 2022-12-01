import {useStaticQuery, graphql} from "gatsby";

const useContacts = () => {
    const {contacts} = useStaticQuery(
        graphql`
            query useContacts {
                contacts: datoCmsContact {
                    phone
                    mail
                    facebook
                    instagram
                    linkedin
                }
            }`
    )
    return contacts
}

export default useContacts
