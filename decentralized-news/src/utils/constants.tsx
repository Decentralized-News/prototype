import { gql } from "@apollo/client";

export const APIURL =
    "https://api.studio.thegraph.com/query/51092/dezentralicednewsmain/version/latest";

export const DECENTNEWS__ADDRESS = "0xe2084e0e85382c52937383f7776536114051a3a0";

export const GET_APPROVED_ARTICLES = gql`
    {
        articleApproveds(first: 20, orderBy: transactionHash) {
            id
            hash
            blockNumber
            blockTimestamp
        }
    }
`;
