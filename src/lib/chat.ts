export type ChatRole = 'user' | 'assistant'

export type ChatMessage = {
  id: string
  role: ChatRole
  content: string
}

export type ChatAdapter = {
  mode: 'demo' | 'local'
  label: string
  send: (messages: ChatMessage[], signal?: AbortSignal) => Promise<string>
}

export const demoIntro: ChatMessage = {
  id: 'intro',
  role: 'assistant',
  content:
    "Hello. I'm a front-end preview of AKSHI — not a connected model. Ask me about the vision, local memory, offline operation, or the current development stage, and I'll share what's planned.",
}

export const suggestedQuestions = [
  'What is AKSHI AI?',
  'How will memory work?',
  'Can it run offline?',
  'What stage is it at?',
]

const replies: { match: RegExp; reply: string }[] = [
  {
    match: /what is|who are|about akshi|vision|ecosystem/i,
    reply:
      'AKSHI AI is an independent, early-stage project building toward a local-first AI ecosystem: a language model, persistent memory, document understanding, and controlled adaptation, presented through one coherent interface.\n\nThe site you are viewing is a concept preview. The ecosystem itself is still under development — not released.',
  },
  {
    match: /memory|remember|context/i,
    reply:
      'The intended memory layer has two parts: short-term context for the current conversation, and a persistent local store you can inspect.\n\nA retrieval layer would decide what is relevant, while you retain control over what is remembered. This is a design goal — memory is not yet a shipped feature.',
  },
  {
    match: /offline|internet|network|local/i,
    reply:
      'Offline-first is the central design ambition. The intent is for inference and memory to run on your own device, with the network treated as optional rather than required.\n\nImplementation is still in development, so no offline guarantee is claimed yet. This preview is honest about that boundary.',
  },
  {
    match: /stage|roadmap|status|progress|release|available/i,
    reply:
      'The project is in its foundation phase: project structure, architecture, and early experiments.\n\nThe roadmap outlines the intended path — Foundation, Core Intelligence, Memory & Knowledge, Adaptive Learning, Multimodal Expansion, and Product Launch. Statuses are updated only when milestones are verified. Nothing is publicly available yet.',
  },
  {
    match: /privacy|data|secure|safe/i,
    reply:
      'Privacy is being treated as an architectural constraint rather than a marketing layer: local inference, inspectable memory, and explicit control over data.\n\nThese remain design goals until they are implemented and tested. AKSHI does not claim security guarantees it has not verified.',
  },
  {
    match: /document|pdf|file|knowledge/i,
    reply:
      'The document layer is planned to work locally: ingest the material you choose, parse and chunk it, build an on-device index, then retrieve relevant passages when you ask a question.\n\nAnswers are intended to cite their sources so you can verify them. This capability is currently marked as planned.',
  },
  {
    match: /multimodal|image|voice|audio|vision/i,
    reply:
      'Image, audio, and voice are a research horizon — not near-term promises. The initial focus is language, memory, and document grounding.\n\nMultimodal exploration begins only after those foundations are stable. It is marked as planned research on the capabilities grid.',
  },
]

export function getDemoReply(input: string): string {
  const match = replies.find((entry) => entry.match.test(input))
  if (match) return match.reply

  return "That's a good question for the full system. In this preview I can only speak to the published vision: local-first intelligence, persistent memory, document grounding, and controlled adaptation.\n\nNo live model is connected here — you are seeing a front-end demonstration."
}

function wait(ms: number, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'))
      return
    }

    const timer = window.setTimeout(() => resolve(), ms)
    signal?.addEventListener(
      'abort',
      () => {
        window.clearTimeout(timer)
        reject(new DOMException('Aborted', 'AbortError'))
      },
      { once: true },
    )
  })
}

/**
 * The only adapter wired into the UI. It never contacts a server; responses are
 * selected locally and clearly presented as a demonstration.
 */
export const demoAdapter: ChatAdapter = {
  mode: 'demo',
  label: 'Frontend demonstration',
  async send(messages, signal) {
    const lastUserMessage = [...messages].reverse().find((message) => message.role === 'user')
    await wait(850 + Math.random() * 700, signal)
    return getDemoReply(lastUserMessage?.content ?? '')
  },
}

/**
 * Optional integration point for a future local model API.
 *
 * The UI deliberately uses `demoAdapter` by default. When a local endpoint is
 * ready, swap the adapter in `Demo.tsx` and update the mode badge. No API keys
 * belong in this front-end; keep the local endpoint on localhost or a trusted
 * local network.
 */
export function createLocalModelAdapter(options: {
  endpoint: string
  model?: string
  headers?: Record<string, string>
}): ChatAdapter {
  return {
    mode: 'local',
    label: 'Local model',
    async send(messages, signal) {
      const response = await fetch(options.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options.headers },
        body: JSON.stringify({
          model: options.model,
          messages: messages.map(({ role, content }) => ({ role, content })),
          stream: false,
        }),
        signal,
      })

      if (!response.ok) {
        throw new Error(`Local model request failed with status ${response.status}.`)
      }

      const data: unknown = await response.json()

      if (
        typeof data === 'object' &&
        data !== null &&
        'reply' in data &&
        typeof (data as { reply: unknown }).reply === 'string'
      ) {
        return (data as { reply: string }).reply
      }

      if (
        typeof data === 'object' &&
        data !== null &&
        'choices' in data &&
        Array.isArray((data as { choices: unknown }).choices)
      ) {
        const first = (data as { choices: Array<{ message?: { content?: unknown } }> }).choices[0]
        if (typeof first?.message?.content === 'string') return first.message.content
      }

      throw new Error('The local model returned an unsupported response shape.')
    },
  }
}
