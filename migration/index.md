<script setup lang="ts">
import DesignKitItem from '../../../.vitepress/theme/components/DesignKitItem.vue'
import Tags from '../../../.vitepress/theme/components/Tags.vue'
import { useDark, useClipboard } from '@vueuse/core'

const { copy: copyToClipboard, copied, isSupported: copyIsSupported } = useClipboard({ copiedDuring: 3000 })
</script>

Nimiq is transitioning from a Proof-of-Work to a Proof-of-Stake blockchain through a special hard fork. The transition starts by establishing the first validator list for the PoS blockchain within the PoW chain, followed by users staking their NIM during the pre-staking phase. Finally, the activation phase selects a transition block and executes the transition to the PoS chain if at least 80% of the stake is ready.

During the migration, we will capture the entire blockchain state, including all accounts, balances, and transaction history. This means that users' balances will remain intact and will be transferred to the new PoS chain.

**There is no requirement to participate in the migration.** However, if you want, you can become one of the first validators or migrate as an observer. Nimiq ensures that no NIM will be lost during the process. We have guides available for those who want to actively engage in the transition:

- **[Validator Registration](migration-validators):** Users can join the very first validator list by running the migration as a validator. Want to be one of our first validators?
- **[Node Operator Participation](node-operators):** Users who want to migrate can also run the migration process. The process is even simpler for node operators, offering an accessible option for participation.

### Most Asked Questions

**Do I need to participate in the migration?**
No, you don't need to participate unless you want to become one of our first validators or actively engage in the process as a node operator. Your NIM and transaction history will be automatically transferred to the new PoS chain.

**Will my NIM be safe during the transition?**
Yes, all NIM balances and transaction histories will be securely migrated to the PoS chain, and no NIM will be lost during this process.

**Can I access my Wallet post-transition with the same Login File?**
Yes, you can. Your address and data will be transferred to the PoS chain, so your Login File remains the same.

<div grid="~ rows-[120px_120px] md:rows-[120px] md:cols-2 gap-32" class="raw" mt-36>

<div flex="~ justify-center items-center" border-base rounded-6 bg-neutral-200 relative p-6>
  <p class="m-24">Curious about the technical details? Read our <a href="migration-technical-details">technical details</a> page!</p>
  <div text-neutral-700 absolute inset-x-16 bottom-16 flex="~ justify-between" lh-none>
  </div>
</div>

<div flex="~ justify-center items-center" border-base rounded-6 bg-neutral-200 relative p-6>
  <p class="m-24">Have questions about the migration? Check our <a href="faqs">FAQs</a>!</p>
  <div text-neutral-600 absolute inset-x-16 bottom-16 flex="~ justify-between" lh-none>
  </div>
</div>

</div>