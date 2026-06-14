export const projectsData = [
  {
    id: 1,
    name: 'AI 狼人杀',
    colors: { string: 'text-emerald-400', array: 'text-emerald-300', accent: 'text-emerald-500' },
    subtitle: '由 AI Agent 扮演玩家的狼人杀游戏引擎',
    description:
      'AI 狼人杀是一个由 AI Agent 扮演玩家的桌游引擎项目。项目目标不是简单让 AI 生成发言，而是让多个 AI 玩家在同一局游戏中拥有身份、立场、行动逻辑、发言策略和推理能力，并通过系统 Workflow 驱动完整游戏流程。',
    detail:
      '在这个项目中，我设计了狼人杀的核心流程，包括夜晚行动、角色技能、白天发言、投票放逐、遗言、胜负判定和游戏高光提取。系统需要协调 LLM 生成、TTS 播报、Socket 消息推送和前端实时展示，因此重点解决了长耗时 AI 任务、事件队列、前端播报节奏和后端流程推进之间的协同问题。',
    highlights: [
      '设计 AI Agent 玩家系统，让不同角色具备身份、目标和行动逻辑',
      '基于 Workflow 驱动狼人杀夜晚、白天、投票、胜负判定等流程',
      '处理 LLM 与 TTS 长耗时任务下的 Socket 实时推送问题',
      '支持游戏高光提取、标题生成和宣传素材生成',
    ],
    tools: ['AI Agent', 'Workflow Engine', 'LLM', 'TTS', 'Socket', 'Event Queue', 'Node.js', 'TypeScript'],
    role: 'AI / Agent 开发工程师',
    status: 'MVP / 持续迭代',
    code: '',
    demo: '',
  },
  {
    id: 2,
    name: 'AI 辩论赛',
    colors: { string: 'text-sky-400', array: 'text-sky-300', accent: 'text-sky-500' },
    subtitle: '多 AI 模型参与的辩论内容生成系统',
    description:
      'AI 辩论赛是一个多 AI 模型参与的辩论内容生成系统。系统会让不同 AI 模型分别扮演正方、反方、评委等角色，并按照辩论流程完成选边、立论、攻辩、自由交锋、总结陈词、评委点评、评分和最佳辩手评选。',
    detail:
      '这个项目的核心不是单轮对话，而是多角色、多阶段、多约束的 Agent Workflow。每个 AI 角色都需要在指定身份、立场、字数、发言阶段和上下文信息下生成内容。系统还支持高光语句提取、抖音标题生成、比赛总结和海报素材生成，让一场 AI 辩论赛可以被包装成完整的内容产品。',
    highlights: [
      '支持正方、反方、评委等多 Agent 角色协作',
      '设计选边、队长竞选、立论、攻辩、总结、点评等完整流程',
      '通过 Prompt 约束控制不同阶段的发言目标和字数',
      '支持比赛高光提取、标题生成和内容二次传播',
    ],
    tools: ['Multi-Agent', 'LLM', 'Prompt Engineering', 'Workflow', 'Content Generation', 'TypeScript'],
    role: 'AI / Agent 开发工程师',
    status: 'MVP / 内容实验中',
    code: '',
    demo: '',
  },
  {
    id: 3,
    name: 'Agent Creator',
    colors: { string: 'text-violet-400', array: 'text-violet-300', accent: 'text-violet-500' },
    subtitle: '面向开发者的 Agent 创建工具',
    description:
      'Agent Creator 是一个面向开发者的 Agent 创建工具，目标是让开发者可以基于模板快速创建自己的领域 Agent。它不是单一聊天机器人，而是一个 Agent 工程化脚手架，关注 Agent 的模块化、可扩展性和工程落地能力。',
    detail:
      '我在设计中将 Agent 拆分为核心流程模块、任务规划模块、记忆模块、工具模块、入参校验、出参约束、领域边界和模板系统。后续开发者可以基于内置模板创建 Tool Agent，也可以扩展自己的 Skill、Workflow 和 Memory 能力。',
    highlights: [
      '设计 Agent 工程化脚手架结构',
      '支持模板系统，便于快速创建领域 Agent',
      '规划 Skill Registry、Memory、Tool Calling 等核心模块',
      '关注 Agent 的边界约束、输入校验和输出结构化',
    ],
    tools: ['Agent Framework', 'CLI', 'Template System', 'Skill Registry', 'Memory', 'Tool Calling', 'TypeScript'],
    role: 'AI / Agent 开发工程师',
    status: '设计中 / 原型规划',
    code: '',
    demo: '',
  },
  {
    id: 5,
    name: 'AI 风格助理',
    colors: { string: 'text-rose-400', array: 'text-rose-300', accent: 'text-rose-500' },
    subtitle: '基于用户形象和偏好的个性化风格推荐 Agent',
    description:
      'AI 风格助理是一个围绕用户形象、穿搭、发型和妆造推荐的 AI 应用项目。系统目标是基于用户上传的照片、个人偏好、天气、场景和历史反馈，生成更个性化的每日风格方案。',
    detail:
      '项目设计中包含用户形象库、正脸照/全身照分析、人物三视图、穿搭方案、妆容建议、发型建议和反馈再推荐等模块。相比普通推荐系统，它更关注用户长期偏好、形象资产管理和 AI 推荐结果的可解释性。',
    highlights: [
      '设计用户形象库和图片资产管理流程',
      '支持基于场景、天气和偏好的每日风格方案',
      '规划三视图生成、妆造分析和穿搭推荐能力',
      '通过用户反馈持续优化推荐结果',
    ],
    tools: ['AI Assistant', 'User Profile', 'Image Asset', 'Recommendation', 'Feedback Loop', 'Express', 'Prisma', 'PostgreSQL'],
    role: 'AI / Agent 开发工程师',
    status: '产品设计 / 原型规划',
    code: '',
    demo: '',
  },
];