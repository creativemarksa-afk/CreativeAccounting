export default {
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title (English)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "titleAr",
      title: "Title (Arabic)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // ← change to "introduction" if you prefer
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
       list: [
  // Web & Development
  { title: "Web Development", value: "web-development" },
  { title: "Website Design & Development", value: "website-design-development" },
  { title: "UI/UX Design", value: "ui-ux-design" },
  { title: "Graphic Design", value: "graphic-design" },
  { title: "E-commerce", value: "ecommerce" },
  { title: "Modern & Responsive Websites", value: "modern-responsive-websites" },

  // Marketing & Social
  { title: "Digital Marketing", value: "digital-marketing" },
  { title: "Digital Marketing & SEO", value: "digital-marketing-seo" },
  { title: "Social Media", value: "social-media" },
  { title: "Social Media Management", value: "social-media-management" },
  { title: "Influencer Marketing", value: "influencer-marketing" },

  // Technology & Data
  { title: "Artificial Intelligence", value: "artificial-intelligence" },
  { title: "Machine Learning", value: "machine-learning" },
  { title: "Cybersecurity", value: "cybersecurity" },
  { title: "Data Analytics", value: "data-analytics" },
  { title: "SEO", value: "seo" },

  // Creative & Content
  { title: "Visual Production", value: "visual-production" },
  { title: "Creative Content", value: "creative-content" },

  // Other
  { title: "Other", value: "other" },
]

      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(), // auto-sets current date/time
      validation: (Rule) => Rule.required().error("Please add a publication date"),
    },
    {
      name: "introduction",
      title: "Introduction (English)",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "introductionAr",
      title: "Introduction (Arabic)",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sections",
      title: "Sections (English)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title (English)",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "titleAr",
              title: "Title (Arabic)",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "content",
              title: "Content (English)",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "contentAr",
              title: "Content (Arabic)",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "content",
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).warning("Add at least one section"),
    },
    {
      name: "sectionsAr",
      title: "Sections (Arabic)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "content",
              title: "Content",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "content",
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).warning("Add at least one section"),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.max(3).warning("You can add up to 3 images"),
    },
    {
      name: "conclusion",
      title: "Conclusion (English)",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "conclusionAr",
      title: "Conclusion (Arabic)",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content (English) - HTML",
      type: "text",
      description: "Full blog content in HTML format",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "contentAr",
      title: "Content (Arabic) - HTML",
      type: "text",
      description: "Full blog content in HTML format",
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "images.0",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `Category: ${subtitle}`,
        media,
      };
    },
  },
};