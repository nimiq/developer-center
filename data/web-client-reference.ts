export default {
  apiReferenceSection: {
    label: 'API Reference',
    items: [
      {
        text: 'Overview',
        link: '/web-client/reference/',
        icon: 'i-tabler:layout-grid',
      },
      {
        text: '@nimiq Namespaces',
        icon: 'i-tabler:layout-board-split',
        items: [
          {
            text: 'MnemonicType',
            link: '/web-client/reference/@nimiq/namespaces/mnemonicutils/enumerations/mnemonictype',
          },
          {
            text: 'Type',
            link: '/web-client/reference/@nimiq/namespaces/secret/enumerations/type',
          },
        ],
      },
      {
        text: 'Classes',
        icon: 'i-tabler:container',
        items: [
          {
            text: 'Address',
            link: '/web-client/reference/classes/address',
          },
          {
            text: 'ArrayUtils',
            link: '/web-client/reference/classes/arrayutils',
          },
          {
            text: 'BLSKeyPair',
            link: '/web-client/reference/classes/blskeypair',
          },
          {
            text: 'BLSPublicKey',
            link: '/web-client/reference/classes/blspublickey',
          },
          {
            text: 'BLSSecretKey',
            link: '/web-client/reference/classes/blssecretkey',
          },
          {
            text: 'BufferUtils',
            link: '/web-client/reference/classes/bufferutils',
          },
          {
            text: 'Client',
            link: '/web-client/reference/classes/client',
          },
          {
            text: 'ClientConfiguration',
            link: '/web-client/reference/classes/clientconfiguration',
          },
          {
            text: 'Commitment',
            link: '/web-client/reference/classes/commitment',
          },
          {
            text: 'CommitmentPair',
            link: '/web-client/reference/classes/commitmentpair',
          },
          {
            text: 'CryptoUtils',
            link: '/web-client/reference/classes/cryptoutils',
          },
          {
            text: 'Entropy',
            link: '/web-client/reference/classes/entropy',
          },
          {
            text: 'ES256PublicKey',
            link: '/web-client/reference/classes/es256publickey',
          },
          {
            text: 'ES256Signature',
            link: '/web-client/reference/classes/es256signature',
          },
          {
            text: 'ExtendedPrivateKey',
            link: '/web-client/reference/classes/extendedprivatekey',
          },
          {
            text: 'Hash',
            link: '/web-client/reference/classes/hash',
          },
          {
            text: 'HashedTimeLockedContract',
            link: '/web-client/reference/classes/hashedtimelockedcontract',
          },
          {
            text: 'KeyPair',
            link: '/web-client/reference/classes/keypair',
          },
          {
            text: 'MerkleTree',
            link: '/web-client/reference/classes/merkletree',
          },
          {
            text: 'MnemonicUtils',
            link: '/web-client/reference/classes/mnemonicutils',
          },
          {
            text: 'NumberUtils',
            link: '/web-client/reference/classes/numberutils',
          },
          {
            text: 'PartialSignature',
            link: '/web-client/reference/classes/partialsignature',
          },
          {
            text: 'Policy',
            link: '/web-client/reference/classes/policy',
          },
          {
            text: 'PrivateKey',
            link: '/web-client/reference/classes/privatekey',
          },
          {
            text: 'PublicKey',
            link: '/web-client/reference/classes/publickey',
          },
          {
            text: 'RandomSecret',
            link: '/web-client/reference/classes/randomsecret',
          },
          {
            text: 'Secret',
            link: '/web-client/reference/classes/secret',
          },
          {
            text: 'SerialBuffer',
            link: '/web-client/reference/classes/serialbuffer',
          },
          {
            text: 'Signature',
            link: '/web-client/reference/classes/signature',
          },
          {
            text: 'SignatureProof',
            link: '/web-client/reference/classes/signatureproof',
          },
          {
            text: 'StakingContract',
            link: '/web-client/reference/classes/stakingcontract',
          },
          {
            text: 'StringUtils',
            link: '/web-client/reference/classes/stringutils',
          },
          {
            text: 'Transaction',
            link: '/web-client/reference/classes/transaction',
          },
          {
            text: 'TransactionBuilder',
            link: '/web-client/reference/classes/transactionbuilder',
          },
          {
            text: 'VestingContract',
            link: '/web-client/reference/classes/vestingcontract',
          },
        ],
      },
      {
        text: 'Enumerations',
        icon: 'i-tabler:list-numbers',
        items: [
          {
            text: 'AccountType',
            link: '/web-client/reference/enumerations/accounttype',
          },
          {
            text: 'TransactionFlag',
            link: '/web-client/reference/enumerations/transactionflag',
          },
          {
            text: 'TransactionFormat',
            link: '/web-client/reference/enumerations/transactionformat',
          },
        ],
      },
      {
        text: 'Functions',
        icon: 'i-tabler:function',
        items: [
          {
            text: 'default',
            link: '/web-client/reference/functions/default',
          },
          {
            text: 'initSync',
            link: '/web-client/reference/functions/initsync',
          },
        ],
      },
      {
        text: 'Interfaces',
        icon: 'i-tabler:layout',
        items: [
          {
            text: 'InitOutput',
            link: '/web-client/reference/interfaces/initoutput',
          },
          {
            text: 'PlainAddStakeData',
            link: '/web-client/reference/interfaces/plainaddstakedata',
          },
          {
            text: 'PlainBasicAccount',
            link: '/web-client/reference/interfaces/plainbasicaccount',
          },
          {
            text: 'PlainBlockCommonFields',
            link: '/web-client/reference/interfaces/plainblockcommonfields',
          },
          {
            text: 'PlainClientConfiguration',
            link: '/web-client/reference/interfaces/plainclientconfiguration',
          },
          {
            text: 'PlainCreateStakerData',
            link: '/web-client/reference/interfaces/plaincreatestakerdata',
          },
          {
            text: 'PlainCreateValidatorData',
            link: '/web-client/reference/interfaces/plaincreatevalidatordata',
          },
          {
            text: 'PlainHtlcContract',
            link: '/web-client/reference/interfaces/plainhtlccontract',
          },
          {
            text: 'PlainHtlcData',
            link: '/web-client/reference/interfaces/plainhtlcdata',
          },
          {
            text: 'PlainHtlcEarlyResolveProof',
            link: '/web-client/reference/interfaces/plainhtlcearlyresolveproof',
          },
          {
            text: 'PlainHtlcRegularTransferProof',
            link: '/web-client/reference/interfaces/plainhtlcregulartransferproof',
          },
          {
            text: 'PlainHtlcTimeoutResolveProof',
            link: '/web-client/reference/interfaces/plainhtlctimeoutresolveproof',
          },
          {
            text: 'PlainMacroBlock',
            link: '/web-client/reference/interfaces/plainmacroblock',
          },
          {
            text: 'PlainMicroBlock',
            link: '/web-client/reference/interfaces/plainmicroblock',
          },
          {
            text: 'PlainPeerInfo',
            link: '/web-client/reference/interfaces/plainpeerinfo',
          },
          {
            text: 'PlainRawData',
            link: '/web-client/reference/interfaces/plainrawdata',
          },
          {
            text: 'PlainRawProof',
            link: '/web-client/reference/interfaces/plainrawproof',
          },
          {
            text: 'PlainRetireStakeData',
            link: '/web-client/reference/interfaces/plainretirestakedata',
          },
          {
            text: 'PlainSetActiveStakeData',
            link: '/web-client/reference/interfaces/plainsetactivestakedata',
          },
          {
            text: 'PlainStaker',
            link: '/web-client/reference/interfaces/plainstaker',
          },
          {
            text: 'PlainStakingContract',
            link: '/web-client/reference/interfaces/plainstakingcontract',
          },
          {
            text: 'PlainStandardProof',
            link: '/web-client/reference/interfaces/plainstandardproof',
          },
          {
            text: 'PlainTransaction',
            link: '/web-client/reference/interfaces/plaintransaction',
          },
          {
            text: 'PlainTransactionDetails',
            link: '/web-client/reference/interfaces/plaintransactiondetails',
          },
          {
            text: 'PlainTransactionReceipt',
            link: '/web-client/reference/interfaces/plaintransactionreceipt',
          },
          {
            text: 'PlainUpdateStakerData',
            link: '/web-client/reference/interfaces/plainupdatestakerdata',
          },
          {
            text: 'PlainUpdateValidatorData',
            link: '/web-client/reference/interfaces/plainupdatevalidatordata',
          },
          {
            text: 'PlainValidator',
            link: '/web-client/reference/interfaces/plainvalidator',
          },
          {
            text: 'PlainValidatorData',
            link: '/web-client/reference/interfaces/plainvalidatordata',
          },
          {
            text: 'PlainVestingContract',
            link: '/web-client/reference/interfaces/plainvestingcontract',
          },
          {
            text: 'PlainVestingData',
            link: '/web-client/reference/interfaces/plainvestingdata',
          },
        ],
      },
      {
        text: 'Type Aliases',
        icon: 'i-tabler:tags',
        items: [
          {
            text: 'ConsensusState',
            link: '/web-client/reference/type-aliases/consensusstate',
          },
          {
            text: 'InitInput',
            link: '/web-client/reference/type-aliases/initinput',
          },
          {
            text: 'PlainAccount',
            link: '/web-client/reference/type-aliases/plainaccount',
          },
          {
            text: 'PlainBlock',
            link: '/web-client/reference/type-aliases/plainblock',
          },
          {
            text: 'PlainService',
            link: '/web-client/reference/type-aliases/plainservice',
          },
          {
            text: 'PlainTransactionProof',
            link: '/web-client/reference/type-aliases/plaintransactionproof',
          },
          {
            text: 'PlainTransactionRecipientData',
            link: '/web-client/reference/type-aliases/plaintransactionrecipientdata',
          },
          {
            text: 'PlainTransactionSenderData',
            link: '/web-client/reference/type-aliases/plaintransactionsenderdata',
          },
          {
            text: 'SyncInitInput',
            link: '/web-client/reference/type-aliases/syncinitinput',
          },
          {
            text: 'TransactionState',
            link: '/web-client/reference/type-aliases/transactionstate',
          },
        ],
      },
      {
        text: 'Globals',
        link: '/web-client/reference/globals',
        icon: 'i-tabler:world',
      },
    ],
  },
  categories: [
    {
      text: '@nimiq Namespaces',
      icon: 'i-tabler:layout-board-split',
      items: [
        {
          text: 'MnemonicType',
          link: '/web-client/reference/@nimiq/namespaces/mnemonicutils/enumerations/mnemonictype',
        },
        {
          text: 'Type',
          link: '/web-client/reference/@nimiq/namespaces/secret/enumerations/type',
        },
      ],
    },
    {
      text: 'Classes',
      icon: 'i-tabler:container',
      items: [
        {
          text: 'Address',
          link: '/web-client/reference/classes/address',
        },
        {
          text: 'ArrayUtils',
          link: '/web-client/reference/classes/arrayutils',
        },
        {
          text: 'BLSKeyPair',
          link: '/web-client/reference/classes/blskeypair',
        },
        {
          text: 'BLSPublicKey',
          link: '/web-client/reference/classes/blspublickey',
        },
        {
          text: 'BLSSecretKey',
          link: '/web-client/reference/classes/blssecretkey',
        },
        {
          text: 'BufferUtils',
          link: '/web-client/reference/classes/bufferutils',
        },
        {
          text: 'Client',
          link: '/web-client/reference/classes/client',
        },
        {
          text: 'ClientConfiguration',
          link: '/web-client/reference/classes/clientconfiguration',
        },
        {
          text: 'Commitment',
          link: '/web-client/reference/classes/commitment',
        },
        {
          text: 'CommitmentPair',
          link: '/web-client/reference/classes/commitmentpair',
        },
        {
          text: 'CryptoUtils',
          link: '/web-client/reference/classes/cryptoutils',
        },
        {
          text: 'Entropy',
          link: '/web-client/reference/classes/entropy',
        },
        {
          text: 'ES256PublicKey',
          link: '/web-client/reference/classes/es256publickey',
        },
        {
          text: 'ES256Signature',
          link: '/web-client/reference/classes/es256signature',
        },
        {
          text: 'ExtendedPrivateKey',
          link: '/web-client/reference/classes/extendedprivatekey',
        },
        {
          text: 'Hash',
          link: '/web-client/reference/classes/hash',
        },
        {
          text: 'HashedTimeLockedContract',
          link: '/web-client/reference/classes/hashedtimelockedcontract',
        },
        {
          text: 'KeyPair',
          link: '/web-client/reference/classes/keypair',
        },
        {
          text: 'MerkleTree',
          link: '/web-client/reference/classes/merkletree',
        },
        {
          text: 'MnemonicUtils',
          link: '/web-client/reference/classes/mnemonicutils',
        },
        {
          text: 'NumberUtils',
          link: '/web-client/reference/classes/numberutils',
        },
        {
          text: 'PartialSignature',
          link: '/web-client/reference/classes/partialsignature',
        },
        {
          text: 'Policy',
          link: '/web-client/reference/classes/policy',
        },
        {
          text: 'PrivateKey',
          link: '/web-client/reference/classes/privatekey',
        },
        {
          text: 'PublicKey',
          link: '/web-client/reference/classes/publickey',
        },
        {
          text: 'RandomSecret',
          link: '/web-client/reference/classes/randomsecret',
        },
        {
          text: 'Secret',
          link: '/web-client/reference/classes/secret',
        },
        {
          text: 'SerialBuffer',
          link: '/web-client/reference/classes/serialbuffer',
        },
        {
          text: 'Signature',
          link: '/web-client/reference/classes/signature',
        },
        {
          text: 'SignatureProof',
          link: '/web-client/reference/classes/signatureproof',
        },
        {
          text: 'StakingContract',
          link: '/web-client/reference/classes/stakingcontract',
        },
        {
          text: 'StringUtils',
          link: '/web-client/reference/classes/stringutils',
        },
        {
          text: 'Transaction',
          link: '/web-client/reference/classes/transaction',
        },
        {
          text: 'TransactionBuilder',
          link: '/web-client/reference/classes/transactionbuilder',
        },
        {
          text: 'VestingContract',
          link: '/web-client/reference/classes/vestingcontract',
        },
      ],
    },
    {
      text: 'Enumerations',
      icon: 'i-tabler:list-numbers',
      items: [
        {
          text: 'AccountType',
          link: '/web-client/reference/enumerations/accounttype',
        },
        {
          text: 'TransactionFlag',
          link: '/web-client/reference/enumerations/transactionflag',
        },
        {
          text: 'TransactionFormat',
          link: '/web-client/reference/enumerations/transactionformat',
        },
      ],
    },
    {
      text: 'Functions',
      icon: 'i-tabler:function',
      items: [
        {
          text: 'default',
          link: '/web-client/reference/functions/default',
        },
        {
          text: 'initSync',
          link: '/web-client/reference/functions/initsync',
        },
      ],
    },
    {
      text: 'Interfaces',
      icon: 'i-tabler:layout',
      items: [
        {
          text: 'InitOutput',
          link: '/web-client/reference/interfaces/initoutput',
        },
        {
          text: 'PlainAddStakeData',
          link: '/web-client/reference/interfaces/plainaddstakedata',
        },
        {
          text: 'PlainBasicAccount',
          link: '/web-client/reference/interfaces/plainbasicaccount',
        },
        {
          text: 'PlainBlockCommonFields',
          link: '/web-client/reference/interfaces/plainblockcommonfields',
        },
        {
          text: 'PlainClientConfiguration',
          link: '/web-client/reference/interfaces/plainclientconfiguration',
        },
        {
          text: 'PlainCreateStakerData',
          link: '/web-client/reference/interfaces/plaincreatestakerdata',
        },
        {
          text: 'PlainCreateValidatorData',
          link: '/web-client/reference/interfaces/plaincreatevalidatordata',
        },
        {
          text: 'PlainHtlcContract',
          link: '/web-client/reference/interfaces/plainhtlccontract',
        },
        {
          text: 'PlainHtlcData',
          link: '/web-client/reference/interfaces/plainhtlcdata',
        },
        {
          text: 'PlainHtlcEarlyResolveProof',
          link: '/web-client/reference/interfaces/plainhtlcearlyresolveproof',
        },
        {
          text: 'PlainHtlcRegularTransferProof',
          link: '/web-client/reference/interfaces/plainhtlcregulartransferproof',
        },
        {
          text: 'PlainHtlcTimeoutResolveProof',
          link: '/web-client/reference/interfaces/plainhtlctimeoutresolveproof',
        },
        {
          text: 'PlainMacroBlock',
          link: '/web-client/reference/interfaces/plainmacroblock',
        },
        {
          text: 'PlainMicroBlock',
          link: '/web-client/reference/interfaces/plainmicroblock',
        },
        {
          text: 'PlainPeerInfo',
          link: '/web-client/reference/interfaces/plainpeerinfo',
        },
        {
          text: 'PlainRawData',
          link: '/web-client/reference/interfaces/plainrawdata',
        },
        {
          text: 'PlainRawProof',
          link: '/web-client/reference/interfaces/plainrawproof',
        },
        {
          text: 'PlainRetireStakeData',
          link: '/web-client/reference/interfaces/plainretirestakedata',
        },
        {
          text: 'PlainSetActiveStakeData',
          link: '/web-client/reference/interfaces/plainsetactivestakedata',
        },
        {
          text: 'PlainStaker',
          link: '/web-client/reference/interfaces/plainstaker',
        },
        {
          text: 'PlainStakingContract',
          link: '/web-client/reference/interfaces/plainstakingcontract',
        },
        {
          text: 'PlainStandardProof',
          link: '/web-client/reference/interfaces/plainstandardproof',
        },
        {
          text: 'PlainTransaction',
          link: '/web-client/reference/interfaces/plaintransaction',
        },
        {
          text: 'PlainTransactionDetails',
          link: '/web-client/reference/interfaces/plaintransactiondetails',
        },
        {
          text: 'PlainTransactionReceipt',
          link: '/web-client/reference/interfaces/plaintransactionreceipt',
        },
        {
          text: 'PlainUpdateStakerData',
          link: '/web-client/reference/interfaces/plainupdatestakerdata',
        },
        {
          text: 'PlainUpdateValidatorData',
          link: '/web-client/reference/interfaces/plainupdatevalidatordata',
        },
        {
          text: 'PlainValidator',
          link: '/web-client/reference/interfaces/plainvalidator',
        },
        {
          text: 'PlainValidatorData',
          link: '/web-client/reference/interfaces/plainvalidatordata',
        },
        {
          text: 'PlainVestingContract',
          link: '/web-client/reference/interfaces/plainvestingcontract',
        },
        {
          text: 'PlainVestingData',
          link: '/web-client/reference/interfaces/plainvestingdata',
        },
      ],
    },
    {
      text: 'Type Aliases',
      icon: 'i-tabler:tags',
      items: [
        {
          text: 'ConsensusState',
          link: '/web-client/reference/type-aliases/consensusstate',
        },
        {
          text: 'InitInput',
          link: '/web-client/reference/type-aliases/initinput',
        },
        {
          text: 'PlainAccount',
          link: '/web-client/reference/type-aliases/plainaccount',
        },
        {
          text: 'PlainBlock',
          link: '/web-client/reference/type-aliases/plainblock',
        },
        {
          text: 'PlainService',
          link: '/web-client/reference/type-aliases/plainservice',
        },
        {
          text: 'PlainTransactionProof',
          link: '/web-client/reference/type-aliases/plaintransactionproof',
        },
        {
          text: 'PlainTransactionRecipientData',
          link: '/web-client/reference/type-aliases/plaintransactionrecipientdata',
        },
        {
          text: 'PlainTransactionSenderData',
          link: '/web-client/reference/type-aliases/plaintransactionsenderdata',
        },
        {
          text: 'SyncInitInput',
          link: '/web-client/reference/type-aliases/syncinitinput',
        },
        {
          text: 'TransactionState',
          link: '/web-client/reference/type-aliases/transactionstate',
        },
      ],
    },
  ],
} as const
