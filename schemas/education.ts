import { BiBriefcase } from 'react-icons/bi';

const education = {
  name: 'education',
  title: 'Education',
  type: 'document',
  icon: BiBriefcase,
  fields: [
    {
      name: 'name',
      title: 'Collage Name',
      type: 'string',
      description: 'What is the name of the Collage?',
    },
    {
      name: 'courseName',
      title: 'Course Title',
      type: 'string',
      description: 'Enter the Course name. E.g: Software Developer',
    },
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
    },
    {
      name: 'url',
      title: 'Company Website',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'text',
      rows: 3,
      description: 'Write a brief description about this role.',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    },
  ],
};

export default education;
