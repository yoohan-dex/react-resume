module.exports = {
  title: '姚帆 - 个人简历',
  name: '姚帆',
  repo: 'https://github.com/yoohan-dex/resume.git',
  job_description: ['前端工程师', 'JS工程师'],
  contact: [{
    type: 'email',
    value: 'yao460733480@outlook.com',
  }, {
    type: 'wechat',
    value: 'yoohan-dex',
  }, {
    type: 'github',
    value: 'yoohan-dex',
  }, {
    type: 'blog',
    value: 'http://page.github.io',
  }, {
    type: 'phone',
    value: '13824829707',
  }, {
    type: 'weibo',
    value: 'yoohan555',
  }],
  education: {
    type: 'undergraduate',
    school: '广东海洋大学',
    major: '计算机科学',
    start: 2013,
    end: 2017,
    honor: '2016年度`校级SB一等奖`',
  },
  language: {
    type: 'english',
    certifications: [{
      type: 'CET-4',
      full: '710',
      score: '580',
    }, {
      type: 'CET-6',
      full: '710',
      score: '480',
    }],
    descriptions: [
      '能`流畅阅读`英文专业书籍、文档及其他资料',
      '可`无字幕`观看MOOC课程、开发者大会视频',
      '能够在`英文邮件列表`、`Stack Overflow` 等社区正常交流',
    ],
  },
  experience: [{
    place: '腾讯前端部门',
    en: 'frontend',
    ch: '前端开发',
    start: '2017.06.12',
    end: '2017.02.01',
    descriptions: [
      '参与公司内部办公系统的前端开发，基于`React`和`Bootstrap`实现前端组件及数据交互',
      '使用`wepback`和`Sass`完成可扩增的`自动化工程部署`',
    ],
    stack: ['bootstrap', 'redux', 'react', 'sass', 'webpack'],
  }, {
    place: '广东海洋大学领沃实验室',
    en: 'backend',
    ch: '后台开发',
    start: '2016.01.1',
    end: '2016.10.01',
    descriptions: [
      '负责开发整容点评网站前端页面',
      '引导新生走进前端的世界',
      '使用`webpack`，`Sass`和`React`为实验室构建一套自动化开发手脚架',
    ],
    stack: ['webpack', 'redux', 'functional programing'],
  }],
  projects: [{
    ch: '简历生成器',
    en: 'Resume Generator',
    demo: 'https://yoohan-dex.github.io',
    source: 'https://github.com/yoohan-dex/react-resume',
    descriptions: [
      '这份在线简历的生成器',
      '从 `js文` 读取数据，`React `生成 `HTML`，`Sass` 生成响应式样式',
    ],
  }, {
    ch: '简历生成器',
    en: 'Resume generator',
    demo: 'https://yoohan-dex.github.io',
    source: 'https://github.com/yoohan-dex/react-resume',
    descriptions: [
      '这份在线简历的生成器',
      '从 `js文` 读取数据，`React `生成 `HTML`，`Sass `生成响应式样式',
    ],
  }],
  skills: [{
    ch: '前端开发',
    en: 'frontend',
    brief: 'HTML5,CSS3,SASS',
    descriptions: [
      '能够编写语义化的 `HTML`，模块化的 `CSS`，实现较复杂的布局与动画',
      '能够编写语义化的 `HTML`，模块化的 `CSS`，实现较复杂的布局与动画',
      '能够编写语义化的 `HTML`，模块化的 `CSS`，实现较复杂的布局与动画',
    ],
  }, {
    ch: '前端工程实践',
    brief: '`WEBPACK`,`GULP`,`NPM`',
    descriptions: ['', '', ''],
  }],
};
