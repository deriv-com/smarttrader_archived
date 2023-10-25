import type {
    AccountLimitsRequest,
    AccountLimitsResponse,
    AccountStatusRequest,
    AccountStatusResponse,
    ActiveSymbolsRequest,
    ActiveSymbolsResponse,
    APITokenRequest,
    APITokenResponse,
    ApplicationDeleteRequest,
    ApplicationDeleteResponse,
    ApplicationGetDetailsRequest,
    ApplicationGetDetailsResponse,
    ApplicationListRequest,
    ApplicationListResponse,
    ApplicationMarkupDetailsRequest,
    ApplicationMarkupDetailsResponse,
    ApplicationMarkupStatisticsRequest,
    ApplicationMarkupStatisticsResponse,
    ApplicationRegisterRequest,
    ApplicationRegisterResponse,
    ApplicationUpdateRequest,
    ApplicationUpdateResponse,
    AssetIndexRequest,
    AssetIndexResponse,
    AuthorizeRequest,
    AuthorizeResponse,
    BalanceRequest,
    BalanceResponse,
    BuyContractForMultipleAccountsRequest,
    BuyContractForMultipleAccountsResponse,
    BuyContractRequest,
    BuyContractResponse,
    CancelAContractRequest,
    CancelAContractResponse,
    CashierInformationRequest,
    CashierInformationResponse,
    ContractsForSymbolRequest,
    ContractsForSymbolResponse,
    CountriesListRequest,
    CountriesListResponse,
    CryptocurrencyConfigurationsRequest,
    CryptocurrencyConfigurationsResponse,
    ExchangeRatesRequest,
    ExchangeRatesResponse,
    ForgetAllRequest,
    ForgetAllResponse,
    ForgetRequest,
    ForgetResponse,
    GetAccountSettingsRequest,
    GetAccountSettingsResponse,
    GetFinancialAssessmentRequest,
    GetFinancialAssessmentResponse,
    GetSelfExclusionRequest,
    GetSelfExclusionResponse,
    LandingCompanyDetailsRequest,
    LandingCompanyDetailsResponse,
    LandingCompanyRequest,
    LandingCompanyResponse,
    LoginHistoryRequest,
    LoginHistoryResponse,
    LogOutRequest,
    LogOutResponse,
    NewRealMoneyAccountDefaultLandingCompanyRequest,
    NewRealMoneyAccountDefaultLandingCompanyResponse,
    NewRealMoneyAccountDerivInvestmentEuropeLtdRequest,
    NewRealMoneyAccountDerivInvestmentEuropeLtdResponse,
    NewVirtualMoneyAccountRequest,
    NewVirtualMoneyAccountResponse,
    OAuthApplicationsRequest,
    OAuthApplicationsResponse,
    PaymentMethodsRequest,
    PaymentMethodsResponse,
    PayoutCurrenciesRequest,
    PayoutCurrenciesResponse,
    PingRequest,
    PingResponse,
    PortfolioRequest,
    PortfolioResponse,
    PriceProposalOpenContractsRequest,
    PriceProposalOpenContractsResponse,
    PriceProposalRequest,
    PriceProposalResponse,
    ProfitTableRequest,
    ProfitTableResponse,
    RealityCheckRequest,
    RealityCheckResponse,
    RevokeOauthApplicationRequest,
    RevokeOauthApplicationResponse,
    SellContractRequest,
    SellContractResponse,
    SellContractsMultipleAccountsRequest,
    SellContractsMultipleAccountsResponse,
    SellExpiredContractsRequest,
    SellExpiredContractsResponse,
    ServerListRequest,
    ServerListResponse,
    ServerStatusRequest,
    ServerStatusResponse,
    ServerTimeRequest,
    ServerTimeResponse,
    SetAccountCurrencyRequest,
    SetAccountCurrencyResponse,
    SetAccountSettingsRequest,
    SetAccountSettingsResponse,
    SetFinancialAssessmentRequest,
    SetFinancialAssessmentResponse,
    SetSelfExclusionRequest,
    SetSelfExclusionResponse,
    StatementRequest,
    StatementResponse,
    StatesListRequest,
    StatesListResponse,
    TicksHistoryRequest,
    TicksHistoryResponse,
    TicksStreamRequest,
    TicksStreamResponse,
    TopUpVirtualMoneyAccountRequest,
    TopUpVirtualMoneyAccountResponse,
    TradingDurationsRequest,
    TradingDurationsResponse,
    TradingPlatformInvestorPasswordResetRequest,
    TradingPlatformInvestorPasswordResetResponse,
    TradingPlatformPasswordResetRequest,
    TradingPlatformPasswordResetResponse,
    TradingTimesRequest,
    TradingTimesResponse,
    TransactionsStreamRequest,
    TransactionsStreamResponse,
    TransferBetweenAccountsRequest,
    TransferBetweenAccountsResponse,
    UpdateContractHistoryRequest,
    UpdateContractHistoryResponse,
    UpdateContractRequest,
    UpdateContractResponse,
} from '@deriv/api-types';
import type { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

type TPrivateSocketEndpoints = {
    get_account_types: {
        request: {
            /**
             * Must be `1`
             */
            get_account_types: 1;
            /**
             * [Optional] Set to landing company to get relevant account types. If not set, this defaults to current account landing company
             */
            company?: string;
            /**
             * [Optional] Used to pass data through the websocket, which may be retrieved via the `echo_req` output field. Maximum size is 3500 bytes.
             */
            passthrough?: {
                [k: string]: unknown;
            };
            /**
             * [Optional] Used to map request to response.
             */
            req_id?: number;
        };
        response: {
            get_account_types?: {
                /**
                 * Trading account types that are available to create or link to
                 */
                trading: {
                    /**
                     * Details for trading account types
                     *
                     * This interface was referenced by `undefined`'s JSON-Schema definition
                     * via the `patternProperty` "^(binary|dxtrade|mt5|standard|derivez)$".
                     */
                    [k: string]: {
                        /**
                         * Wallet currencies allowed for this trading account
                         */
                        allowed_wallet_currencies: string[];
                        /**
                         * Can this trading account linked to another currency after opening
                         */
                        linkable_to_different_currency: 0 | 1;
                        /**
                         * Wallet types that this trading account can be linked to.
                         */
                        linkable_wallet_types: string[];
                    };
                };
                /**
                 * Wallet accounts types that are available to create or link to
                 */
                wallet: {
                    /**
                     * Details for wallets account types
                     *
                     * This interface was referenced by `undefined`'s JSON-Schema definition
                     * via the `patternProperty` "^(affiliate|crypto|doughflow|p2p|paymentagent|paymentagent_client|virtual)$".
                     */
                    [k: string]: {
                        /**
                         * Allowed currencies for creating accounts of this type; used or disallowed currencies are not listed.
                         */
                        currencies: string[];
                    };
                };
            };
            /**
             * Echo of the request made.
             */
            echo_req: {
                [k: string]: unknown;
            };
            /**
             * Action name of the request made.
             */
            msg_type: 'get_account_types';
            /**
             * Optional field sent in request to map to response, present only when request contains `req_id`.
             */
            req_id?: number;
            [k: string]: unknown;
        };
    };
    service_token: {
        request: {
            /**
             * Must be `1`
             */
            service_token: 1;
            /**
             * [Optional] The 2-letter country code.
             */
            country?: string;
            /**
             * [Optional] The URL of the web page where the Web SDK will be used.
             */
            referrer?: string;
            /**
             * Server (dxtrade and derivez).
             */
            server?: 'demo' | 'real';
            /**
             * The service(s) to retrieve token(s) for.
             */
            service:
                | ('onfido' | 'sendbird' | 'banxa' | 'wyre' | 'dxtrade' | 'pandats' | 'ctrader')
                | ('onfido' | 'sendbird' | 'banxa' | 'wyre' | 'pandats')[];
            /**
             * [Optional] Used to pass data through the websocket, which may be retrieved via the `echo_req` output field. Maximum size is 3500 bytes.
             */
            passthrough?: {
                [k: string]: unknown;
            };
            /**
             * [Optional] Used to map request to response.
             */
            req_id?: number;
        };
        response: {
            /**
             * Service specific tokens and data.
             */
            service_token?: {
                /**
                 * Banxa order data.
                 */
                banxa?: {
                    /**
                     * Created order id reference token.
                     */
                    token?: string;
                    /**
                     * Banxa order checkout url.
                     */
                    url?: string;
                    /**
                     * Banxa order checkout iframe url.
                     */
                    url_iframe?: string;
                };
                /**
                 * CTrader data.
                 */
                ctrader?: {
                    /**
                     * CTrader One Time token
                     */
                    token?: string;
                };
                /**
                 * Deriv X data.
                 */
                dxtrade?: {
                    /**
                     * Deriv X login token.
                     */
                    token?: string;
                };
                /**
                 * Onfido data.
                 */
                onfido?: {
                    /**
                     * Onfido token.
                     */
                    token?: string;
                };
                /**
                 * Deriv EZ data.
                 */
                pandats?: {
                    /**
                     * Deriv EZ SSO token
                     */
                    token?: string;
                };
                /**
                 * Sendbird data.
                 */
                sendbird?: {
                    /**
                     * Sendbird application ID.
                     */
                    app_id?: string;
                    /**
                     * The epoch time in which the token will be expired. Note: the token could be expired sooner than this, due to different reasons.
                     */
                    expiry_time?: number;
                    /**
                     * Sendbird token.
                     */
                    token?: string;
                };
                /**
                 * Wyre reservation data.
                 */
                wyre?: {
                    /**
                     * Wyre reservation id token
                     */
                    token?: string;
                    /**
                     * Wyre reservation URL
                     */
                    url?: string;
                };
            };
        };
        /**
         * Echo of the request made.
         */
        echo_req: {
            [k: string]: unknown;
        };
        /**
         * Action name of the request made.
         */
        msg_type: 'service_token';
        /**
         * Optional field sent in request to map to response, present only when request contains `req_id`.
         */
        req_id?: number;
        [k: string]: unknown;
    };
};

type TSocketEndpoints = {
    active_symbols: {
        request: ActiveSymbolsRequest;
        response: ActiveSymbolsResponse;
    };
    api_token: {
        request: APITokenRequest;
        response: APITokenResponse;
    };
    app_delete: {
        request: ApplicationDeleteRequest;
        response: ApplicationDeleteResponse;
    };
    app_get: {
        request: ApplicationGetDetailsRequest;
        response: ApplicationGetDetailsResponse;
    };
    app_list: {
        request: ApplicationListRequest;
        response: ApplicationListResponse;
    };
    app_markup_details: {
        request: ApplicationMarkupDetailsRequest;
        response: ApplicationMarkupDetailsResponse;
    };
    app_markup_statistics: {
        request: ApplicationMarkupStatisticsRequest;
        response: ApplicationMarkupStatisticsResponse;
    };
    app_register: {
        request: ApplicationRegisterRequest;
        response: ApplicationRegisterResponse;
    };
    app_update: {
        request: ApplicationUpdateRequest;
        response: ApplicationUpdateResponse;
    };
    asset_index: {
        request: AssetIndexRequest;
        response: AssetIndexResponse;
    };
    authorize: {
        request: AuthorizeRequest;
        response: AuthorizeResponse;
    };
    balance: {
        request: BalanceRequest;
        response: BalanceResponse;
    };
    buy_contract_for_multiple_accounts: {
        request: BuyContractForMultipleAccountsRequest;
        response: BuyContractForMultipleAccountsResponse;
    };
    buy: {
        request: BuyContractRequest;
        response: BuyContractResponse;
    };
    cancel: {
        request: CancelAContractRequest;
        response: CancelAContractResponse;
    };
    cashier: {
        request: CashierInformationRequest;
        response: CashierInformationResponse;
    };
    contract_update_history: {
        request: UpdateContractHistoryRequest;
        response: UpdateContractHistoryResponse;
    };
    contract_update: {
        request: UpdateContractRequest;
        response: UpdateContractResponse;
    };
    contracts_for: {
        request: ContractsForSymbolRequest;
        response: ContractsForSymbolResponse;
    };
    crypto_config: {
        request: CryptocurrencyConfigurationsRequest;
        response: CryptocurrencyConfigurationsResponse;
    };
    exchange_rates: {
        request: ExchangeRatesRequest;
        response: ExchangeRatesResponse;
    };
    forget_all: {
        request: ForgetAllRequest;
        response: ForgetAllResponse;
    };
    forget: {
        request: ForgetRequest;
        response: ForgetResponse;
    };
    get_account_status: {
        request: AccountStatusRequest;
        response: AccountStatusResponse;
    };
    get_financial_assessment: {
        request: GetFinancialAssessmentRequest;
        response: GetFinancialAssessmentResponse;
    };
    get_limits: {
        request: AccountLimitsRequest;
        response: AccountLimitsResponse;
    };
    get_self_exclusion: {
        request: GetSelfExclusionRequest;
        response: GetSelfExclusionResponse;
    };
    get_settings: {
        request: GetAccountSettingsRequest;
        response: GetAccountSettingsResponse;
    };
    landing_company_details: {
        request: LandingCompanyDetailsRequest;
        response: LandingCompanyDetailsResponse;
    };
    landing_company: {
        // TODO: Fix typings of this endpoint, because landing_company payload should be a string instead of LandingCompany interface
        request: Omit<LandingCompanyRequest, 'landing_company'> & {
            /** Client's 2-letter country code (obtained from `residence_list` call). */
            landing_company: string;
        };
        response: LandingCompanyResponse;
    };
    login_history: {
        request: LoginHistoryRequest;
        response: LoginHistoryResponse;
    };
    logout: {
        request: LogOutRequest;
        response: LogOutResponse;
    };
    new_account_maltainvest: {
        request: NewRealMoneyAccountDerivInvestmentEuropeLtdRequest;
        response: NewRealMoneyAccountDerivInvestmentEuropeLtdResponse;
    };
    new_account_real: {
        request: NewRealMoneyAccountDefaultLandingCompanyRequest;
        response: NewRealMoneyAccountDefaultLandingCompanyResponse;
    };
    new_account_virtual: {
        request: NewVirtualMoneyAccountRequest;
        response: NewVirtualMoneyAccountResponse;
    };
    oauth_apps: {
        request: OAuthApplicationsRequest;
        response: OAuthApplicationsResponse;
    };
    payment_methods: {
        request: PaymentMethodsRequest;
        response: PaymentMethodsResponse;
    };
    payout_currencies: {
        request: PayoutCurrenciesRequest;
        response: PayoutCurrenciesResponse;
    };
    ping: {
        request: PingRequest;
        response: PingResponse;
    };
    portfolio: {
        request: PortfolioRequest;
        response: PortfolioResponse;
    };
    profit_table: {
        request: ProfitTableRequest;
        response: ProfitTableResponse;
    };
    proposal_open_contract: {
        request: PriceProposalOpenContractsRequest;
        response: PriceProposalOpenContractsResponse;
    };
    proposal: {
        request: PriceProposalRequest;
        response: PriceProposalResponse;
    };
    reality_check: {
        request: RealityCheckRequest;
        response: RealityCheckResponse;
    };
    residence_list: {
        request: CountriesListRequest;
        response: CountriesListResponse;
    };
    revoke_oauth_app: {
        request: RevokeOauthApplicationRequest;
        response: RevokeOauthApplicationResponse;
    };
    sell_contract_for_multiple_accounts: {
        request: SellContractsMultipleAccountsRequest;
        response: SellContractsMultipleAccountsResponse;
    };
    sell_expired: {
        request: SellExpiredContractsRequest;
        response: SellExpiredContractsResponse;
    };
    sell: {
        request: SellContractRequest;
        response: SellContractResponse;
    };
    set_account_currency: {
        request: SetAccountCurrencyRequest;
        response: SetAccountCurrencyResponse;
    };
    set_financial_assessment: {
        request: SetFinancialAssessmentRequest;
        response: SetFinancialAssessmentResponse;
    };
    set_self_exclusion: {
        request: SetSelfExclusionRequest;
        response: SetSelfExclusionResponse;
    };
    set_settings: {
        request: SetAccountSettingsRequest;
        response: SetAccountSettingsResponse;
    };
    statement: {
        request: StatementRequest;
        response: StatementResponse;
    };
    states_list: {
        request: StatesListRequest;
        response: StatesListResponse;
    };
    ticks_history: {
        request: TicksHistoryRequest;
        response: TicksHistoryResponse;
    };
    ticks: {
        request: TicksStreamRequest;
        response: TicksStreamResponse;
    };
    time: {
        request: ServerTimeRequest;
        response: ServerTimeResponse;
    };
    topup_virtual: {
        request: TopUpVirtualMoneyAccountRequest;
        response: TopUpVirtualMoneyAccountResponse;
    };
    trading_durations: {
        request: TradingDurationsRequest;
        response: TradingDurationsResponse;
    };
    trading_platform_investor_password_reset: {
        request: TradingPlatformInvestorPasswordResetRequest;
        response: TradingPlatformInvestorPasswordResetResponse;
    };
    trading_platform_password_reset: {
        request: TradingPlatformPasswordResetRequest;
        response: TradingPlatformPasswordResetResponse;
    };
    trading_servers: {
        request: ServerListRequest;
        response: ServerListResponse;
    };
    trading_times: {
        request: TradingTimesRequest;
        response: TradingTimesResponse;
    };
    transaction: {
        request: TransactionsStreamRequest;
        response: TransactionsStreamResponse;
    };
    transfer_between_accounts: {
        request: TransferBetweenAccountsRequest;
        response: TransferBetweenAccountsResponse;
    };
    website_status: {
        request: ServerStatusRequest;
        response: ServerStatusResponse;
    };
} & TPrivateSocketEndpoints;

export type TSocketEndpointNames = keyof TSocketEndpoints;

export type TSocketSubscribableEndpointNames =
    | KeysMatching<TSocketEndpoints, { request: { subscribe?: number } }>
    | 'exchange_rates';

export type TSocketResponse<T extends TSocketEndpointNames> = TSocketEndpoints[T]['response'];

export type TSocketResponseData<T extends TSocketEndpointNames> = Omit<
    NoStringIndex<TSocketResponse<T>>,
    'req_id' | 'msg_type' | 'echo_req' | 'subscription'
>;

type TSocketRequest<T extends TSocketEndpointNames> = TSocketEndpoints[T]['request'];

type TRemovableEndpointName<T extends TSocketEndpointNames> = T extends KeysMatching<TSocketRequest<T>, 1> ? T : never;

type TSocketRequestCleaned<T extends TSocketEndpointNames> = Omit<
    TSocketRequest<T>,
    TRemovableEndpointName<T> | 'passthrough' | 'req_id' | 'subscribe'
>;

export type TSocketPaginatateableRequestCleaned<T extends TSocketPaginateableEndpointNames> = Omit<
    TSocketRequest<T>,
    TRemovableEndpointName<T> | 'passthrough' | 'req_id' | 'subscribe'
> & {
    /** Number of records to skip */
    offset?: number;
    /** Number of records to return */
    limit?: number;
};

export type TSocketRequestPayload<
    T extends TSocketEndpointNames | TSocketPaginateableEndpointNames = TSocketEndpointNames,
> = Partial<TSocketRequestCleaned<T>> extends TSocketRequestCleaned<T>
    ? {
          payload?: T extends TSocketPaginateableEndpointNames
              ? TSocketPaginatateableRequestCleaned<T>
              : TSocketRequestCleaned<T>;
      }
    : {
          payload: T extends TSocketPaginateableEndpointNames
              ? TSocketPaginatateableRequestCleaned<T>
              : TSocketRequestCleaned<T>;
      };

export type TSocketRequestQueryOptions<T extends TSocketEndpointNames> = Parameters<
    typeof useQuery<TSocketResponseData<T>, unknown>
>[2];

export type TSocketRequestInfiniteQueryOptions<T extends TSocketEndpointNames> = Parameters<
    typeof useInfiniteQuery<TSocketResponseData<T>, unknown>
>[2];

export type TSocketRequestMutationOptions<T extends TSocketEndpointNames> = Parameters<
    typeof useMutation<TSocketResponseData<T>, unknown, TSocketAcceptableProps<T>>
>[2];

type TSocketRequestWithOptions<
    T extends TSocketEndpointNames,
    O extends boolean = false,
    OT extends 'useQuery' | 'useInfiniteQuery' = 'useQuery',
> = Omit<
    TSocketRequestPayload<T> & {
        options?: OT extends 'useQuery' ? TSocketRequestQueryOptions<T> : TSocketRequestInfiniteQueryOptions<T>;
    },
    | (TSocketRequestPayload<T>['payload'] extends Record<string, never> ? 'payload' : never)
    | (TNever<TSocketRequestPayload<T>['payload']> extends undefined ? 'payload' : never)
    | (O extends true ? never : 'options')
>;

type TNever<T> = T extends Record<string, never> ? never : T;

type TSocketRequestProps<
    T extends TSocketEndpointNames,
    O extends boolean = false,
    OT extends 'useQuery' | 'useInfiniteQuery' = 'useQuery',
> = TNever<TSocketRequestWithOptions<T, O, OT>>;

export type TSocketAcceptableProps<
    T extends TSocketEndpointNames,
    O extends boolean = false,
    OT extends 'useQuery' | 'useInfiniteQuery' = 'useQuery',
> = TSocketRequestProps<T, O, OT> extends never
    ? [undefined?]
    : Partial<TSocketRequestProps<T, O, OT>> extends TSocketRequestProps<T, O, OT>
    ? [TSocketRequestProps<T, O, OT>?]
    : [TSocketRequestProps<T, O, OT>];

export type TSocketPaginateableEndpointNames = KeysMatching<
    TSocketEndpoints,
    { request: { limit?: number; offset?: number } }
>;
