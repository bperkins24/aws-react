/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChild = /* GraphQL */ `
  mutation CreateChild(
    $input: CreateChildInput!
    $condition: ModelChildConditionInput
  ) {
    createChild(input: $input, condition: $condition) {
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
export const updateChild = /* GraphQL */ `
  mutation UpdateChild(
    $input: UpdateChildInput!
    $condition: ModelChildConditionInput
  ) {
    updateChild(input: $input, condition: $condition) {
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
export const deleteChild = /* GraphQL */ `
  mutation DeleteChild(
    $input: DeleteChildInput!
    $condition: ModelChildConditionInput
  ) {
    deleteChild(input: $input, condition: $condition) {
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
export const createChildWord = /* GraphQL */ `
  mutation CreateChildWord(
    $input: CreateChildWordInput!
    $condition: ModelChildWordConditionInput
  ) {
    createChildWord(input: $input, condition: $condition) {
      id
      word
      date
      childID
      createdAt
      updatedAt
    }
  }
`;
export const updateChildWord = /* GraphQL */ `
  mutation UpdateChildWord(
    $input: UpdateChildWordInput!
    $condition: ModelChildWordConditionInput
  ) {
    updateChildWord(input: $input, condition: $condition) {
      id
      word
      date
      childID
      createdAt
      updatedAt
    }
  }
`;
export const deleteChildWord = /* GraphQL */ `
  mutation DeleteChildWord(
    $input: DeleteChildWordInput!
    $condition: ModelChildWordConditionInput
  ) {
    deleteChildWord(input: $input, condition: $condition) {
      id
      word
      date
      childID
      createdAt
      updatedAt
    }
  }
`;
