import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title of blog article',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug of your blog article',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'titleImage',
      title: 'Title Image',
      type: 'image',
    }),
    defineField({
      name: 'smallDescription',
      title: 'Small Description',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    }),
  ],
})
