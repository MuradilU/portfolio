import ScrollReveal from "scrollreveal"

const isSSR = typeof window === "undefined"
const scrollreveal = isSSR ? null : ScrollReveal()

export default scrollreveal
