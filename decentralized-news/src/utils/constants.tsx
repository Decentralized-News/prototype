export const APIURL =
  'https://api.studio.thegraph.com/query/51092/decentnews3/"v0.0.4"';
  
export const DECENTNEWS__ADDRESS = "0x1B97f6aEFbB3e0FF57DeE7Fa1722f889f290F357";

export const ARTICLE_QUERY = `
      {
        articleApproveds(first: 20, orderBy: transactionHash) {
          id
          hash
          blockNumber
          blockTimestamp
        }
      }
`;