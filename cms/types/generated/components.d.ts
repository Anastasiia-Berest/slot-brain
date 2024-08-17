import type { Schema, Attribute } from '@strapi/strapi';

export interface BuilderAccordion extends Schema.Component {
  collectionName: 'components_builder_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'crown';
  };
  attributes: {
    FAQ: Attribute.Component<'builder.faq', true>;
  };
}

export interface BuilderBonuses extends Schema.Component {
  collectionName: 'components_builder_bonuses';
  info: {
    displayName: 'Bonuses';
    icon: 'crown';
  };
  attributes: {
    bonuses: Attribute.Relation<
      'builder.bonuses',
      'oneToMany',
      'api::bonuse.bonuse'
    >;
  };
}

export interface BuilderCasinos extends Schema.Component {
  collectionName: 'components_builder_casinos';
  info: {
    displayName: 'Casinos';
    icon: 'crown';
  };
  attributes: {
    casinos: Attribute.Relation<
      'builder.casinos',
      'oneToMany',
      'api::casino.casino'
    >;
  };
}

export interface BuilderCons extends Schema.Component {
  collectionName: 'components_builder_cons';
  info: {
    displayName: 'Cons';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface BuilderFaq extends Schema.Component {
  collectionName: 'components_builder_faqs';
  info: {
    displayName: 'faq';
    icon: 'crown';
    description: '';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface BuilderFeatureList extends Schema.Component {
  collectionName: 'components_builder_feature_lists';
  info: {
    displayName: 'Feature-list';
    icon: 'crown';
  };
  attributes: {
    Feature: Attribute.Component<'builder.feature', true>;
  };
}

export interface BuilderFeature extends Schema.Component {
  collectionName: 'components_builder_features';
  info: {
    displayName: 'Feature-item';
    icon: 'crown';
    description: '';
  };
  attributes: {
    img: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BuilderGallery extends Schema.Component {
  collectionName: 'components_builder_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'crown';
  };
  attributes: {
    img: Attribute.Media;
  };
}

export interface BuilderGameTable extends Schema.Component {
  collectionName: 'components_builder_game_tables';
  info: {
    displayName: 'Casino-Table';
    icon: 'crown';
    description: '';
  };
  attributes: {
    Year_launched: Attribute.String;
    Number_of_Games: Attribute.String;
    Support_Email: Attribute.String;
    Phone_Number: Attribute.String;
    Owner: Attribute.String;
  };
}

export interface BuilderLinkList extends Schema.Component {
  collectionName: 'components_builder_link_lists';
  info: {
    displayName: 'Link-list';
    icon: 'crown';
  };
  attributes: {
    Links: Attribute.Component<'builder.links', true>;
  };
}

export interface BuilderLinks extends Schema.Component {
  collectionName: 'components_builder_links';
  info: {
    displayName: 'Link-item';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required & Attribute.DefaultTo<'#'>;
    icon: Attribute.Media;
  };
}

export interface BuilderMarkdown extends Schema.Component {
  collectionName: 'components_builder_markdowns';
  info: {
    displayName: 'Markdown';
    icon: 'crown';
    description: '';
  };
  attributes: {
    content: Attribute.RichText;
    show: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface BuilderPropsAndCons extends Schema.Component {
  collectionName: 'components_builder_props_and_cons';
  info: {
    displayName: 'Props&Cons';
    icon: 'crown';
  };
  attributes: {
    Props: Attribute.Component<'builder.props', true>;
    Cons: Attribute.Component<'builder.cons', true>;
  };
}

export interface BuilderProps extends Schema.Component {
  collectionName: 'components_builder_props';
  info: {
    displayName: 'Props';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface BuilderProviders extends Schema.Component {
  collectionName: 'components_builder_providers';
  info: {
    displayName: 'Providers';
    icon: 'crown';
    description: '';
  };
  attributes: {
    casino_providers: Attribute.Relation<
      'builder.providers',
      'oneToMany',
      'api::casino-provider.casino-provider'
    >;
  };
}

export interface BuilderQuote extends Schema.Component {
  collectionName: 'components_builder_quotes';
  info: {
    displayName: 'Quote';
    icon: 'crown';
  };
  attributes: {
    title: Attribute.String;
    author: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface BuilderSoc extends Schema.Component {
  collectionName: 'components_builder_socs';
  info: {
    displayName: 'Soc';
    icon: 'crown';
    description: '';
  };
  attributes: {
    contact: Attribute.String & Attribute.Required;
    network: Attribute.Enumeration<
      ['facebook', 'twitter', 'instagram', 'youtube', 'telegram']
    >;
  };
}

export interface BuilderVideo extends Schema.Component {
  collectionName: 'components_builder_videos';
  info: {
    displayName: 'Video';
    icon: 'crown';
  };
  attributes: {
    url: Attribute.String;
    video: Attribute.Media;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
    OG: Attribute.Component<'shared.meta-social', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'builder.accordion': BuilderAccordion;
      'builder.bonuses': BuilderBonuses;
      'builder.casinos': BuilderCasinos;
      'builder.cons': BuilderCons;
      'builder.faq': BuilderFaq;
      'builder.feature-list': BuilderFeatureList;
      'builder.feature': BuilderFeature;
      'builder.gallery': BuilderGallery;
      'builder.game-table': BuilderGameTable;
      'builder.link-list': BuilderLinkList;
      'builder.links': BuilderLinks;
      'builder.markdown': BuilderMarkdown;
      'builder.props-and-cons': BuilderPropsAndCons;
      'builder.props': BuilderProps;
      'builder.providers': BuilderProviders;
      'builder.quote': BuilderQuote;
      'builder.soc': BuilderSoc;
      'builder.video': BuilderVideo;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
