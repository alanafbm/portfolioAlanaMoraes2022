export const language = {
    greetings: {
        en: "Hi, I'm Alana Moraes. I'm a Web Developer junior.",
        fr: "Bonjour, je m'apelle Alana. Je suis une developpeuse web junior."
    },
    homeDescriptions: {
        en: 'I  love to create beautiful and functional websites. I am someone with a great motivation to work. Always sociable with a good team spirit, ability to learn quickly, responsible and organized.',
        fr: 'I  love to create beautiful and functional websites. I am someone with a great motivation to work. Always sociable with a good team spirit, ability to learn quickly, responsible and organized.',
    }
}

// check localstorage
// if dont exist create default to 'en' ( parse json )
// based on the lang choosed save a variable called lang with the value ( en or fr)
// let lang = 'en'
// language.greetings[lang]