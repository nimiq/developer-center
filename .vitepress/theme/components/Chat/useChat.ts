import type { UIMessage } from 'ai'
import { Chat } from '@ai-sdk/vue'
import { computed, ref } from 'vue'

declare const __NIMIQ_API_URL__: string
const API_URL = typeof __NIMIQ_API_URL__ !== 'undefined' ? __NIMIQ_API_URL__ : 'http://localhost:3000'

export type SearchMode = 'standard' | 'graphrag'

export interface ProgressState {
  step: string
  message: string
}

// Custom data types for our chat
interface ChatDataTypes {
  progress: ProgressState
}

export function useChat() {
  const progress = ref<ProgressState>({ step: '', message: '' })
  const mode = ref<SearchMode>('standard')

  const chat = new Chat<UIMessage<unknown, ChatDataTypes>>({
    api: `${API_URL}/api/chat`,
    body: () => ({ mode: mode.value }),
    onData(data) {
      // Handle custom data parts like progress (type is 'data-progress', data in .data)
      if (data && typeof data === 'object' && 'type' in data) {
        if (data.type === 'data-progress' && 'data' in data) {
          const progressData = (data as any).data
          progress.value = { step: progressData.step, message: progressData.message }
        }
      }
    },
  })

  const messages = computed(() => chat.messages.value)
  const isLoading = computed(() => chat.status.value === 'streaming' || chat.status.value === 'submitted')

  async function sendMessage(content: string) {
    // Reset progress when starting new message
    progress.value = { step: '', message: '' }
    await chat.sendMessage({ text: content })
  }

  function clearMessages() {
    chat.setMessages([])
    progress.value = { step: '', message: '' }
  }

  function setMode(newMode: SearchMode) {
    mode.value = newMode
  }

  return {
    messages,
    isLoading,
    progress,
    mode,
    sendMessage,
    clearMessages,
    setMode,
  }
}

// Re-export types from AI SDK
export type { UIMessage }
