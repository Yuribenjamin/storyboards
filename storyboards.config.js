const NODE_ENV = process.env.NODE_ENV
console.log('NODE_ENV', NODE_ENV)

module.exports = {
    // basePath: NODE_ENV == 'production' ? '/.storyboards' : '/',
    stories: ['./example-package/**.story.tsx',],
    wrapper: './example-package/src/Wrapper.tsx'
}
