import type { Schema, Attribute } from '@strapi/strapi';

export interface DetailsDesignation extends Schema.Component {
  collectionName: 'components_details_designations';
  info: {
    displayName: 'designation';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface DetailsPersonal extends Schema.Component {
  collectionName: 'components_details_personals';
  info: {
    displayName: 'personal';
  };
  attributes: {
    birthdate: Attribute.Date & Attribute.Required;
    phoneno: Attribute.BigInteger &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: '10';
      }>;
    Address: Attribute.Text & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
  };
}

export interface DetailsSkills extends Schema.Component {
  collectionName: 'components_details_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    attachment: Attribute.Media & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface DetailsSocialmedia extends Schema.Component {
  collectionName: 'components_details_socialmedias';
  info: {
    displayName: 'socialmedia';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    socialLink: Attribute.Text & Attribute.Required;
  };
}

export interface DetailsTestimonials extends Schema.Component {
  collectionName: 'components_details_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    author: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    attachment: Attribute.Media & Attribute.Required;
    testimonialText: Attribute.Blocks & Attribute.Required;
  };
}

export interface PortfolioProject extends Schema.Component {
  collectionName: 'components_portfolio_projects';
  info: {
    displayName: 'project';
  };
  attributes: {
    projectTitle: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    attachment: Attribute.Media & Attribute.Required;
    Category: Attribute.String & Attribute.Required;
    sourceCode: Attribute.String & Attribute.Required;
    WebsiteURL: Attribute.String & Attribute.Required;
  };
}

export interface ResumeEduction extends Schema.Component {
  collectionName: 'components_resume_eductions';
  info: {
    displayName: 'eduction';
  };
  attributes: {
    degree: Attribute.String & Attribute.Required;
    institution: Attribute.String & Attribute.Required;
    graduationYear: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface ResumeExperience extends Schema.Component {
  collectionName: 'components_resume_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    designation: Attribute.String & Attribute.Required;
    duration: Attribute.String & Attribute.Required;
    company: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'details.designation': DetailsDesignation;
      'details.personal': DetailsPersonal;
      'details.skills': DetailsSkills;
      'details.socialmedia': DetailsSocialmedia;
      'details.testimonials': DetailsTestimonials;
      'portfolio.project': PortfolioProject;
      'resume.eduction': ResumeEduction;
      'resume.experience': ResumeExperience;
    }
  }
}
