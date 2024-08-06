import {gpl} from '@apollo/server';

export const GET_ME = gql`
    query me {
        me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
        }
    }
    `;