module.exports = {
  branches: [
    /**
     * `channel` is undefined so the default distribution channel will be used
     */
    { name: 'main' },
    /**
     * Only after the `1.x` is created in the repo
     */
    { name: '1.x', range: '1.x', channel: '1.x' },
    /**
     * Only after the `2.x` is created in the repo
     */
    { name: '2.x', range: '2.x', channel: '2.x' },
    /**
     * 如果没有指定 channel , channel默认等于 name
     * The value of channel, if defined as a string, is generated with Lodash template with the variable name available.
     * `channel` is built with the template `channel-${name}`
     */
    { name: 'next', channel: 'channel-next' },
    /**
     * The value of channel, if defined as a string, is generated with Lodash template with the variable name available.
     * {name: 'pre/rc', prerelease: '${name.replace(/^pre\\//g, "")}'
     * 等效于  {name: 'pre/rc', channel: 'pre/rc', prerelease: 'rc'},
     * `prerelease` is built with the template `${name.replace(/^pre\\//g, "")}`
     * ----------------------------------------------------------------------------
     *
     * ----------------------------------------------------------------------------
     * prerelease属性仅适用于预发布分支
     * 等效 {name: 'beta', prerelease: true}
     */
    { name: 'beta', channel: 'beta', prerelease: true },
  ],
  /**
   * Default: [
   *     '@semantic-release/commit-analyzer',
   *     '@semantic-release/release-notes-generator',
   *     '@semantic-release/npm',
   *     '@semantic-release/github'
   *  ]
   */
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'docs', scope: 'README', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    ['@semantic-release/npm'],
    [
      '@semantic-release/git',
      {
        // message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes} --no-verify',
        // 寫在 assets 裡的內容可以在 CI 後被 commit 到 git repository 內
        // 預設是 ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json']
        assets: ['docs/CHANGELOG.md'],
      },
    ],
  ],
  repositoryUrl: 'git@github.com:daihaoxin/vue-component.git',
  /**
   * Output debugging information. This can also be enabled by setting the DEBUG environment variable to semantic-release:*.
   *
   * Note: The debug is used only supported via CLI argument. To enable debug mode from the JS API use require('debug').enable('semantic-release:*').
   */
  debug: false,
  /**
   * Default: true
   * CLI arguments: --ci / --no-ci
   * 设置为false可跳过持续集成环境验证，允许从本地机器进行发布。
   */
  ci: true,
  /**
   * Default: v${version}
   */
  tagFormat: 'v${version}',
  /**
   * Default: false if running in a CI environment, true otherwise
   * CLI arguments: -d, --dry-run
   * 进行验证潜在问题
   */
  dryRun: false,
};
