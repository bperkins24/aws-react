/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChild = /* GraphQL */ `
  query GetChild($id: ID!) {
    getChild(id: $id) {
      id
      name
      parents
      words {
        items {
          id
          word
          date
          childID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChilds = /* GraphQL */ `
  query ListChilds(
    $filter: ModelChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChilds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        parents
        words {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChildWord = /* GraphQL */ `
  query GetChildWord($id: ID!) {
    getChildWord(id: $id) {
      id
      word
      date
      childID
      createdAt
      updatedAt
    }
  }
`;
export const listChildWords = /* GraphQL */ `
  query ListChildWords(
    $filter: ModelChildWordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChildWords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        word
        date
        childID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
