// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import youtube from "./youtube";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: "author",
      type: "document",
      title: "Author",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "picture",
          title: "Picture",
          type: "image",
        },
      ],
    },
    youtube,
    {
      name: "post",
      type: "document",
      title: "Post",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [
            {
              type: "block",
              styles: [
                { title: "Normal", value: "normal" },
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
                { title: "Quote", value: "blockquote" },
              ],
              lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Numbered", value: "number" },
              ],
              marks: {
                decorators: [
                  { title: "Strong", value: "strong" },
                  { title: "Emphasis", value: "em" },
                  { title: "Code", value: "code" },
                ],
                annotations: [
                  {
                    title: "URL",
                    name: "link",
                    type: "object",
                    fields: [
                      {
                        title: "URL",
                        name: "href",
                        type: "url",
                      },
                    ],
                  },
                ],
              },
            },
            {
              type: "code",
            },
            {
              type: "youtube",
            },
            {
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  title: "Alternative Text",
                  name: "alt",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "excerpt",
          title: "Excerpt",
          type: "string",
        },
        {
          name: "coverImage",
          title: "Cover Image",
          type: "image",
        },
        {
          name: "date",
          title: "Date",
          type: "datetime",
        },
        {
          name: "author",
          title: "Author",
          type: "reference",
          to: [{ type: "author" }],
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "title",
            maxLength: 96,
          },
        },
      ],
    },
  ]),
});
