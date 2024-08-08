import { gql } from '@apollo/client';

// This will hold the query `GET_ME`, which will execute the `me` query set up using Apollo Server.
// This query will return the user's username, email, bookCount, and savedBooks array.
// export const QUERY_ME = gql`
//      {
//         me {
//         _id
//         username
//         email
//         bookCount
//         savedBooks {
//             bookId
//             authors
//             title
//             description
//             image
//             link
//         }
//         }
//     }
//     `;

    export const QUERY_ME = gql`
     {
        me {
        _id
        username
        email
        savedBooks {
            bookId
            authors
            title
            description
            image
            link
        }
        }
    }
    `;

    