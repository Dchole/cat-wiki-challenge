import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  breeds: Array<Breed>;
  breed: Breed;
};


export type QueryBreedsArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<Sort>;
};


export type QueryBreedArgs = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  insertBreeds?: Maybe<Array<Maybe<StoredBreeds>>>;
};

export type Breed = {
  __typename?: 'Breed';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  temperament: Scalars['String'];
  origin: Scalars['String'];
  lifeSpan: Scalars['String'];
  adaptability: Scalars['Int'];
  affectionLevel: Scalars['Int'];
  childFriendly: Scalars['Int'];
  grooming: Scalars['Int'];
  intelligence: Scalars['Int'];
  healthIssues: Scalars['Int'];
  socialNeeds: Scalars['Int'];
  strangerFriendly: Scalars['Int'];
  image: Scalars['String'];
  photos: Array<Image>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  url: Scalars['String'];
};

export type StoredBreeds = {
  __typename?: 'StoredBreeds';
  _id: Scalars['ID'];
};

export enum Sort {
  Recent = 'RECENT',
  Popular = 'POPULAR'
}

export enum Order {
  Desc = 'DESC',
  Acs = 'ACS'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  Breed: ResolverTypeWrapper<Breed>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Image: ResolverTypeWrapper<Image>;
  StoredBreeds: ResolverTypeWrapper<StoredBreeds>;
  Sort: Sort;
  Order: Order;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  String: Scalars['String'];
  Mutation: {};
  Breed: Breed;
  ID: Scalars['ID'];
  Image: Image;
  StoredBreeds: StoredBreeds;
  Boolean: Scalars['Boolean'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  breeds?: Resolver<Array<ResolversTypes['Breed']>, ParentType, ContextType, RequireFields<QueryBreedsArgs, never>>;
  breed?: Resolver<ResolversTypes['Breed'], ParentType, ContextType, RequireFields<QueryBreedArgs, 'name'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  insertBreeds?: Resolver<Maybe<Array<Maybe<ResolversTypes['StoredBreeds']>>>, ParentType, ContextType>;
};

export type BreedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Breed'] = ResolversParentTypes['Breed']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  temperament?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lifeSpan?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  adaptability?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  affectionLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  childFriendly?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  grooming?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  intelligence?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  healthIssues?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  socialNeeds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  strangerFriendly?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photos?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoredBreedsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoredBreeds'] = ResolversParentTypes['StoredBreeds']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Breed?: BreedResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  StoredBreeds?: StoredBreedsResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
