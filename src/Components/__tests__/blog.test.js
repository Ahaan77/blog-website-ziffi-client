import { cleanup, render, screen } from "@testing-library/react"
import Blogs from "../Blogs"
import { useQuery } from "@apollo/client"
import { BLOGS_QUERY } from "../../Queries/index"


test("getBlogs", () => {
    expect(true).toBe(true)
})