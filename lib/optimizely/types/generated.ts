/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { DocumentNode, ExecutionResult } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: unknown; output: unknown; }
  Date: { input: unknown; output: unknown; }
  DateTime: { input: unknown; output: unknown; }
  JSON: { input: unknown; output: unknown; }
};

export type AccordionBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'AccordionBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  items: Maybe<Array<Maybe<_IContent>>>;
};


export type AccordionBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AccordionBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type AccordionBlockAutocomplete = {
  __typename?: 'AccordionBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  items: Maybe<_IContentAutocomplete>;
};

export type AccordionBlockFacet = {
  __typename?: 'AccordionBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  items: Maybe<_IContentFacet>;
};

export type AccordionBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  items: InputMaybe<_IContentOrderByInput>;
};

export type AccordionBlockOutput = {
  __typename?: 'AccordionBlockOutput';
  autocomplete: Maybe<AccordionBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<AccordionBlockFacet>;
  item: Maybe<AccordionBlock>;
  items: Maybe<Array<Maybe<AccordionBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type AccordionBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccordionBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<AccordionBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<AccordionBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<AccordionBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  items: InputMaybe<_IContentWhereInput>;
};

export type AccordionItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'AccordionItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  content: Maybe<RichText>;
  title: Maybe<Scalars['String']['output']>;
};


export type AccordionItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AccordionItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type AccordionItemBlockAutocomplete = {
  __typename?: 'AccordionItemBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  content: Maybe<RichTextAutocomplete>;
};

export type AccordionItemBlockFacet = {
  __typename?: 'AccordionItemBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  content: Maybe<RichTextFacet>;
};

export type AccordionItemBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  content: InputMaybe<RichTextOrderByInput>;
};

export type AccordionItemBlockOutput = {
  __typename?: 'AccordionItemBlockOutput';
  autocomplete: Maybe<AccordionItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<AccordionItemBlockFacet>;
  item: Maybe<AccordionItemBlock>;
  items: Maybe<Array<Maybe<AccordionItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type AccordionItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccordionItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<AccordionItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<AccordionItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<AccordionItemBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  content: InputMaybe<RichTextWhereInput>;
};

export type ArticleExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'ArticleExperience';
  Author: Maybe<Scalars['String']['output']>;
  PublishDate: Maybe<Scalars['DateTime']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
  seoProperties: Maybe<SeoBlockProperty>;
};


export type ArticleExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ArticleExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ArticleExperienceAutocomplete = {
  __typename?: 'ArticleExperienceAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
  seoProperties: Maybe<SeoBlockPropertyAutocomplete>;
};

export type ArticleExperienceFacet = {
  __typename?: 'ArticleExperienceFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
  seoProperties: Maybe<SeoBlockPropertyFacet>;
};

export type ArticleExperienceOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
  seoProperties: InputMaybe<SeoBlockPropertyOrderByInput>;
};

export type ArticleExperienceOutput = {
  __typename?: 'ArticleExperienceOutput';
  autocomplete: Maybe<ArticleExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ArticleExperienceFacet>;
  item: Maybe<ArticleExperience>;
  items: Maybe<Array<Maybe<ArticleExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ArticleExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ArticleExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ArticleExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ArticleExperienceWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
  seoProperties: InputMaybe<SeoBlockPropertyWhereInput>;
};

export type ArticleLandingPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'ArticleLandingPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  numberOfItemsPerPage: Maybe<Scalars['Int']['output']>;
  seoProperties: Maybe<SeoBlockProperty>;
  title: Maybe<Scalars['String']['output']>;
};


export type ArticleLandingPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ArticleLandingPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ArticleLandingPageAutocomplete = {
  __typename?: 'ArticleLandingPageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  seoProperties: Maybe<SeoBlockPropertyAutocomplete>;
};

export type ArticleLandingPageFacet = {
  __typename?: 'ArticleLandingPageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  seoProperties: Maybe<SeoBlockPropertyFacet>;
};

export type ArticleLandingPageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  seoProperties: InputMaybe<SeoBlockPropertyOrderByInput>;
};

export type ArticleLandingPageOutput = {
  __typename?: 'ArticleLandingPageOutput';
  autocomplete: Maybe<ArticleLandingPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ArticleLandingPageFacet>;
  item: Maybe<ArticleLandingPage>;
  items: Maybe<Array<Maybe<ArticleLandingPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ArticleLandingPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleLandingPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ArticleLandingPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ArticleLandingPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ArticleLandingPageWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  seoProperties: InputMaybe<SeoBlockPropertyWhereInput>;
};

export type ArticlePage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'ArticlePage';
  Author: Maybe<Scalars['String']['output']>;
  Body: Maybe<RichText>;
  PublishDate: Maybe<Scalars['DateTime']['output']>;
  RelatedArticles: Maybe<ContentReference>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  seoProperties: Maybe<SeoBlockProperty>;
};


export type ArticlePage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ArticlePage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ArticlePageAutocomplete = {
  __typename?: 'ArticlePageAutocomplete';
  Body: Maybe<RichTextAutocomplete>;
  RelatedArticles: Maybe<ContentReferenceAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
  seoProperties: Maybe<SeoBlockPropertyAutocomplete>;
};

export type ArticlePageFacet = {
  __typename?: 'ArticlePageFacet';
  Body: Maybe<RichTextFacet>;
  RelatedArticles: Maybe<ContentReferenceFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
  seoProperties: Maybe<SeoBlockPropertyFacet>;
};

export type ArticlePageOrderByInput = {
  Body: InputMaybe<RichTextOrderByInput>;
  RelatedArticles: InputMaybe<ContentReferenceOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
  seoProperties: InputMaybe<SeoBlockPropertyOrderByInput>;
};

export type ArticlePageOutput = {
  __typename?: 'ArticlePageOutput';
  autocomplete: Maybe<ArticlePageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ArticlePageFacet>;
  item: Maybe<ArticlePage>;
  items: Maybe<Array<Maybe<ArticlePage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ArticlePageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticlePageWhereInput = {
  Body: InputMaybe<RichTextWhereInput>;
  RelatedArticles: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  blocks: InputMaybe<_IContentWhereInput>;
  seoProperties: InputMaybe<SeoBlockPropertyWhereInput>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'BlankExperience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
  heading: Maybe<Scalars['String']['output']>;
  seoProperties: Maybe<SeoBlockProperty>;
};


export type BlankExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
  seoProperties: Maybe<SeoBlockPropertyAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
  seoProperties: Maybe<SeoBlockPropertyFacet>;
};

export type BlankExperienceOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
  seoProperties: InputMaybe<SeoBlockPropertyOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete: Maybe<BlankExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankExperienceFacet>;
  item: Maybe<BlankExperience>;
  items: Maybe<Array<Maybe<BlankExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
  seoProperties: InputMaybe<SeoBlockPropertyWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete: Maybe<BlankSectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankSectionFacet>;
  item: Maybe<BlankSection>;
  items: Maybe<Array<Maybe<BlankSection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type ButtonBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ButtonBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  buttonLink: Maybe<ContentUrl>;
  buttonSize: Maybe<Scalars['String']['output']>;
  buttonVariant: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ButtonBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ButtonBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  buttonLink: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  buttonLink: Maybe<ContentUrlFacet>;
};

export type ButtonBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  buttonLink: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete: Maybe<ButtonBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ButtonBlockFacet>;
  item: Maybe<ButtonBlock>;
  items: Maybe<Array<Maybe<ButtonBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ButtonBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  buttonLink: InputMaybe<ContentUrlWhereInput>;
};

export type CmsPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'CMSPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  seoProperties: Maybe<SeoBlockProperty>;
  title: Maybe<Scalars['String']['output']>;
};


export type CmsPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CmsPageAutocomplete = {
  __typename?: 'CMSPageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
  seoProperties: Maybe<SeoBlockPropertyAutocomplete>;
};

export type CmsPageFacet = {
  __typename?: 'CMSPageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
  seoProperties: Maybe<SeoBlockPropertyFacet>;
};

export type CmsPageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
  seoProperties: InputMaybe<SeoBlockPropertyOrderByInput>;
};

export type CmsPageOutput = {
  __typename?: 'CMSPageOutput';
  autocomplete: Maybe<CmsPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CmsPageFacet>;
  item: Maybe<CmsPage>;
  items: Maybe<Array<Maybe<CmsPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CmsPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CmsPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  blocks: InputMaybe<_IContentWhereInput>;
  seoProperties: InputMaybe<SeoBlockPropertyWhereInput>;
};

export type CarouselBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'CarouselBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  slides: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type CarouselBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CarouselBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CarouselBlockAutocomplete = {
  __typename?: 'CarouselBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  slides: Maybe<_IContentAutocomplete>;
};

export type CarouselBlockFacet = {
  __typename?: 'CarouselBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  slides: Maybe<_IContentFacet>;
};

export type CarouselBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  slides: InputMaybe<_IContentOrderByInput>;
};

export type CarouselBlockOutput = {
  __typename?: 'CarouselBlockOutput';
  autocomplete: Maybe<CarouselBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CarouselBlockFacet>;
  item: Maybe<CarouselBlock>;
  items: Maybe<Array<Maybe<CarouselBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CarouselBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarouselBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  slides: InputMaybe<_IContentWhereInput>;
};

export type CarouselItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'CarouselItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  buttonLink: Maybe<ContentUrl>;
  buttonLinkText: Maybe<Scalars['String']['output']>;
  image: Maybe<ContentReference>;
  imageAltText: Maybe<Scalars['String']['output']>;
  subTitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type CarouselItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CarouselItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CarouselItemBlockAutocomplete = {
  __typename?: 'CarouselItemBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  buttonLink: Maybe<ContentUrlAutocomplete>;
  image: Maybe<ContentReferenceAutocomplete>;
};

export type CarouselItemBlockFacet = {
  __typename?: 'CarouselItemBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  buttonLink: Maybe<ContentUrlFacet>;
  image: Maybe<ContentReferenceFacet>;
};

export type CarouselItemBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  buttonLink: InputMaybe<ContentUrlOrderByInput>;
  image: InputMaybe<ContentReferenceOrderByInput>;
};

export type CarouselItemBlockOutput = {
  __typename?: 'CarouselItemBlockOutput';
  autocomplete: Maybe<CarouselItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CarouselItemBlockFacet>;
  item: Maybe<CarouselItemBlock>;
  items: Maybe<Array<Maybe<CarouselItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CarouselItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarouselItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<CarouselItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CarouselItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CarouselItemBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  buttonLink: InputMaybe<ContentUrlWhereInput>;
  image: InputMaybe<ContentReferenceWhereInput>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  value: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetValueArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key: InputMaybe<OrderBy>;
  value: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key: InputMaybe<StringFilterInput>;
  value: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes: Maybe<ICompositionNodeAutocomplete>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  component: Maybe<_IComponentFacet>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  layoutType: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  nodes: Maybe<ICompositionNodeFacet>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetLayoutTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  component: InputMaybe<_IComponentOrderByInput>;
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  layoutType: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  nodes: InputMaybe<ICompositionNodeOrderByInput>;
  type: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  component: InputMaybe<_IComponentWhereInput>;
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  layoutType: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  nodes: InputMaybe<ICompositionNodeWhereInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ContactBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ContactBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type ContactBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContactBlockAutocomplete = {
  __typename?: 'ContactBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContactBlockFacet = {
  __typename?: 'ContactBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContactBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContactBlockOutput = {
  __typename?: 'ContactBlockOutput';
  autocomplete: Maybe<ContactBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContactBlockFacet>;
  item: Maybe<ContactBlock>;
  items: Maybe<Array<Maybe<ContactBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContactBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  /**
   * `reference`
   * |          |        |      |
   * | -------: | ------ | :--- |
   * | **type** | &nbsp; | `Data` |
   * | **id**   | &nbsp; | `_id` |
   *
   */
  item: Maybe<IData>;
  key: Maybe<Scalars['String']['output']>;
  url: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['String']['output']>;
  graph: Maybe<Scalars['String']['output']>;
  hierarchical: Maybe<Scalars['String']['output']>;
  internal: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteGraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base: Maybe<Array<Maybe<StringFacet>>>;
  default: Maybe<Array<Maybe<StringFacet>>>;
  graph: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical: Maybe<Array<Maybe<StringFacet>>>;
  internal: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetBaseArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetDefaultArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetGraphArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetHierarchicalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetInternalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base: InputMaybe<OrderBy>;
  default: InputMaybe<OrderBy>;
  graph: InputMaybe<OrderBy>;
  hierarchical: InputMaybe<OrderBy>;
  internal: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base: InputMaybe<StringFilterInput>;
  default: InputMaybe<StringFilterInput>;
  graph: InputMaybe<StringFilterInput>;
  hierarchical: InputMaybe<StringFilterInput>;
  internal: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type Custom_Experience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'Custom_Experience';
  Heading: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
  seoProperties: Maybe<SeoBlockProperty>;
};


export type Custom_Experience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Custom_Experience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type Custom_ExperienceAutocomplete = {
  __typename?: 'Custom_ExperienceAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
  seoProperties: Maybe<SeoBlockPropertyAutocomplete>;
};

export type Custom_ExperienceFacet = {
  __typename?: 'Custom_ExperienceFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
  seoProperties: Maybe<SeoBlockPropertyFacet>;
};

export type Custom_ExperienceOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
  seoProperties: InputMaybe<SeoBlockPropertyOrderByInput>;
};

export type Custom_ExperienceOutput = {
  __typename?: 'Custom_ExperienceOutput';
  autocomplete: Maybe<Custom_ExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<Custom_ExperienceFacet>;
  item: Maybe<Custom_Experience>;
  items: Maybe<Array<Maybe<Custom_Experience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type Custom_ExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type Custom_ExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<Custom_ExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<Custom_ExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<Custom_ExperienceWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
  seoProperties: InputMaybe<SeoBlockPropertyWhereInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type Data_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor: Maybe<Scalars['String']['output']>;
  item: Maybe<IData>;
  items: Maybe<Array<Maybe<IData>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. */
  decay: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  /** Reference point the decay is measured from. Defaults to `now()`. */
  origin: InputMaybe<Scalars['Date']['input']>;
  /** Score at `scale` distance from `origin`. Defaults to 0.5; must be in the range (0..1). */
  rate: InputMaybe<Scalars['Float']['input']>;
  /** Decay distance in days. Defaults to 10. */
  scale: InputMaybe<Scalars['Int']['input']>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  Log = 'LOG',
  /** Do not apply any multiplier to the field value */
  None = 'NONE',
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  Reciprocal = 'RECIPROCAL',
  /** Take the square root of the field value */
  Sqrt = 'SQRT',
  /** Square the field value (multiply it by itself) */
  Square = 'SQUARE'
}

export type FloatFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Float']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Float']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Float']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Float']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Float']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Float']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Float']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GenericMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: 'GenericMedia';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type GenericMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete: Maybe<GenericMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GenericMediaFacet>;
  item: Maybe<GenericMedia>;
  items: Maybe<Array<Maybe<GenericMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type GlobalSettings = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'GlobalSettings';
  DebugMode: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type GlobalSettings_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GlobalSettings_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GlobalSettingsAutocomplete = {
  __typename?: 'GlobalSettingsAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GlobalSettingsFacet = {
  __typename?: 'GlobalSettingsFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GlobalSettingsOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type GlobalSettingsOutput = {
  __typename?: 'GlobalSettingsOutput';
  autocomplete: Maybe<GlobalSettingsAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GlobalSettingsFacet>;
  item: Maybe<GlobalSettings>;
  items: Maybe<Array<Maybe<GlobalSettings>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GlobalSettingsOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlobalSettingsWhereInput = {
  _and: InputMaybe<Array<InputMaybe<GlobalSettingsWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GlobalSettingsWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GlobalSettingsWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type HeadingBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'HeadingBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  headingText: Maybe<Scalars['String']['output']>;
};


export type HeadingBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeadingBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeadingBlockAutocomplete = {
  __typename?: 'HeadingBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeadingBlockFacet = {
  __typename?: 'HeadingBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HeadingBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HeadingBlockOutput = {
  __typename?: 'HeadingBlockOutput';
  autocomplete: Maybe<HeadingBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeadingBlockFacet>;
  item: Maybe<HeadingBlock>;
  items: Maybe<Array<Maybe<HeadingBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeadingBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeadingBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeadingBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeadingBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeadingBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type HeroBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'HeroBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  buttonLink: Maybe<ContentUrl>;
  buttonLinkText: Maybe<Scalars['String']['output']>;
  image: Maybe<ContentReference>;
  subTitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type HeroBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};


export type HeroBlockSubTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlockTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  buttonLink: Maybe<ContentUrlAutocomplete>;
  image: Maybe<ContentReferenceAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  buttonLink: Maybe<ContentUrlFacet>;
  image: Maybe<ContentReferenceFacet>;
  subTitle: Maybe<Array<Maybe<StringFacet>>>;
  title: Maybe<Array<Maybe<StringFacet>>>;
};


export type HeroBlockFacetSubTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HeroBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  buttonLink: InputMaybe<ContentUrlOrderByInput>;
  image: InputMaybe<ContentReferenceOrderByInput>;
  subTitle: InputMaybe<OrderBy>;
  title: InputMaybe<OrderBy>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete: Maybe<HeroBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeroBlockFacet>;
  item: Maybe<HeroBlock>;
  items: Maybe<Array<Maybe<HeroBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  buttonLink: InputMaybe<ContentUrlWhereInput>;
  image: InputMaybe<ContentReferenceWhereInput>;
  subTitle: InputMaybe<SearchableStringFilterInput>;
  title: InputMaybe<SearchableStringFilterInput>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  endToken: InputMaybe<Scalars['String']['input']>;
  startToken: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionComponentNode = {
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  layoutType: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetLayoutTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  layoutType: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  layoutType: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  container: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createdBy: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  lastModifiedBy: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
  variation: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteChangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteContainerArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteCreatedByArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteFallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLastModifiedByArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocalesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVariationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset: Maybe<Array<Maybe<StringFacet>>>;
  container: Maybe<Array<Maybe<StringFacet>>>;
  created: Maybe<Array<Maybe<DateFacet>>>;
  createdBy: Maybe<Array<Maybe<StringFacet>>>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  expired: Maybe<Array<Maybe<DateFacet>>>;
  fallbackForLocale: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  lastModified: Maybe<Array<Maybe<DateFacet>>>;
  lastModifiedBy: Maybe<Array<Maybe<StringFacet>>>;
  locale: Maybe<Array<Maybe<StringFacet>>>;
  locales: Maybe<Array<Maybe<StringFacet>>>;
  path: Maybe<Array<Maybe<StringFacet>>>;
  published: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
  status: Maybe<Array<Maybe<StringFacet>>>;
  types: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
  variation: Maybe<Array<Maybe<StringFacet>>>;
  version: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetChangesetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetContainerArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetCreatedByArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetExpiredArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetFallbackForLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetLastModifiedByArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLocalesArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPathArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetSortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type IContentMetadataFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetTypesArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVariationArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVersionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset: InputMaybe<OrderBy>;
  container: InputMaybe<OrderBy>;
  created: InputMaybe<OrderBy>;
  createdBy: InputMaybe<OrderBy>;
  displayName: InputMaybe<OrderBy>;
  expired: InputMaybe<OrderBy>;
  fallbackForLocale: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  lastModified: InputMaybe<OrderBy>;
  lastModifiedBy: InputMaybe<OrderBy>;
  locale: InputMaybe<OrderBy>;
  locales: InputMaybe<OrderBy>;
  path: InputMaybe<OrderBy>;
  published: InputMaybe<OrderBy>;
  sortOrder: InputMaybe<OrderBy>;
  status: InputMaybe<OrderBy>;
  types: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
  variation: InputMaybe<OrderBy>;
  version: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset: InputMaybe<StringFilterInput>;
  container: InputMaybe<StringFilterInput>;
  created: InputMaybe<DateFilterInput>;
  createdBy: InputMaybe<StringFilterInput>;
  displayName: InputMaybe<SearchableStringFilterInput>;
  expired: InputMaybe<DateFilterInput>;
  fallbackForLocale: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  lastModified: InputMaybe<DateFilterInput>;
  lastModifiedBy: InputMaybe<StringFilterInput>;
  locale: InputMaybe<StringFilterInput>;
  locales: InputMaybe<StringFilterInput>;
  path: InputMaybe<StringFilterInput>;
  published: InputMaybe<DateFilterInput>;
  sortOrder: InputMaybe<IntFilterInput>;
  status: InputMaybe<StringFilterInput>;
  types: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
  variation: InputMaybe<StringFilterInput>;
  version: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type IData_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ImageBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ImageBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  imageAltText: Maybe<Scalars['String']['output']>;
  imageCaption: Maybe<Scalars['String']['output']>;
  imageLink: Maybe<ContentReference>;
};


export type ImageBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageBlockAutocomplete = {
  __typename?: 'ImageBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  imageLink: Maybe<ContentReferenceAutocomplete>;
};

export type ImageBlockFacet = {
  __typename?: 'ImageBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  imageLink: Maybe<ContentReferenceFacet>;
};

export type ImageBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  imageLink: InputMaybe<ContentReferenceOrderByInput>;
};

export type ImageBlockOutput = {
  __typename?: 'ImageBlockOutput';
  autocomplete: Maybe<ImageBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageBlockFacet>;
  item: Maybe<ImageBlock>;
  items: Maybe<Array<Maybe<ImageBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  imageLink: InputMaybe<ContentReferenceWhereInput>;
};

export type ImageMedia = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: 'ImageMedia';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type ImageMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _imageMetadata: Maybe<_ImageMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete: Maybe<ImageMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageMediaFacet>;
  item: Maybe<ImageMedia>;
  items: Maybe<Array<Maybe<ImageMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type LatestArticlesBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'LatestArticlesBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  buttonLink: Maybe<ContentUrl>;
  buttonLinkText: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type LatestArticlesBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LatestArticlesBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LatestArticlesBlockAutocomplete = {
  __typename?: 'LatestArticlesBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  buttonLink: Maybe<ContentUrlAutocomplete>;
};

export type LatestArticlesBlockFacet = {
  __typename?: 'LatestArticlesBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  buttonLink: Maybe<ContentUrlFacet>;
};

export type LatestArticlesBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  buttonLink: InputMaybe<ContentUrlOrderByInput>;
};

export type LatestArticlesBlockOutput = {
  __typename?: 'LatestArticlesBlockOutput';
  autocomplete: Maybe<LatestArticlesBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LatestArticlesBlockFacet>;
  item: Maybe<LatestArticlesBlock>;
  items: Maybe<Array<Maybe<LatestArticlesBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LatestArticlesBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LatestArticlesBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LatestArticlesBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LatestArticlesBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LatestArticlesBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  buttonLink: InputMaybe<ContentUrlWhereInput>;
};

export type LayoutSettings = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'LayoutSettings';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  contactUsLink: Maybe<ContentUrl>;
  contactUsText: Maybe<RichText>;
  copyrightText: Maybe<Scalars['String']['output']>;
  facebookUrl: Maybe<Scalars['String']['output']>;
  linkedInUrl: Maybe<Scalars['String']['output']>;
  logo: Maybe<ContentReference>;
  navItems: Maybe<Array<Maybe<_IContent>>>;
  quickLinks: Maybe<Array<Maybe<_IContent>>>;
  youTubeUrl: Maybe<Scalars['String']['output']>;
};


export type LayoutSettings_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LayoutSettings_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LayoutSettingsAutocomplete = {
  __typename?: 'LayoutSettingsAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  contactUsLink: Maybe<ContentUrlAutocomplete>;
  contactUsText: Maybe<RichTextAutocomplete>;
  logo: Maybe<ContentReferenceAutocomplete>;
  navItems: Maybe<_IContentAutocomplete>;
  quickLinks: Maybe<_IContentAutocomplete>;
};

export type LayoutSettingsFacet = {
  __typename?: 'LayoutSettingsFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  contactUsLink: Maybe<ContentUrlFacet>;
  contactUsText: Maybe<RichTextFacet>;
  logo: Maybe<ContentReferenceFacet>;
  navItems: Maybe<_IContentFacet>;
  quickLinks: Maybe<_IContentFacet>;
};

export type LayoutSettingsOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  contactUsLink: InputMaybe<ContentUrlOrderByInput>;
  contactUsText: InputMaybe<RichTextOrderByInput>;
  logo: InputMaybe<ContentReferenceOrderByInput>;
  navItems: InputMaybe<_IContentOrderByInput>;
  quickLinks: InputMaybe<_IContentOrderByInput>;
};

export type LayoutSettingsOutput = {
  __typename?: 'LayoutSettingsOutput';
  autocomplete: Maybe<LayoutSettingsAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LayoutSettingsFacet>;
  item: Maybe<LayoutSettings>;
  items: Maybe<Array<Maybe<LayoutSettings>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LayoutSettingsOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LayoutSettingsWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LayoutSettingsWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LayoutSettingsWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LayoutSettingsWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  contactUsLink: InputMaybe<ContentUrlWhereInput>;
  contactUsText: InputMaybe<RichTextWhereInput>;
  logo: InputMaybe<ContentReferenceWhereInput>;
  navItems: InputMaybe<_IContentWhereInput>;
  quickLinks: InputMaybe<_IContentWhereInput>;
};

export type LinkConfig = {
  from: InputMaybe<Scalars['String']['input']>;
  to: InputMaybe<Scalars['String']['input']>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  Assets = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Default = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Items = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  Path = 'PATH'
}

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en',
  Nl = 'nl',
  Sv = 'sv'
}

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type MenuItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'MenuItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  description: Maybe<RichText>;
  heading: Maybe<Scalars['String']['output']>;
  linkUrl: Maybe<ContentUrl>;
};


export type MenuItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MenuItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type MenuItemBlockAutocomplete = {
  __typename?: 'MenuItemBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  description: Maybe<RichTextAutocomplete>;
  linkUrl: Maybe<ContentUrlAutocomplete>;
};

export type MenuItemBlockFacet = {
  __typename?: 'MenuItemBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  description: Maybe<RichTextFacet>;
  linkUrl: Maybe<ContentUrlFacet>;
};

export type MenuItemBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  description: InputMaybe<RichTextOrderByInput>;
  linkUrl: InputMaybe<ContentUrlOrderByInput>;
};

export type MenuItemBlockOutput = {
  __typename?: 'MenuItemBlockOutput';
  autocomplete: Maybe<MenuItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<MenuItemBlockFacet>;
  item: Maybe<MenuItemBlock>;
  items: Maybe<Array<Maybe<MenuItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type MenuItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<MenuItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<MenuItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<MenuItemBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  description: InputMaybe<RichTextWhereInput>;
  linkUrl: InputMaybe<ContentUrlWhereInput>;
};

export type MenuItemTopLevelBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'MenuItemTopLevelBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  description: Maybe<RichText>;
  heading: Maybe<Scalars['String']['output']>;
  linkUrl: Maybe<ContentUrl>;
  menuItems: Maybe<Array<Maybe<_IContent>>>;
};


export type MenuItemTopLevelBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MenuItemTopLevelBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type MenuItemTopLevelBlockAutocomplete = {
  __typename?: 'MenuItemTopLevelBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  description: Maybe<RichTextAutocomplete>;
  linkUrl: Maybe<ContentUrlAutocomplete>;
  menuItems: Maybe<_IContentAutocomplete>;
};

export type MenuItemTopLevelBlockFacet = {
  __typename?: 'MenuItemTopLevelBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  description: Maybe<RichTextFacet>;
  linkUrl: Maybe<ContentUrlFacet>;
  menuItems: Maybe<_IContentFacet>;
};

export type MenuItemTopLevelBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  description: InputMaybe<RichTextOrderByInput>;
  linkUrl: InputMaybe<ContentUrlOrderByInput>;
  menuItems: InputMaybe<_IContentOrderByInput>;
};

export type MenuItemTopLevelBlockOutput = {
  __typename?: 'MenuItemTopLevelBlockOutput';
  autocomplete: Maybe<MenuItemTopLevelBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<MenuItemTopLevelBlockFacet>;
  item: Maybe<MenuItemTopLevelBlock>;
  items: Maybe<Array<Maybe<MenuItemTopLevelBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type MenuItemTopLevelBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuItemTopLevelBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<MenuItemTopLevelBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<MenuItemTopLevelBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<MenuItemTopLevelBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  description: InputMaybe<RichTextWhereInput>;
  linkUrl: InputMaybe<ContentUrlWhereInput>;
  menuItems: InputMaybe<_IContentWhereInput>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier: InputMaybe<FactorModifier>;
  value: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsChoiceElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsChoiceElement';
  AllowMultiSelect: Maybe<Scalars['Boolean']['output']>;
  Label: Maybe<Scalars['String']['output']>;
  Options: Maybe<Scalars['JSON']['output']>;
  SubmissionFieldName: Maybe<Scalars['String']['output']>;
  Tooltip: Maybe<Scalars['String']['output']>;
  Validators: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OptiFormsChoiceElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsChoiceElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsChoiceElementAutocomplete = {
  __typename?: 'OptiFormsChoiceElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsChoiceElementFacet = {
  __typename?: 'OptiFormsChoiceElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OptiFormsChoiceElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsChoiceElementOutput = {
  __typename?: 'OptiFormsChoiceElementOutput';
  autocomplete: Maybe<OptiFormsChoiceElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsChoiceElementFacet>;
  item: Maybe<OptiFormsChoiceElement>;
  items: Maybe<Array<Maybe<OptiFormsChoiceElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsChoiceElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsChoiceElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OptiFormsChoiceElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsChoiceElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsChoiceElementWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type OptiFormsCondition = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsCondition';
  ComparisonOperator: Maybe<Scalars['String']['output']>;
  ComparisonValue: Maybe<Scalars['String']['output']>;
  DependsOnField: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OptiFormsCondition_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsCondition_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsConditionAutocomplete = {
  __typename?: 'OptiFormsConditionAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsConditionFacet = {
  __typename?: 'OptiFormsConditionFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OptiFormsConditionOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsConditionOutput = {
  __typename?: 'OptiFormsConditionOutput';
  autocomplete: Maybe<OptiFormsConditionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsConditionFacet>;
  item: Maybe<OptiFormsCondition>;
  items: Maybe<Array<Maybe<OptiFormsCondition>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsConditionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsConditionProperty = {
  __typename?: 'OptiFormsConditionProperty';
  ComparisonOperator: Maybe<Scalars['String']['output']>;
  ComparisonValue: Maybe<Scalars['String']['output']>;
  DependsOnField: Maybe<Scalars['String']['output']>;
};

export type OptiFormsConditionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OptiFormsConditionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsConditionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsConditionWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type OptiFormsContainerData = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: 'OptiFormsContainerData';
  DependencyRules: Maybe<Array<Maybe<OptiFormsDependencyRuleProperty>>>;
  Description: Maybe<Scalars['String']['output']>;
  ResetConfirmationMessage: Maybe<Scalars['String']['output']>;
  ShowSummaryMessageAfterSubmission: Maybe<Scalars['Boolean']['output']>;
  SubmitConfirmationMessage: Maybe<Scalars['String']['output']>;
  SubmitUrl: Maybe<ContentUrl>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type OptiFormsContainerData_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsContainerData_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsContainerDataAutocomplete = {
  __typename?: 'OptiFormsContainerDataAutocomplete';
  SubmitUrl: Maybe<ContentUrlAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type OptiFormsContainerDataFacet = {
  __typename?: 'OptiFormsContainerDataFacet';
  DependencyRules: Maybe<OptiFormsDependencyRulePropertyFacet>;
  SubmitUrl: Maybe<ContentUrlFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type OptiFormsContainerDataOrderByInput = {
  DependencyRules: InputMaybe<OptiFormsDependencyRulePropertyOrderByInput>;
  SubmitUrl: InputMaybe<ContentUrlOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type OptiFormsContainerDataOutput = {
  __typename?: 'OptiFormsContainerDataOutput';
  autocomplete: Maybe<OptiFormsContainerDataAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsContainerDataFacet>;
  item: Maybe<OptiFormsContainerData>;
  items: Maybe<Array<Maybe<OptiFormsContainerData>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsContainerDataOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsContainerDataWhereInput = {
  DependencyRules: InputMaybe<OptiFormsDependencyRulePropertyWhereInput>;
  SubmitUrl: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<OptiFormsContainerDataWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsContainerDataWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsContainerDataWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type OptiFormsDependencyRule = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsDependencyRule';
  AfterStep: Maybe<Scalars['String']['output']>;
  ConditionCombination: Maybe<Scalars['String']['output']>;
  Conditions: Maybe<Array<Maybe<OptiFormsConditionProperty>>>;
  JumpToStep: Maybe<Scalars['String']['output']>;
  SatisfiedAction: Maybe<Scalars['String']['output']>;
  TargetElement: Maybe<Scalars['String']['output']>;
  TargetStep: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OptiFormsDependencyRule_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsDependencyRule_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsDependencyRuleAutocomplete = {
  __typename?: 'OptiFormsDependencyRuleAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsDependencyRuleFacet = {
  __typename?: 'OptiFormsDependencyRuleFacet';
  Conditions: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};


export type OptiFormsDependencyRuleFacetConditionsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type OptiFormsDependencyRuleOrderByInput = {
  Conditions: InputMaybe<OrderBy>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsDependencyRuleOutput = {
  __typename?: 'OptiFormsDependencyRuleOutput';
  autocomplete: Maybe<OptiFormsDependencyRuleAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsDependencyRuleFacet>;
  item: Maybe<OptiFormsDependencyRule>;
  items: Maybe<Array<Maybe<OptiFormsDependencyRule>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsDependencyRuleOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsDependencyRuleProperty = {
  __typename?: 'OptiFormsDependencyRuleProperty';
  AfterStep: Maybe<Scalars['String']['output']>;
  ConditionCombination: Maybe<Scalars['String']['output']>;
  Conditions: Maybe<Array<Maybe<OptiFormsConditionProperty>>>;
  JumpToStep: Maybe<Scalars['String']['output']>;
  SatisfiedAction: Maybe<Scalars['String']['output']>;
  TargetElement: Maybe<Scalars['String']['output']>;
  TargetStep: Maybe<Scalars['String']['output']>;
};

export type OptiFormsDependencyRulePropertyFacet = {
  __typename?: 'OptiFormsDependencyRulePropertyFacet';
  Conditions: Maybe<Array<Maybe<StringFacet>>>;
};


export type OptiFormsDependencyRulePropertyFacetConditionsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type OptiFormsDependencyRulePropertyOrderByInput = {
  Conditions: InputMaybe<OrderBy>;
};

export type OptiFormsDependencyRulePropertyWhereInput = {
  Conditions: InputMaybe<StringFilterInput>;
};

export type OptiFormsDependencyRuleWhereInput = {
  Conditions: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<OptiFormsDependencyRuleWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsDependencyRuleWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsDependencyRuleWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type OptiFormsNumberElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsNumberElement';
  AutoComplete: Maybe<Scalars['String']['output']>;
  Label: Maybe<Scalars['String']['output']>;
  Placeholder: Maybe<Scalars['String']['output']>;
  PredefinedValue: Maybe<Scalars['String']['output']>;
  SubmissionFieldName: Maybe<Scalars['String']['output']>;
  Tooltip: Maybe<Scalars['String']['output']>;
  Validators: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OptiFormsNumberElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsNumberElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsNumberElementAutocomplete = {
  __typename?: 'OptiFormsNumberElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsNumberElementFacet = {
  __typename?: 'OptiFormsNumberElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OptiFormsNumberElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsNumberElementOutput = {
  __typename?: 'OptiFormsNumberElementOutput';
  autocomplete: Maybe<OptiFormsNumberElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsNumberElementFacet>;
  item: Maybe<OptiFormsNumberElement>;
  items: Maybe<Array<Maybe<OptiFormsNumberElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsNumberElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsNumberElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OptiFormsNumberElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsNumberElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsNumberElementWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type OptiFormsRangeElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsRangeElement';
  Increment: Maybe<Scalars['Int']['output']>;
  Label: Maybe<Scalars['String']['output']>;
  Max: Maybe<Scalars['Int']['output']>;
  Min: Maybe<Scalars['Int']['output']>;
  PredefinedValue: Maybe<Scalars['String']['output']>;
  SubmissionFieldName: Maybe<Scalars['String']['output']>;
  Tooltip: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OptiFormsRangeElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsRangeElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsRangeElementAutocomplete = {
  __typename?: 'OptiFormsRangeElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsRangeElementFacet = {
  __typename?: 'OptiFormsRangeElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OptiFormsRangeElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsRangeElementOutput = {
  __typename?: 'OptiFormsRangeElementOutput';
  autocomplete: Maybe<OptiFormsRangeElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsRangeElementFacet>;
  item: Maybe<OptiFormsRangeElement>;
  items: Maybe<Array<Maybe<OptiFormsRangeElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsRangeElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsRangeElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OptiFormsRangeElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsRangeElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsRangeElementWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type OptiFormsResetElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsResetElement';
  Label: Maybe<Scalars['String']['output']>;
  Tooltip: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OptiFormsResetElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsResetElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsResetElementAutocomplete = {
  __typename?: 'OptiFormsResetElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsResetElementFacet = {
  __typename?: 'OptiFormsResetElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OptiFormsResetElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsResetElementOutput = {
  __typename?: 'OptiFormsResetElementOutput';
  autocomplete: Maybe<OptiFormsResetElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsResetElementFacet>;
  item: Maybe<OptiFormsResetElement>;
  items: Maybe<Array<Maybe<OptiFormsResetElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsResetElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsResetElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OptiFormsResetElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsResetElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsResetElementWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type OptiFormsSelectionElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsSelectionElement';
  AllowMultiSelect: Maybe<Scalars['Boolean']['output']>;
  AutoComplete: Maybe<Scalars['String']['output']>;
  Label: Maybe<Scalars['String']['output']>;
  Options: Maybe<Scalars['JSON']['output']>;
  Placeholder: Maybe<Scalars['String']['output']>;
  SubmissionFieldName: Maybe<Scalars['String']['output']>;
  Tooltip: Maybe<Scalars['String']['output']>;
  Validators: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OptiFormsSelectionElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsSelectionElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsSelectionElementAutocomplete = {
  __typename?: 'OptiFormsSelectionElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsSelectionElementFacet = {
  __typename?: 'OptiFormsSelectionElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OptiFormsSelectionElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsSelectionElementOutput = {
  __typename?: 'OptiFormsSelectionElementOutput';
  autocomplete: Maybe<OptiFormsSelectionElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsSelectionElementFacet>;
  item: Maybe<OptiFormsSelectionElement>;
  items: Maybe<Array<Maybe<OptiFormsSelectionElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsSelectionElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsSelectionElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OptiFormsSelectionElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsSelectionElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsSelectionElementWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type OptiFormsSubmitElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsSubmitElement';
  Label: Maybe<Scalars['String']['output']>;
  Tooltip: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OptiFormsSubmitElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsSubmitElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsSubmitElementAutocomplete = {
  __typename?: 'OptiFormsSubmitElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsSubmitElementFacet = {
  __typename?: 'OptiFormsSubmitElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OptiFormsSubmitElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsSubmitElementOutput = {
  __typename?: 'OptiFormsSubmitElementOutput';
  autocomplete: Maybe<OptiFormsSubmitElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsSubmitElementFacet>;
  item: Maybe<OptiFormsSubmitElement>;
  items: Maybe<Array<Maybe<OptiFormsSubmitElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsSubmitElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsSubmitElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OptiFormsSubmitElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsSubmitElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsSubmitElementWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type OptiFormsTextareaElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsTextareaElement';
  AutoComplete: Maybe<Scalars['String']['output']>;
  Label: Maybe<Scalars['String']['output']>;
  Placeholder: Maybe<Scalars['String']['output']>;
  PredefinedValue: Maybe<Scalars['String']['output']>;
  SubmissionFieldName: Maybe<Scalars['String']['output']>;
  Tooltip: Maybe<Scalars['String']['output']>;
  Validators: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OptiFormsTextareaElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsTextareaElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsTextareaElementAutocomplete = {
  __typename?: 'OptiFormsTextareaElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsTextareaElementFacet = {
  __typename?: 'OptiFormsTextareaElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OptiFormsTextareaElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsTextareaElementOutput = {
  __typename?: 'OptiFormsTextareaElementOutput';
  autocomplete: Maybe<OptiFormsTextareaElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsTextareaElementFacet>;
  item: Maybe<OptiFormsTextareaElement>;
  items: Maybe<Array<Maybe<OptiFormsTextareaElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsTextareaElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsTextareaElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OptiFormsTextareaElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsTextareaElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsTextareaElementWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type OptiFormsTextboxElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsTextboxElement';
  AutoComplete: Maybe<Scalars['String']['output']>;
  Label: Maybe<Scalars['String']['output']>;
  Placeholder: Maybe<Scalars['String']['output']>;
  PredefinedValue: Maybe<Scalars['String']['output']>;
  SubmissionFieldName: Maybe<Scalars['String']['output']>;
  Tooltip: Maybe<Scalars['String']['output']>;
  Validators: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OptiFormsTextboxElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsTextboxElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsTextboxElementAutocomplete = {
  __typename?: 'OptiFormsTextboxElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsTextboxElementFacet = {
  __typename?: 'OptiFormsTextboxElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OptiFormsTextboxElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsTextboxElementOutput = {
  __typename?: 'OptiFormsTextboxElementOutput';
  autocomplete: Maybe<OptiFormsTextboxElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsTextboxElementFacet>;
  item: Maybe<OptiFormsTextboxElement>;
  items: Maybe<Array<Maybe<OptiFormsTextboxElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsTextboxElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsTextboxElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OptiFormsTextboxElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsTextboxElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsTextboxElementWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type OptiFormsUrlElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsUrlElement';
  Label: Maybe<Scalars['String']['output']>;
  Placeholder: Maybe<Scalars['String']['output']>;
  PredefinedValue: Maybe<Scalars['String']['output']>;
  SubmissionFieldName: Maybe<Scalars['String']['output']>;
  Tooltip: Maybe<Scalars['String']['output']>;
  Validators: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type OptiFormsUrlElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OptiFormsUrlElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OptiFormsUrlElementAutocomplete = {
  __typename?: 'OptiFormsUrlElementAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsUrlElementFacet = {
  __typename?: 'OptiFormsUrlElementFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OptiFormsUrlElementOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsUrlElementOutput = {
  __typename?: 'OptiFormsUrlElementOutput';
  autocomplete: Maybe<OptiFormsUrlElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OptiFormsUrlElementFacet>;
  item: Maybe<OptiFormsUrlElement>;
  items: Maybe<Array<Maybe<OptiFormsUrlElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsUrlElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsUrlElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OptiFormsUrlElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OptiFormsUrlElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OptiFormsUrlElementWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type Our_Work = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'Our_Work';
  Heading: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
  seoProperties: Maybe<SeoBlockProperty>;
};


export type Our_Work_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Our_Work_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type Our_WorkAutocomplete = {
  __typename?: 'Our_WorkAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
  seoProperties: Maybe<SeoBlockPropertyAutocomplete>;
};

export type Our_WorkFacet = {
  __typename?: 'Our_WorkFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
  seoProperties: Maybe<SeoBlockPropertyFacet>;
};

export type Our_WorkOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
  seoProperties: InputMaybe<SeoBlockPropertyOrderByInput>;
};

export type Our_WorkOutput = {
  __typename?: 'Our_WorkOutput';
  autocomplete: Maybe<Our_WorkAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<Our_WorkFacet>;
  item: Maybe<Our_Work>;
  items: Maybe<Array<Maybe<Our_Work>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type Our_WorkOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type Our_WorkWhereInput = {
  _and: InputMaybe<Array<InputMaybe<Our_WorkWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<Our_WorkWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<Our_WorkWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
  seoProperties: InputMaybe<SeoBlockPropertyWhereInput>;
};

export type ParagraphElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ParagraphElement';
  Text: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type ParagraphElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ParagraphElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  Text: Maybe<RichTextAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  Text: Maybe<RichTextFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ParagraphElementOrderByInput = {
  Text: InputMaybe<RichTextOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete: Maybe<ParagraphElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ParagraphElementFacet>;
  item: Maybe<ParagraphElement>;
  items: Maybe<Array<Maybe<ParagraphElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ParagraphElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphElementWhereInput = {
  Text: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type PinnedInput = {
  /** Pinned collection keys */
  collections: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  AccordionBlock: Maybe<AccordionBlockOutput>;
  AccordionItemBlock: Maybe<AccordionItemBlockOutput>;
  ArticleExperience: Maybe<ArticleExperienceOutput>;
  ArticleLandingPage: Maybe<ArticleLandingPageOutput>;
  ArticlePage: Maybe<ArticlePageOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  CarouselBlock: Maybe<CarouselBlockOutput>;
  CarouselItemBlock: Maybe<CarouselItemBlockOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  Custom_Experience: Maybe<Custom_ExperienceOutput>;
  Data: Maybe<DataOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  GlobalSettings: Maybe<GlobalSettingsOutput>;
  HeadingBlock: Maybe<HeadingBlockOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  ImageBlock: Maybe<ImageBlockOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LatestArticlesBlock: Maybe<LatestArticlesBlockOutput>;
  LayoutSettings: Maybe<LayoutSettingsOutput>;
  MenuItemBlock: Maybe<MenuItemBlockOutput>;
  MenuItemTopLevelBlock: Maybe<MenuItemTopLevelBlockOutput>;
  OptiFormsChoiceElement: Maybe<OptiFormsChoiceElementOutput>;
  OptiFormsCondition: Maybe<OptiFormsConditionOutput>;
  OptiFormsContainerData: Maybe<OptiFormsContainerDataOutput>;
  OptiFormsDependencyRule: Maybe<OptiFormsDependencyRuleOutput>;
  OptiFormsNumberElement: Maybe<OptiFormsNumberElementOutput>;
  OptiFormsRangeElement: Maybe<OptiFormsRangeElementOutput>;
  OptiFormsResetElement: Maybe<OptiFormsResetElementOutput>;
  OptiFormsSelectionElement: Maybe<OptiFormsSelectionElementOutput>;
  OptiFormsSubmitElement: Maybe<OptiFormsSubmitElementOutput>;
  OptiFormsTextareaElement: Maybe<OptiFormsTextareaElementOutput>;
  OptiFormsTextboxElement: Maybe<OptiFormsTextboxElementOutput>;
  OptiFormsUrlElement: Maybe<OptiFormsUrlElementOutput>;
  Our_Work: Maybe<Our_WorkOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  RichTextBlock: Maybe<RichTextBlockOutput>;
  SearchPage: Maybe<SearchPageOutput>;
  SimpleContentBlock: Maybe<SimpleContentBlockOutput>;
  StartPage: Maybe<StartPageOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TileBlock: Maybe<TileBlockOutput>;
  TileItemBlock: Maybe<TileItemBlockOutput>;
  VideoBlock: Maybe<VideoBlockOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _AssetItem: Maybe<_AssetItemOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _ImageItem: Maybe<_ImageItemOutput>;
  _Item: Maybe<_ItemOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _TaxonomyTerm: Maybe<_TaxonomyTermOutput>;
  _Video: Maybe<_VideoOutput>;
  seoBlock: Maybe<SeoBlockOutput>;
};


export type QueryAccordionBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AccordionBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AccordionBlockWhereInput>;
};


export type QueryAccordionItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AccordionItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AccordionItemBlockWhereInput>;
};


export type QueryArticleExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleExperienceWhereInput>;
};


export type QueryArticleLandingPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleLandingPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleLandingPageWhereInput>;
};


export type QueryArticlePageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticlePageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticlePageWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryButtonBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ButtonBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryCarouselBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CarouselBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryCarouselItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CarouselItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CarouselItemBlockWhereInput>;
};


export type QueryContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryCustom_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<Custom_ExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<Custom_ExperienceWhereInput>;
};


export type QueryDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DataWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryGlobalSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GlobalSettingsOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GlobalSettingsWhereInput>;
};


export type QueryHeadingBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeadingBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeadingBlockWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryImageBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageBlockWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLatestArticlesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LatestArticlesBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LatestArticlesBlockWhereInput>;
};


export type QueryLayoutSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LayoutSettingsOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LayoutSettingsWhereInput>;
};


export type QueryMenuItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MenuItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MenuItemBlockWhereInput>;
};


export type QueryMenuItemTopLevelBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MenuItemTopLevelBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MenuItemTopLevelBlockWhereInput>;
};


export type QueryOptiFormsChoiceElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsChoiceElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsChoiceElementWhereInput>;
};


export type QueryOptiFormsConditionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsConditionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsConditionWhereInput>;
};


export type QueryOptiFormsContainerDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsContainerDataOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsContainerDataWhereInput>;
};


export type QueryOptiFormsDependencyRuleArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsDependencyRuleOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsDependencyRuleWhereInput>;
};


export type QueryOptiFormsNumberElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsNumberElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsNumberElementWhereInput>;
};


export type QueryOptiFormsRangeElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsRangeElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsRangeElementWhereInput>;
};


export type QueryOptiFormsResetElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsResetElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsResetElementWhereInput>;
};


export type QueryOptiFormsSelectionElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsSelectionElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsSelectionElementWhereInput>;
};


export type QueryOptiFormsSubmitElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsSubmitElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsSubmitElementWhereInput>;
};


export type QueryOptiFormsTextareaElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsTextareaElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsTextareaElementWhereInput>;
};


export type QueryOptiFormsTextboxElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsTextboxElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsTextboxElementWhereInput>;
};


export type QueryOptiFormsUrlElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsUrlElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsUrlElementWhereInput>;
};


export type QueryOur_WorkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<Our_WorkOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<Our_WorkWhereInput>;
};


export type QueryParagraphElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ParagraphElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryRichTextBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<RichTextBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<RichTextBlockWhereInput>;
};


export type QuerySearchPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SearchPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SearchPageWhereInput>;
};


export type QuerySimpleContentBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SimpleContentBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SimpleContentBlockWhereInput>;
};


export type QueryStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StartPageWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TileBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TileBlockWhereInput>;
};


export type QueryTileItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TileItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TileItemBlockWhereInput>;
};


export type QueryVideoBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoBlockWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoMediaWhereInput>;
};


export type Query_AssetItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_AssetItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_AssetItemWhereInput>;
};


export type Query_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageWhereInput>;
};


export type Query_ImageItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageItemWhereInput>;
};


export type Query_ItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ItemWhereInput>;
};


export type Query_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_SectionWhereInput>;
};


export type Query_TaxonomyTermArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_TaxonomyTermOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_TaxonomyTermWhereInput>;
};


export type Query_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_VideoWhereInput>;
};


export type QuerySeoBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SeoBlockWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  AccordionBlock: Maybe<AccordionBlockOutput>;
  AccordionItemBlock: Maybe<AccordionItemBlockOutput>;
  ArticleExperience: Maybe<ArticleExperienceOutput>;
  ArticleLandingPage: Maybe<ArticleLandingPageOutput>;
  ArticlePage: Maybe<ArticlePageOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  CarouselBlock: Maybe<CarouselBlockOutput>;
  CarouselItemBlock: Maybe<CarouselItemBlockOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  Custom_Experience: Maybe<Custom_ExperienceOutput>;
  Data: Maybe<DataOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  GlobalSettings: Maybe<GlobalSettingsOutput>;
  HeadingBlock: Maybe<HeadingBlockOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  ImageBlock: Maybe<ImageBlockOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LatestArticlesBlock: Maybe<LatestArticlesBlockOutput>;
  LayoutSettings: Maybe<LayoutSettingsOutput>;
  MenuItemBlock: Maybe<MenuItemBlockOutput>;
  MenuItemTopLevelBlock: Maybe<MenuItemTopLevelBlockOutput>;
  OptiFormsChoiceElement: Maybe<OptiFormsChoiceElementOutput>;
  OptiFormsCondition: Maybe<OptiFormsConditionOutput>;
  OptiFormsContainerData: Maybe<OptiFormsContainerDataOutput>;
  OptiFormsDependencyRule: Maybe<OptiFormsDependencyRuleOutput>;
  OptiFormsNumberElement: Maybe<OptiFormsNumberElementOutput>;
  OptiFormsRangeElement: Maybe<OptiFormsRangeElementOutput>;
  OptiFormsResetElement: Maybe<OptiFormsResetElementOutput>;
  OptiFormsSelectionElement: Maybe<OptiFormsSelectionElementOutput>;
  OptiFormsSubmitElement: Maybe<OptiFormsSubmitElementOutput>;
  OptiFormsTextareaElement: Maybe<OptiFormsTextareaElementOutput>;
  OptiFormsTextboxElement: Maybe<OptiFormsTextboxElementOutput>;
  OptiFormsUrlElement: Maybe<OptiFormsUrlElementOutput>;
  Our_Work: Maybe<Our_WorkOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  RichTextBlock: Maybe<RichTextBlockOutput>;
  SearchPage: Maybe<SearchPageOutput>;
  SimpleContentBlock: Maybe<SimpleContentBlockOutput>;
  StartPage: Maybe<StartPageOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TileBlock: Maybe<TileBlockOutput>;
  TileItemBlock: Maybe<TileItemBlockOutput>;
  VideoBlock: Maybe<VideoBlockOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _AssetItem: Maybe<_AssetItemOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _ImageItem: Maybe<_ImageItemOutput>;
  _Item: Maybe<_ItemOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _TaxonomyTerm: Maybe<_TaxonomyTermOutput>;
  _Video: Maybe<_VideoOutput>;
  seoBlock: Maybe<SeoBlockOutput>;
};


export type QueryRefAccordionBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AccordionBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AccordionBlockWhereInput>;
};


export type QueryRefAccordionItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AccordionItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AccordionItemBlockWhereInput>;
};


export type QueryRefArticleExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleExperienceWhereInput>;
};


export type QueryRefArticleLandingPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleLandingPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleLandingPageWhereInput>;
};


export type QueryRefArticlePageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticlePageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticlePageWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefButtonBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ButtonBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryRefCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryRefCarouselBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CarouselBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryRefCarouselItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CarouselItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CarouselItemBlockWhereInput>;
};


export type QueryRefContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryRefCustom_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<Custom_ExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<Custom_ExperienceWhereInput>;
};


export type QueryRefDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DataWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefGlobalSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GlobalSettingsOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GlobalSettingsWhereInput>;
};


export type QueryRefHeadingBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeadingBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeadingBlockWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefImageBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageBlockWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLatestArticlesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LatestArticlesBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LatestArticlesBlockWhereInput>;
};


export type QueryRefLayoutSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LayoutSettingsOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LayoutSettingsWhereInput>;
};


export type QueryRefMenuItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MenuItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MenuItemBlockWhereInput>;
};


export type QueryRefMenuItemTopLevelBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MenuItemTopLevelBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MenuItemTopLevelBlockWhereInput>;
};


export type QueryRefOptiFormsChoiceElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsChoiceElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsChoiceElementWhereInput>;
};


export type QueryRefOptiFormsConditionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsConditionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsConditionWhereInput>;
};


export type QueryRefOptiFormsContainerDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsContainerDataOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsContainerDataWhereInput>;
};


export type QueryRefOptiFormsDependencyRuleArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsDependencyRuleOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsDependencyRuleWhereInput>;
};


export type QueryRefOptiFormsNumberElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsNumberElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsNumberElementWhereInput>;
};


export type QueryRefOptiFormsRangeElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsRangeElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsRangeElementWhereInput>;
};


export type QueryRefOptiFormsResetElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsResetElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsResetElementWhereInput>;
};


export type QueryRefOptiFormsSelectionElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsSelectionElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsSelectionElementWhereInput>;
};


export type QueryRefOptiFormsSubmitElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsSubmitElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsSubmitElementWhereInput>;
};


export type QueryRefOptiFormsTextareaElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsTextareaElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsTextareaElementWhereInput>;
};


export type QueryRefOptiFormsTextboxElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsTextboxElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsTextboxElementWhereInput>;
};


export type QueryRefOptiFormsUrlElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OptiFormsUrlElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OptiFormsUrlElementWhereInput>;
};


export type QueryRefOur_WorkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<Our_WorkOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<Our_WorkWhereInput>;
};


export type QueryRefParagraphElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ParagraphElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryRefRichTextBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<RichTextBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<RichTextBlockWhereInput>;
};


export type QueryRefSearchPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SearchPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SearchPageWhereInput>;
};


export type QueryRefSimpleContentBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SimpleContentBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SimpleContentBlockWhereInput>;
};


export type QueryRefStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StartPageWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TileBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TileBlockWhereInput>;
};


export type QueryRefTileItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TileItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TileItemBlockWhereInput>;
};


export type QueryRefVideoBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoBlockWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_AssetItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_AssetItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_AssetItemWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_ImageItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageItemWhereInput>;
};


export type QueryRef_ItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ItemWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_TaxonomyTermArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_TaxonomyTermOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_TaxonomyTermWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_VideoWhereInput>;
};


export type QueryRefSeoBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SeoBlockWhereInput>;
};

export type RangeFacetsInput = {
  from: InputMaybe<Scalars['Int']['input']>;
  to: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Id = 'ID',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html: Maybe<Scalars['String']['output']>;
  json: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'RichTextBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  text: Maybe<SearchableRichText>;
};


export type RichTextBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type RichTextBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type RichTextBlockAutocomplete = {
  __typename?: 'RichTextBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type RichTextBlockFacet = {
  __typename?: 'RichTextBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  text: Maybe<SearchableRichTextFacet>;
};

export type RichTextBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  text: InputMaybe<SearchableRichTextOrderByInput>;
};

export type RichTextBlockOutput = {
  __typename?: 'RichTextBlockOutput';
  autocomplete: Maybe<RichTextBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<RichTextBlockFacet>;
  item: Maybe<RichTextBlock>;
  items: Maybe<Array<Maybe<RichTextBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type RichTextBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type RichTextBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<RichTextBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<RichTextBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<RichTextBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  text: InputMaybe<SearchableRichTextWhereInput>;
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacetHtmlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html: InputMaybe<StringFilterInput>;
};

export type SearchPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'SearchPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  heading: Maybe<Scalars['String']['output']>;
  noSearchResultText: Maybe<Scalars['String']['output']>;
  seoProperties: Maybe<SeoBlockProperty>;
};


export type SearchPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SearchPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SearchPageAutocomplete = {
  __typename?: 'SearchPageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  seoProperties: Maybe<SeoBlockPropertyAutocomplete>;
};

export type SearchPageFacet = {
  __typename?: 'SearchPageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  seoProperties: Maybe<SeoBlockPropertyFacet>;
};

export type SearchPageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  seoProperties: InputMaybe<SeoBlockPropertyOrderByInput>;
};

export type SearchPageOutput = {
  __typename?: 'SearchPageOutput';
  autocomplete: Maybe<SearchPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SearchPageFacet>;
  item: Maybe<SearchPage>;
  items: Maybe<Array<Maybe<SearchPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SearchPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SearchPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SearchPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SearchPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SearchPageWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  seoProperties: InputMaybe<SeoBlockPropertyWhereInput>;
};

export type SearchableRichText = {
  __typename?: 'SearchableRichText';
  html: Maybe<Scalars['String']['output']>;
  json: Maybe<Scalars['JSON']['output']>;
};


export type SearchableRichTextHtmlArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type SearchableRichTextFacet = {
  __typename?: 'SearchableRichTextFacet';
  html: Maybe<Array<Maybe<StringFacet>>>;
};


export type SearchableRichTextFacetHtmlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SearchableRichTextOrderByInput = {
  html: InputMaybe<OrderBy>;
};

export type SearchableRichTextWhereInput = {
  html: InputMaybe<SearchableStringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SimpleContentBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'SimpleContentBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  mainContent: Maybe<RichText>;
  title: Maybe<Scalars['String']['output']>;
};


export type SimpleContentBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SimpleContentBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SimpleContentBlockAutocomplete = {
  __typename?: 'SimpleContentBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  mainContent: Maybe<RichTextAutocomplete>;
};

export type SimpleContentBlockFacet = {
  __typename?: 'SimpleContentBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  mainContent: Maybe<RichTextFacet>;
};

export type SimpleContentBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  mainContent: InputMaybe<RichTextOrderByInput>;
};

export type SimpleContentBlockOutput = {
  __typename?: 'SimpleContentBlockOutput';
  autocomplete: Maybe<SimpleContentBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SimpleContentBlockFacet>;
  item: Maybe<SimpleContentBlock>;
  items: Maybe<Array<Maybe<SimpleContentBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SimpleContentBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SimpleContentBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SimpleContentBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SimpleContentBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SimpleContentBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  mainContent: InputMaybe<RichTextWhereInput>;
};

export type SourceFilterInput = {
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Sources {
  Default = 'DEFAULT'
}

export type StartPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'StartPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  seoProperties: Maybe<SeoBlockProperty>;
  title: Maybe<Scalars['String']['output']>;
};


export type StartPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
  seoProperties: Maybe<SeoBlockPropertyAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
  seoProperties: Maybe<SeoBlockPropertyFacet>;
};

export type StartPageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
  seoProperties: InputMaybe<SeoBlockPropertyOrderByInput>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete: Maybe<StartPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StartPageFacet>;
  item: Maybe<StartPage>;
  items: Maybe<Array<Maybe<StartPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  blocks: InputMaybe<_IContentWhereInput>;
  seoProperties: InputMaybe<SeoBlockPropertyWhereInput>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & _IItem & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete: Maybe<SysContentFolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SysContentFolderFacet>;
  item: Maybe<SysContentFolder>;
  items: Maybe<Array<Maybe<SysContentFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type TileBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TileBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  items: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type TileBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TileBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TileBlockAutocomplete = {
  __typename?: 'TileBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  items: Maybe<_IContentAutocomplete>;
};

export type TileBlockFacet = {
  __typename?: 'TileBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  items: Maybe<_IContentFacet>;
};

export type TileBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  items: InputMaybe<_IContentOrderByInput>;
};

export type TileBlockOutput = {
  __typename?: 'TileBlockOutput';
  autocomplete: Maybe<TileBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TileBlockFacet>;
  item: Maybe<TileBlock>;
  items: Maybe<Array<Maybe<TileBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TileBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TileBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TileBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TileBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TileBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  items: InputMaybe<_IContentWhereInput>;
};

export type TileItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TileItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  buttonLink: Maybe<ContentUrl>;
  buttonLinkText: Maybe<Scalars['String']['output']>;
  content: Maybe<RichText>;
  image: Maybe<ContentReference>;
  title: Maybe<Scalars['String']['output']>;
};


export type TileItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TileItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TileItemBlockAutocomplete = {
  __typename?: 'TileItemBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  buttonLink: Maybe<ContentUrlAutocomplete>;
  content: Maybe<RichTextAutocomplete>;
  image: Maybe<ContentReferenceAutocomplete>;
};

export type TileItemBlockFacet = {
  __typename?: 'TileItemBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  buttonLink: Maybe<ContentUrlFacet>;
  content: Maybe<RichTextFacet>;
  image: Maybe<ContentReferenceFacet>;
};

export type TileItemBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  buttonLink: InputMaybe<ContentUrlOrderByInput>;
  content: InputMaybe<RichTextOrderByInput>;
  image: InputMaybe<ContentReferenceOrderByInput>;
};

export type TileItemBlockOutput = {
  __typename?: 'TileItemBlockOutput';
  autocomplete: Maybe<TileItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TileItemBlockFacet>;
  item: Maybe<TileItemBlock>;
  items: Maybe<Array<Maybe<TileItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TileItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TileItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TileItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TileItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TileItemBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  buttonLink: InputMaybe<ContentUrlWhereInput>;
  content: InputMaybe<RichTextWhereInput>;
  image: InputMaybe<ContentReferenceWhereInput>;
};

export type TrackingInput = {
  /** Search phrase to track */
  phrase: Scalars['String']['input'];
  /** Source of the search query (optional) */
  source: InputMaybe<Scalars['String']['input']>;
};

export enum VariationIncludeMode {
  All = 'ALL',
  None = 'NONE',
  Some = 'SOME'
}

export type VariationInput = {
  include: InputMaybe<VariationIncludeMode>;
  includeOriginal: InputMaybe<Scalars['Boolean']['input']>;
  value: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VideoBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'VideoBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  contentText: Maybe<Scalars['String']['output']>;
  contentTitle: Maybe<Scalars['String']['output']>;
  placeholder: Maybe<ContentReference>;
  video: Maybe<ContentReference>;
  videoTitle: Maybe<Scalars['String']['output']>;
  youTubeUrl: Maybe<Scalars['String']['output']>;
};


export type VideoBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoBlockAutocomplete = {
  __typename?: 'VideoBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  placeholder: Maybe<ContentReferenceAutocomplete>;
  video: Maybe<ContentReferenceAutocomplete>;
};

export type VideoBlockFacet = {
  __typename?: 'VideoBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  placeholder: Maybe<ContentReferenceFacet>;
  video: Maybe<ContentReferenceFacet>;
};

export type VideoBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  placeholder: InputMaybe<ContentReferenceOrderByInput>;
  video: InputMaybe<ContentReferenceOrderByInput>;
};

export type VideoBlockOutput = {
  __typename?: 'VideoBlockOutput';
  autocomplete: Maybe<VideoBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoBlockFacet>;
  item: Maybe<VideoBlock>;
  items: Maybe<Array<Maybe<VideoBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  placeholder: InputMaybe<ContentReferenceWhereInput>;
  video: InputMaybe<ContentReferenceWhereInput>;
};

export type VideoMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete: Maybe<VideoMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoMediaFacet>;
  item: Maybe<VideoMedia>;
  items: Maybe<Array<Maybe<VideoMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _AssetItem = IData & _IAssetItem & _IItem & {
  __typename?: '_AssetItem';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _AssetItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _AssetItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _AssetItemAutocomplete = {
  __typename?: '_AssetItemAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
};

export type _AssetItemFacet = {
  __typename?: '_AssetItemFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
};

export type _AssetItemOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _AssetItemOutput = {
  __typename?: '_AssetItemOutput';
  autocomplete: Maybe<_AssetItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_AssetItemFacet>;
  item: Maybe<_IAssetItem>;
  items: Maybe<Array<Maybe<_IAssetItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _AssetItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _AssetItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _AssetMetadata = {
  __typename?: '_AssetMetadata';
  fileSize: Maybe<Scalars['Float']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type _AssetMetadataAutocomplete = {
  __typename?: '_AssetMetadataAutocomplete';
  mimeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _AssetMetadataAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _AssetMetadataAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _AssetMetadataFacet = {
  __typename?: '_AssetMetadataFacet';
  fileSize: Maybe<Array<Maybe<NumberFacet>>>;
  mimeType: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<Array<Maybe<StringFacet>>>;
};


export type _AssetMetadataFacetFileSizeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _AssetMetadataFacetMimeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _AssetMetadataFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _AssetMetadataOrderByInput = {
  fileSize: InputMaybe<OrderBy>;
  mimeType: InputMaybe<OrderBy>;
  url: InputMaybe<OrderBy>;
};

export type _AssetMetadataWhereInput = {
  fileSize: InputMaybe<FloatFilterInput>;
  mimeType: InputMaybe<StringFilterInput>;
  url: InputMaybe<StringFilterInput>;
};

export type _Component = IData & _IComponent & _IContent & _IItem & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Component_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete: Maybe<_ComponentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ComponentFacet>;
  item: Maybe<_IComponent>;
  items: Maybe<Array<Maybe<_IComponent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Content = IData & _IContent & _IItem & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Content_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete: Maybe<_ContentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ContentFacet>;
  item: Maybe<_IContent>;
  items: Maybe<Array<Maybe<_IContent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Experience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete: Maybe<_ExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ExperienceFacet>;
  item: Maybe<_IExperience>;
  items: Maybe<Array<Maybe<_IExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & _IItem & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete: Maybe<_FolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_FolderFacet>;
  item: Maybe<_IFolder>;
  items: Maybe<Array<Maybe<_IFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _IAssetItem = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IAssetItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IAssetItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IComponentFacet = {
  __typename?: '_IComponentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _IComponentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _IComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IImage = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IImageItem = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IImageItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IImageItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IItem = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IVideo_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IVideo_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: '_Image';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Image_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _imageMetadata: Maybe<_ImageMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ImageItem = IData & _IAssetItem & _IImageItem & _IItem & {
  __typename?: '_ImageItem';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _ImageItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _ImageItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ImageItemAutocomplete = {
  __typename?: '_ImageItemAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
};

export type _ImageItemFacet = {
  __typename?: '_ImageItemFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _imageMetadata: Maybe<_ImageMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
};

export type _ImageItemOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageItemOutput = {
  __typename?: '_ImageItemOutput';
  autocomplete: Maybe<_ImageItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ImageItemFacet>;
  item: Maybe<_IImageItem>;
  items: Maybe<Array<Maybe<_IImageItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ImageItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _ImageMetadata = {
  __typename?: '_ImageMetadata';
  height: Maybe<Scalars['Int']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

export type _ImageMetadataFacet = {
  __typename?: '_ImageMetadataFacet';
  height: Maybe<Array<Maybe<NumberFacet>>>;
  width: Maybe<Array<Maybe<NumberFacet>>>;
};


export type _ImageMetadataFacetHeightArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _ImageMetadataFacetWidthArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type _ImageMetadataOrderByInput = {
  height: InputMaybe<OrderBy>;
  width: InputMaybe<OrderBy>;
};

export type _ImageMetadataWhereInput = {
  height: InputMaybe<IntFilterInput>;
  width: InputMaybe<IntFilterInput>;
};

export type _ImageOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete: Maybe<_ImageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ImageFacet>;
  item: Maybe<_IImage>;
  items: Maybe<Array<Maybe<_IImage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Item = IData & _IItem & {
  __typename?: '_Item';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Item_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Item_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ItemAutocomplete = {
  __typename?: '_ItemAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
};

export type _ItemFacet = {
  __typename?: '_ItemFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
};

export type _ItemOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ItemOutput = {
  __typename?: '_ItemOutput';
  autocomplete: Maybe<_ItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ItemFacet>;
  item: Maybe<_IItem>;
  items: Maybe<Array<Maybe<_IItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Media = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: '_Media';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Media_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete: Maybe<_MediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_MediaFacet>;
  item: Maybe<_IMedia>;
  items: Maybe<Array<Maybe<_IMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Metadata = {
  __typename?: '_Metadata';
  categories: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displayName: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  type: Maybe<Scalars['String']['output']>;
};


export type _MetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type _MetadataAutocomplete = {
  __typename?: '_MetadataAutocomplete';
  categories: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _MetadataAutocompleteCategoriesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _MetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _MetadataAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _MetadataFacet = {
  __typename?: '_MetadataFacet';
  categories: Maybe<Array<Maybe<StringFacet>>>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  lastModified: Maybe<Array<Maybe<DateFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type _MetadataFacetCategoriesArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value: InputMaybe<Scalars['Int']['input']>;
};


export type _MetadataFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _MetadataOrderByInput = {
  categories: InputMaybe<OrderBy>;
  displayName: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  lastModified: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type _MetadataWhereInput = {
  categories: InputMaybe<StringFilterInput>;
  displayName: InputMaybe<SearchableStringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  lastModified: InputMaybe<DateFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type _Page = IData & _IContent & _IItem & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Page_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete: Maybe<_PageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_PageFacet>;
  item: Maybe<_IPage>;
  items: Maybe<Array<Maybe<_IPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Section = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete: Maybe<_SectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_SectionFacet>;
  item: Maybe<_ISection>;
  items: Maybe<Array<Maybe<_ISection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _TaxonomyTerm = IData & {
  __typename?: '_TaxonomyTerm';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<_TaxonomyTermMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _TaxonomyTerm_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _TaxonomyTerm_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _TaxonomyTermAutocomplete = {
  __typename?: '_TaxonomyTermAutocomplete';
  _metadata: Maybe<_TaxonomyTermMetadataAutocomplete>;
};

export type _TaxonomyTermFacet = {
  __typename?: '_TaxonomyTermFacet';
  _metadata: Maybe<_TaxonomyTermMetadataFacet>;
};

export type _TaxonomyTermMetadata = {
  __typename?: '_TaxonomyTermMetadata';
  description: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  parent: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  taxonomy: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  usage: Maybe<Scalars['String']['output']>;
};


export type _TaxonomyTermMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type _TaxonomyTermMetadataAutocomplete = {
  __typename?: '_TaxonomyTermMetadataAutocomplete';
  description: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  parent: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  taxonomy: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  usage: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _TaxonomyTermMetadataAutocompleteDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _TaxonomyTermMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _TaxonomyTermMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _TaxonomyTermMetadataAutocompleteParentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _TaxonomyTermMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _TaxonomyTermMetadataAutocompleteTaxonomyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _TaxonomyTermMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _TaxonomyTermMetadataAutocompleteUsageArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _TaxonomyTermMetadataFacet = {
  __typename?: '_TaxonomyTermMetadataFacet';
  description: Maybe<Array<Maybe<StringFacet>>>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  locale: Maybe<Array<Maybe<StringFacet>>>;
  parent: Maybe<Array<Maybe<StringFacet>>>;
  status: Maybe<Array<Maybe<StringFacet>>>;
  taxonomy: Maybe<Array<Maybe<StringFacet>>>;
  types: Maybe<Array<Maybe<StringFacet>>>;
  usage: Maybe<Array<Maybe<StringFacet>>>;
};


export type _TaxonomyTermMetadataFacetDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _TaxonomyTermMetadataFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _TaxonomyTermMetadataFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _TaxonomyTermMetadataFacetLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _TaxonomyTermMetadataFacetParentArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _TaxonomyTermMetadataFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _TaxonomyTermMetadataFacetTaxonomyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _TaxonomyTermMetadataFacetTypesArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _TaxonomyTermMetadataFacetUsageArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _TaxonomyTermMetadataOrderByInput = {
  description: InputMaybe<OrderBy>;
  displayName: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  locale: InputMaybe<OrderBy>;
  parent: InputMaybe<OrderBy>;
  status: InputMaybe<OrderBy>;
  taxonomy: InputMaybe<OrderBy>;
  types: InputMaybe<OrderBy>;
  usage: InputMaybe<OrderBy>;
};

export type _TaxonomyTermMetadataWhereInput = {
  description: InputMaybe<StringFilterInput>;
  displayName: InputMaybe<SearchableStringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  locale: InputMaybe<StringFilterInput>;
  parent: InputMaybe<StringFilterInput>;
  status: InputMaybe<StringFilterInput>;
  taxonomy: InputMaybe<StringFilterInput>;
  types: InputMaybe<StringFilterInput>;
  usage: InputMaybe<StringFilterInput>;
};

export type _TaxonomyTermOrderByInput = {
  _metadata: InputMaybe<_TaxonomyTermMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _TaxonomyTermOutput = {
  __typename?: '_TaxonomyTermOutput';
  autocomplete: Maybe<_TaxonomyTermAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_TaxonomyTermFacet>;
  item: Maybe<_TaxonomyTerm>;
  items: Maybe<Array<Maybe<_TaxonomyTerm>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _TaxonomyTermOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _TaxonomyTermWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_TaxonomyTermWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<_TaxonomyTermMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_TaxonomyTermWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_TaxonomyTermWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Video = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: '_Video';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Video_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete: Maybe<_VideoAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_VideoFacet>;
  item: Maybe<_IVideo>;
  items: Maybe<Array<Maybe<_IVideo>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type SeoBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'seoBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  seoDescription: Maybe<Scalars['String']['output']>;
  seoImage: Maybe<ContentReference>;
  seoRobotsNoFollow: Maybe<Scalars['Boolean']['output']>;
  seoRobotsNoIndex: Maybe<Scalars['Boolean']['output']>;
  seoTitle: Maybe<Scalars['String']['output']>;
};


export type SeoBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SeoBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SeoBlockAutocomplete = {
  __typename?: 'seoBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  seoImage: Maybe<ContentReferenceAutocomplete>;
};

export type SeoBlockFacet = {
  __typename?: 'seoBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  seoImage: Maybe<ContentReferenceFacet>;
};

export type SeoBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  seoImage: InputMaybe<ContentReferenceOrderByInput>;
};

export type SeoBlockOutput = {
  __typename?: 'seoBlockOutput';
  autocomplete: Maybe<SeoBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SeoBlockFacet>;
  item: Maybe<SeoBlock>;
  items: Maybe<Array<Maybe<SeoBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SeoBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeoBlockProperty = {
  __typename?: 'seoBlockProperty';
  seoDescription: Maybe<Scalars['String']['output']>;
  seoImage: Maybe<ContentReference>;
  seoRobotsNoFollow: Maybe<Scalars['Boolean']['output']>;
  seoRobotsNoIndex: Maybe<Scalars['Boolean']['output']>;
  seoTitle: Maybe<Scalars['String']['output']>;
};

export type SeoBlockPropertyAutocomplete = {
  __typename?: 'seoBlockPropertyAutocomplete';
  seoImage: Maybe<ContentReferenceAutocomplete>;
};

export type SeoBlockPropertyFacet = {
  __typename?: 'seoBlockPropertyFacet';
  seoImage: Maybe<ContentReferenceFacet>;
};

export type SeoBlockPropertyOrderByInput = {
  seoImage: InputMaybe<ContentReferenceOrderByInput>;
};

export type SeoBlockPropertyWhereInput = {
  seoImage: InputMaybe<ContentReferenceWhereInput>;
};

export type SeoBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SeoBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SeoBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SeoBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  seoImage: InputMaybe<ContentReferenceWhereInput>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type UsePinnedInput = {
  collectionId: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase: InputMaybe<Scalars['String']['input']>;
};

export type GetContentByGuidQueryVariables = Exact<{
  guid: string;
}>;


export type GetContentByGuidQuery = { _Content: { items: Array<
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { title: string | null, _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
      | { _metadata:
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
          | { displayName: string | null, key: string | null, types: Array<string | null> | null }
         | null }
     | null> | null } | null };


export const GetContentByGuidDocument = gql`
    query GetContentByGuid($guid: String!) {
  _Content(where: {_metadata: {key: {eq: $guid}}}) {
    items {
      ... on StartPage {
        title
      }
      _metadata {
        displayName
        key
        types
      }
    }
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<ExecutionResult<R, E>> | AsyncIterable<ExecutionResult<R, E>>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetContentByGuid(variables: GetContentByGuidQueryVariables, options?: C): Promise<ExecutionResult<GetContentByGuidQuery, E>> {
      return requester<GetContentByGuidQuery, GetContentByGuidQueryVariables>(GetContentByGuidDocument, variables, options) as Promise<ExecutionResult<GetContentByGuidQuery, E>>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;