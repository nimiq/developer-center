# Pre-Ship Checklist

Run this checklist when the mini app is functionally complete. Go through each category, report pass/fail for each item, and explain how to fix any failures.

## 1. Provider integration

- [ ] The app uses at least one provider method (Nimiq provider via `init()` or Ethereum provider via `window.ethereum`).
- [ ] If using the Nimiq provider: `@nimiq/mini-app-sdk` is installed and `init()` is called (optionally with a `timeout`).
- [ ] If using the Ethereum provider: `window.ethereum` is accessed directly, no SDK needed.
- [ ] Provider initialization is wrapped in error handling.
- [ ] The app shows a clear message when the provider is unavailable (opened outside Nimiq Pay).

## 2. Mobile-first UI

- [ ] The layout is responsive and works on small screens (375px width minimum).
- [ ] Touch targets are at least 44px.
- [ ] No horizontal scrolling on mobile viewports.
- [ ] No desktop-only components or layouts that break on mobile.
- [ ] Text is readable without zooming.

## 3. Security

- [ ] No attempt to access private keys or wallet internal state.
- [ ] No attempt to bypass or suppress the native approval dialog.
- [ ] No hardcoded private keys, seed phrases, or sensitive credentials in the codebase.
- [ ] All sensitive actions (account access, signing, transactions) go through the provider.
- [ ] Signing of structured data (permits, order approvals, login challenges) uses `eth_signTypedData_v4`, not `personal_sign`. `personal_sign` is fine for plain-text messages only.

## 4. Error handling

- [ ] User rejection is handled gracefully. When the user cancels a transaction or denies account access, the app shows a clear, non-alarming message and remains usable.
- [ ] Network errors and RPC failures are caught and displayed to the user.
- [ ] If using ERC-20 tokens: contract call failures are handled (insufficient balance, wrong chain, contract errors).

## 5. Approval dialog UX

- [ ] Provider calls that require user confirmation are not fired in rapid sequence. Each confirmation-requiring call has clear user intent behind it (a button press, a form submission).
- [ ] Read-only calls (balance checks, block queries, contract reads) are batched or parallelized where possible.
- [ ] The app does not trigger approval dialogs on page load without user interaction.

## 6. Token handling (if applicable)

- [ ] The correct contract address is used for the correct chain. USDT on Polygon is a different contract than USDT on Ethereum.
- [ ] Token decimals are handled correctly. USDT and USDC use 6 decimals, not 18. Amounts are parsed and formatted using the token's actual `decimals` value.
- [ ] The app switches to the correct chain before making token contract calls.
- [ ] ABI encoding uses a library (viem, ethers.js, wagmi), not manual encoding.

## 7. Chain usage (if applicable)

- [ ] Default supported chains: Ethereum (0x1), Polygon (0x89), Arbitrum One (0xa4b1), Optimism (0xa), Base (0x2105), BNB Smart Chain (0x38), Sepolia (0xaa36a7). Custom chains can be added via `wallet_addEthereumChain`.
- [ ] Chain IDs passed to `wallet_switchEthereumChain` and `wallet_addEthereumChain` use hex-string format (`'0x89'`, not `137`). Numeric chain IDs inside EIP-712 typed data (the `domain.chainId` field) are correct and expected.
- [ ] The app handles `wallet_switchEthereumChain` error `4902` (chain not configured).

## 8. Dev server and testing

- [ ] Dev server is configured so the app is accessible over the local network.
- [ ] If using secure-context-only Web APIs (e.g. `crypto.randomUUID()`), fallbacks are in place for HTTP on LAN.
- [ ] The app has been tested by opening the Network URL inside Nimiq Pay on a phone, not just in a desktop browser.

## 9. Visual identity

- [ ] If using the Nimiq logo or brand assets, they are sourced from the [Nimiq Design Kit](https://nimiq.dev/raw/design-kit/index.md).

## Output format

Present the results as:

```
PASS: [item description]
FAIL: [item description] — [what's wrong and how to fix it]
SKIP: [item description] — [why it doesn't apply to this app]
```

End with a summary: X passed, Y failed, Z skipped.

If all items pass, tell the developer the app is ready for testing. If any items fail, list the failures and offer to fix them.
