import { gql } from '@apollo/client';

export const BLOGS_QUERY = gql`
  {
    blogs{
      title
      id
      content
      date
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

export const GET_BLOG = gql`
  mutation GetBlog($id: String!) {
    getBlog(id: $id) {
      title
      content
      date
      id
    }
  }
`;