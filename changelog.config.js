module.exports = {
  disableEmoji: true,
  list: ["feat", "fix", "refactor", "perf", "style", "test", "chore", "ci", "release"],
  maxMessageLength: 64,
  minMessageLength: 5,
  questions: [
    "type",
    "scope",
    "subject",
    "body",
    "breaking",
    "issues",
    // 'lerna'
  ],
  scopes: ["Button", "其他"],
  types: {
    feat: {
      description: "新增功能",
      emoji: "🎸",
      value: "feat",
    },
    chore: {
      description: "编译过程和辅助工具修改",
      emoji: "🤖",
      value: "chore",
    },
    ci: {
      description: "持续集成相关修改",
      emoji: "🎡",
      value: "ci",
    },
    docs: {
      description: "仅文档修改",
      emoji: "✏️",
      value: "docs",
    },
    fix: {
      description: "缺陷修复",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "性能改进",
      emoji: "⚡️",
      value: "perf",
    },
    refactor: {
      description: "代码重构",
      emoji: "💡",
      value: "refactor",
    },
    release: {
      description: "版本发布",
      emoji: "🏹",
      value: "release",
    },
    style: {
      description: "代码美化",
      emoji: "💄",
      value: "style",
    },
    test: {
      description: "测例修改",
      emoji: "💍",
      value: "test",
    },
  },
  message: {
    type: "选择您要提交的更改类型：",
    customScope: "选择此次提交影响的范围：",
    subject: "输入一个简短的、关于本次提交的描述: \n",
    body: "输入一个更详细的提交说明: \n ",
    breaking: "列出本次提交涉及到的重大修改: \n",
    footer: "此提交关闭的问题, e.g #123:",
    confirmCommit: "本次提交对其他相关功能的影响\n",
  },
};
