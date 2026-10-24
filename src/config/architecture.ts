import {
  BrainCircuit,
  Cpu,
  Database,
  Files,
  MonitorSmartphone,
  ScanEye,
  SlidersHorizontal,
  type LucideIcon,
} from 'lucide-react'

export type ArchitectureLayer = {
  id: string
  index: string
  title: string
  shortTitle: string
  description: string
  components: string[]
  status: 'Proposed' | 'Future research'
  icon: LucideIcon
  /** Position of the node inside the orbital diagram, in percentages. */
  position: { x: number; y: number }
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'interface',
    index: '01',
    title: 'User Interface',
    shortTitle: 'Interface',
    description:
      'A calm, legible surface for conversation, documents, and memory. The interface is intended to make local intelligence feel understandable — showing context, sources, and system state without exposing unnecessary complexity.',
    components: ['Conversation workspace', 'Document library', 'Memory inspector', 'Model status'],
    status: 'Proposed',
    icon: MonitorSmartphone,
    position: { x: 50, y: 7.5 },
  },
  {
    id: 'inference',
    index: '02',
    title: 'Inference Engine',
    shortTitle: 'Inference',
    description:
      'The orchestration layer between a request and a local model: prompt assembly, retrieval, token streaming, and graceful handling of limited hardware. Designed to keep the network optional rather than essential.',
    components: ['Local runtime', 'Streaming responses', 'Context assembly', 'Resource management'],
    status: 'Proposed',
    icon: Cpu,
    position: { x: 84.5, y: 24.5 },
  },
  {
    id: 'language',
    index: '03',
    title: 'Language Model',
    shortTitle: 'Language',
    description:
      'The core language intelligence: tokenizer, model architecture, and generation quality. AKSHI begins with language understanding and generation before expanding into other modalities.',
    components: ['Tokenizer experiments', 'Model architecture', 'Instruction tuning', 'Evaluation'],
    status: 'Proposed',
    icon: BrainCircuit,
    position: { x: 92, y: 58 },
  },
  {
    id: 'memory',
    index: '04',
    title: 'Context & Memory',
    shortTitle: 'Memory',
    description:
      'Continuity across time. Short-term conversational context and a persistent, inspectable memory are intended to work together — so the system can remember what matters while letting you decide what is retained.',
    components: ['Session context', 'Persistent memory', 'Retrieval routing', 'User controls'],
    status: 'Proposed',
    icon: Database,
    position: { x: 71, y: 88.5 },
  },
  {
    id: 'documents',
    index: '05',
    title: 'Document Processing & Retrieval',
    shortTitle: 'Documents',
    description:
      'A local knowledge layer for the material you choose to bring: parsing, chunking, indexing, semantic retrieval, and source-grounded answers with references back to the original document.',
    components: ['Ingestion', 'Chunking', 'Local retrieval', 'Citations'],
    status: 'Proposed',
    icon: Files,
    position: { x: 33, y: 91 },
  },
  {
    id: 'training',
    index: '06',
    title: 'Controlled Training & Evaluation',
    shortTitle: 'Adaptation',
    description:
      'A deliberate loop for improving the system: curated experiments, bounded fine-tuning, evaluation gates, and versioned model changes. Adaptation should be observable — never silent drift.',
    components: ['Experiment tracking', 'Fine-tuning', 'Evaluation gates', 'Versioning'],
    status: 'Proposed',
    icon: SlidersHorizontal,
    position: { x: 8, y: 62 },
  },
  {
    id: 'multimodal',
    index: '07',
    title: 'Future Multimodal Components',
    shortTitle: 'Multimodal',
    description:
      'A research horizon, not a shipped promise: image understanding, audio, and voice as future extensions of the same local-first ecosystem. Exploration begins only after the language and memory foundations are stable.',
    components: ['Image understanding', 'Audio', 'Voice interaction', 'Research only'],
    status: 'Future research',
    icon: ScanEye,
    position: { x: 15.5, y: 24.5 },
  },
]
