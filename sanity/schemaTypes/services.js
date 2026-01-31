// sanity/schematypes/service.js

export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title (English)",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "titleAr",
      title: "Title (Arabic)",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle (English)",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "subtitleAr",
      title: "Subtitle (Arabic)",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "description",
      title: "Description (English)",
      type: "text",
      validation: Rule => Rule.required(),
    },
    {
      name: "descriptionAr",
      title: "Description (Arabic)",
      type: "text",
      validation: Rule => Rule.required(),
    },
    {
      name: "features",
      title: "Features (English)",
      type: "array",
      of: [{ type: "string" }],
      validation: Rule => Rule.required().min(1),
    },
    {
      name: "featuresAr",
      title: "Features (Arabic)",
      type: "array",
      of: [{ type: "string" }],
      validation: Rule => Rule.required().min(1),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // allows selecting focal point
      },
    },
  ],
};