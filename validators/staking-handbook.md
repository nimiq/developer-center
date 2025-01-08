# Staking Pools Handbook

This handbook provides guidelines for the staking pools on the Nimiq network. It covers best practices, a code of conduct, and general standards required to ensure a fair and transparent experience for the stakers. The document outlines the requirements for staking pools, which are based on single validators, to integrate with the Nimiq Wallet. This integration helps stakers make informed decisions when choosing where to stake their funds.

Pool operators are **fully responsible for setting up and maintaining their pools**, including creating the payout system and ensuring compliance with these guidelines. While validators can operate independently, staking pools allow multiple users to stake their funds with a single validator.

This page is intended for those operating a staking pool who wish to be listed on the [Nimiq Wallet](https://wallet.nimiq.com/). The [validators-API repository](https://github.com/nimiq/validators-api?tab=readme-ov-file#nimiq-validators) provides the tools and JSON schema for integrating staking pools with the wallet. By following these guidelines and submitting a complete JSON file via PR (pull request), pool operators can ensure their pool is displayed correctly in the wallet.

## General Rules

To maintain trust and integrity for the stakers, pool operators must follow some basic rules.

- **Transparency**: Communicate pool terms, including fees, reward timelines, and operational details. Pool operators are advised to maintain a website or any other accessible point of contact where their rules and terms are clearly outlined.
- **Honesty**: Do not make misleading claims, such as advertising 0% fees while charging hidden fees.
- **Compliance**: Submit a PR with your pool’s data in a JSON file following the guidelines outlined in the [README](https://github.com/nimiq/validators-api?tab=readme-ov-file#README).
- **Payout Commitments**: Ensure timely and accurate payouts to stakers. Clearly define and communicate any fees to stakers. Avoid ambiguous language in your terms.

## Code of Conduct

All pool operators must comply with the following ethical and behavioral standards:

- Do not engage in discriminatory behavior or harassment based on race, gender, sexual orientation, religion, or other personal characteristics. No hate speech, political messaging, pornography, child abuse, etc.
- Avoid sharing or promoting illegal content.
- Ensure all claims about the pool, such as fees and performance metrics, are accurate and verifiable.

Failure to comply with this will result in immediate actions, including potential suspension or removal from the network.

## **Submitting your Pool via PR**

Pool operators are required to submit a JSON file containing key details about their pool. Ensure the JSON file is complete and adheres to the guide to avoid delays in the review process. The JSON file includes fields such as:

- Pool name and description
- Address
- Fee structure (fixed or dynamic)
- Payout type and schedule
- Contact information

The review process consists of two steps:

1. **PR Review**: When a pool submits a PR with a JSON file describing its information, someone from the Nimiq team will review it within 3 business days. This step ensures the JSON file is complete, adheres to the guidelines, and accurately describes the pool's setup. If any required information is missing, the pool operator will be contacted to provide the details. The PR will be rejected if there is any misconduct or lack of transparency. Monitoring is currently manual, with plans to automate in the future.
2. **Fee Verification**: After the initial review and approval, the pool will undergo continuous monitoring to verify its fee structure and payout distributions. This is an ongoing process to ensure transparency and compliance with the stated terms.

### **Links and References**

- [Validator Staking Pools README](https://github.com/nimiq/validators-api?tab=readme-ov-file#nimiq-validators)
- [Become a Validator Guide](https://www.nimiq.com/developers/build/set-up-your-own-node/becoming-a-validator)
