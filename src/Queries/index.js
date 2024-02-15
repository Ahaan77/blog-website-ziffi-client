import { gql } from '@apollo/client';

export const BLOGS_QUERY = gql`
  {
    blogs{
      title
      id
      content
    }
  }  
`;

export const CREATE_BLOG = gql`
  mutation CreateBlog($title: String!, $content: String!, $date: String!) {
    createBlog(title: $title, content: $content, date: $date) {
      title
      content
      date
      id
    }
  }
`;