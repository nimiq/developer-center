<script setup lang="ts">
import type { UIMessage } from 'ai'
import { computed } from 'vue'
import { Conversation, ConversationContent, ConversationScrollButton, Message, MessageContent, MessageResponse, Progress, Reasoning, ReasoningContent, ReasoningTrigger, Source, Sources, SourcesContent, SourcesTrigger, Tool, ToolContent, ToolHeader, ToolInput, ToolOutput } from '../ai-elements'
import ChatInput from './ChatInput.vue'
import { useChat } from './useChat'

const { messages, isLoading, progress, sendMessage, clearMessages } = useChat()

// Helper to get text content from message
function getMessageText(msg: UIMessage): string {
  return msg.parts.filter(p => p.type === 'text').map(p => p.text).join('')
}

// Helper to check if part is a tool part (type starts with 'tool-')
function isToolPart(part: UIMessage['parts'][number]): part is UIMessage['parts'][number] & { toolCallId: string, state: string, input?: unknown, output?: unknown, errorText?: string } {
  return part.type.startsWith('tool-') && part.type !== 'tool'
}

// Get tool name from tool part type
function getToolName(part: UIMessage['parts'][number]): string {
  if (part.type.startsWith('tool-'))
    return part.type.slice(5) // Remove 'tool-' prefix
  return 'unknown'
}

// Get first message text for header
const headerTitle = computed(() => {
  const first = messages.value[0]
  if (!first)
    return ''
  const text = getMessageText(first)
  return text.length > 50 ? `${text.slice(0, 50)}...` : text
})
</script>

<template>
  <div class="chat-page nq-raw" flex="~ col" h="[calc(100vh-200px)]" min-h-400>
    <!-- Header (only when conversation started) -->
    <div v-if="messages.length" flex="~ items-center justify-between" mb-16>
      <div flex="~ items-center gap-12">
        <span text-blue size-24 i-nimiq:logos-nimiq />
        <h1 text="16 neutral" font-semibold m-0>
          {{ headerTitle }}
        </h1>
      </div>
      <button
        type="button"
        flex="~ items-center gap-6"
        text="12 neutral-700" px-12 py-6 outline-none rounded-full bg-neutral-200 cursor-pointer transition-colors
        @click="clearMessages"
      >
        <span i-tabler:trash size-14 />
        <span>Clear</span>
      </button>
    </div>

    <!-- Conversation -->
    <Conversation flex-1 overflow-hidden>
      <ConversationContent>
        <!-- Empty state -->
        <div v-if="!messages.length" flex="~ col items-center justify-center" text-center h-full>
          <span text-blue mb-16 size-48 i-nimiq:logos-nimiq />
          <h2 text="18 neutral" font-semibold mb-8>
            Nimiq Developer Assistant
          </h2>
          <p text="14 neutral/60" max-w-400>
            Ask questions about Nimiq blockchain development, APIs, and documentation.
          </p>
        </div>

        <!-- Messages -->
        <template v-for="msg in messages" :key="msg.id">
          <Message :from="msg.role">
            <div class="flex flex-col gap-2 w-full">
              <!-- Group sources at top for assistant messages -->
              <Sources v-if="msg.role === 'assistant' && msg.parts.filter(p => p.type === 'source-url').length">
                <SourcesTrigger :count="msg.parts.filter(p => p.type === 'source-url').length" />
                <SourcesContent>
                  <template v-for="(part, i) in msg.parts" :key="`${msg.id}-source-${i}`">
                    <Source v-if="part.type === 'source-url'" :href="part.url" :title="part.title ?? 'Source'" />
                  </template>
                </SourcesContent>
              </Sources>

              <!-- Render parts -->
              <template v-for="(part, i) in msg.parts" :key="`${msg.id}-${i}`">
                <!-- Reasoning -->
                <Reasoning v-if="part.type === 'reasoning'" :is-streaming="part.state === 'streaming'">
                  <ReasoningTrigger />
                  <ReasoningContent :content="part.text" />
                </Reasoning>

                <!-- Tool calls (type is 'tool-{toolName}') -->
                <Tool v-else-if="isToolPart(part)" :default-open="part.state !== 'output-available'">
                  <ToolHeader :state="part.state" :title="getToolName(part)" />
                  <ToolContent>
                    <ToolInput :input="part.input" />
                    <ToolOutput v-if="part.output || part.errorText" :output="part.output" :error-text="part.errorText" />
                  </ToolContent>
                </Tool>

                <!-- Text content -->
                <MessageContent v-else-if="part.type === 'text'">
                  <MessageResponse :content="part.text" />
                </MessageContent>

                <!-- Skip source-url here since we handle them above -->
              </template>
            </div>
          </Message>
        </template>

        <!-- Progress indicator while searching/generating -->
        <Progress v-if="isLoading && progress.step" :step="progress.step" :message="progress.message" />
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>

    <!-- Input -->
    <ChatInput :loading="isLoading" @submit="sendMessage" />
  </div>
</template>

<style>
/* Remove article padding when chat page is present */
article.nq-prose:has(.chat-page) {
  padding-bottom: 0 !important;
}
article.nq-prose:has(.chat-page) > div {
  padding-bottom: 0 !important;
  height: 100%;
}
</style>
