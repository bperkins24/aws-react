/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChild = /* GraphQL */ `
  subscription OnCreateChild {
    onCreateChild {
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
export const onUpdateChild = /* GraphQL */ `
  subscription OnUpdateChild {
    onUpdateChild {
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
export const onDeleteChild = /* GraphQL */ `
  subscription OnDeleteChild {
    onDeleteChild {
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
export const onCreateChildWord = /* GraphQL */ `
  subscription OnCreateChildWord {
    onCreateChildWord {
      id
      word
      date
      childID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChildWord = /* GraphQL */ `
  subscription OnUpdateChildWord {
    onUpdateChildWord {
      id
      word
      date
      childID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChildWord = /* GraphQL */ `
  subscription OnDeleteChildWord {
    onDeleteChildWord {
      id
      word
      date
      childID
      createdAt
      updatedAt
    }
  }
`;
